import { ComponentProps } from "react";
import { cn } from "@/lib/cn";

export default function PauseSvg({
  className,
  ...props
}: ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 21 21"
      className={cn(className)}
      {...props}
    >
      <path d="M9 3H4V18H9V3Z" fill="currentColor" />
      <path d="M17 3H12V18H17V3Z" fill="currentColor" />
    </svg>
  );
}
