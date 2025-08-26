import { motion } from "motion/react";
import { ComponentProps } from "react";

export default function MenuSvg({
  className,
  mode = "menu",
  ...props
}: ComponentProps<"svg"> & {
  mode?: "menu" | "close";
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 36 36"
      fill="none"
      stroke="currentColor"
      strokeWidth="6"
      className={className}
      {...props}
    >
      <motion.line
        x1="1"
        y1="4"
        x2="35"
        y2="4"
        style={{
          scaleX: mode === "menu" ? 1 : 1.15,
          rotate: mode === "menu" ? 0 : 45,
          y: mode === "menu" ? 0 : 14,
        }}
        transformTemplate={({ scaleX, rotate, y }) =>
          `translateY(${y}) rotate(${rotate}) scaleX(${scaleX})`
        }
      />
      <motion.line
        x1="1"
        y1="18"
        x2="35"
        y2="18"
        style={{
          opacity: mode === "menu" ? 1 : 0,
        }}
      />
      <motion.line
        x1="1"
        y1="32"
        x2="35"
        y2="32"
        style={{
          scaleX: mode === "menu" ? 1 : 1.15,
          rotate: mode === "menu" ? 0 : -45,
          y: mode === "menu" ? 0 : -14,
        }}
        transformTemplate={({ scaleX, rotate, y }) =>
          `translateY(${y}) rotate(${rotate}) scaleX(${scaleX})`
        }
      />
    </svg>
  );
}
