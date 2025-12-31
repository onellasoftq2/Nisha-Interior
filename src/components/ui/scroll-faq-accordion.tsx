
"use client";

import * as React from "react";
import { motion } from "framer-motion";
import * as Accordion from "@radix-ui/react-accordion";
import { Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  icon?: string;
  iconPosition?: "left" | "right";
}

interface ScrollFAQAccordionProps {
  data: FAQItem[];
  className?: string;
  questionClassName?: string;
  answerClassName?: string;
}

export default function ScrollFAQAccordion({
  data = [],
  className,
  questionClassName,
  answerClassName,
}: ScrollFAQAccordionProps) {
  const [openItem, setOpenItem] = React.useState<string | null>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const contentRefs = React.useRef<Map<string, HTMLDivElement>>(new Map());

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }
  }, []);

  useGSAP(() => {
    if (!containerRef.current || data.length === 0) return;

    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    // Set the first item as open by default
    if (data.length > 0) {
      setOpenItem(data[0].id.toString());
    }

    data.forEach((item, index) => {
      const contentRef = contentRefs.current.get(item.id.toString());
      if (contentRef) {
        ScrollTrigger.create({
          trigger: contentRef,
          start: "top 60%",
          end: "bottom 40%",
          onEnter: () => setOpenItem(item.id.toString()),
          onEnterBack: () => setOpenItem(item.id.toString()),
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [data]);

  return (
    <div className={cn("w-full py-16 md:py-16", className)}>
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl md:text-4xl font-headline mb-8">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="md:w-full lg:w-[600px] mx-auto">
        <Accordion.Root type="single" collapsible value={openItem || ""} onValueChange={setOpenItem}>
          {data.map((item) => (
            <Accordion.Item value={item.id.toString()} key={item.id} className="mb-3 border-b-0" ref={(el) => {
              if (el) contentRefs.current.set(item.id.toString(), el);
            }}>
              <Accordion.Header>
                <Accordion.Trigger className="flex w-full items-center justify-between gap-x-4 cursor-pointer text-left py-1 focus:outline-none">
                  <span
                    className={cn(
                      "text-md font-medium transition-colors",
                      openItem === item.id.toString()
                        ? "text-primary"
                        : "text-foreground/70 hover:text-foreground",
                      questionClassName
                    )}
                  >
                    {item.question}
                  </span>

                  <span
                    className={cn(
                      "text-muted-foreground transition-transform duration-300",
                      openItem === item.id.toString() && "text-primary rotate-45"
                    )}
                  >
                    <Plus className="h-5 w-5" />
                  </span>
                </Accordion.Trigger>
              </Accordion.Header>

              <Accordion.Content asChild forceMount>
                <motion.div
                  initial="collapsed"
                  animate={openItem === item.id.toString() ? "open" : "collapsed"}
                  variants={{
                    open: { opacity: 1, height: "auto", marginTop: "16px" },
                    collapsed: { opacity: 0, height: 0, marginTop: "0px" },
                  }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div
                    className={cn(
                      "text-base text-left text-muted-foreground pb-4",
                      answerClassName
                    )}
                  >
                    {item.answer}
                  </div>
                </motion.div>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </div>
  );
}
