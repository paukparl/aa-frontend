import { ComponentProps } from "react";

export default function PlaySvg({
  className,
  ...props
}: ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 21 21"
      className={className}
      {...props}
    >
      <path d="M4.5 3L16.5 10.5L4.5 18V3Z" fill="currentColor" />
    </svg>
  );
}
