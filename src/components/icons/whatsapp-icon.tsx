import { cn } from "@/lib/utils";
import type { SVGProps } from "react";

export const WhatsappIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={cn("h-6 w-6", props.className)}
    {...props}
  >
    <path d="M16.75 13.96c.27.13.41.41.41.72v2.12c0 .41-.17.78-.47 1a1.99 1.99 0 0 1-1.12.39c-1.37 0-2.83-.61-4.22-1.92-1.7-1.6-2.9-3.56-3.23-4.2a1.86 1.86 0 0 1 .36-1.5l1.09-1.09c.33-.33.86-.33 1.19 0l.28.28c.33.33.33.86 0 1.19l-.79.79c-.1.1-.13.26-.06.39.31.57.82 1.29 1.58 2.05s1.48 1.27 2.05 1.58c.13.07.29.04.39-.06l.79-.79c.33-.33.86-.33 1.19 0l.28.28zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
  </svg>
);
