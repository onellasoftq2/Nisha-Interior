import { cn } from "@/lib/utils";
import type { SVGProps } from "react";

export const LogoIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        className={cn("h-6 w-6", props.className)}
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM9.62 17H7.5V7h2.12v8.15L17.5 7h2.12v10h-2.12V8.85L9.62 17z"
        />
    </svg>
);
