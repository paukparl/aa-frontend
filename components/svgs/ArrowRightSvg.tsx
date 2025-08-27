import { ComponentProps } from "react";
import { cn } from "@/lib/cn";

export function ArrowRightSvg({ className, ...props }: ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      stroke="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
      {...props}
    >
      <path d="M2 18H32" stroke-width="5" />
      <path d="M17 3L32 18L17 33" stroke-width="5" />
    </svg>
  );
}
