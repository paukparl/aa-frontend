"use client";

import { Slot } from "radix-ui";
import { ComponentProps } from "react";
import { cn } from "@/lib/cn";
import composeVariants from "@/lib/composeVariants";

export default function DashedMonoButton({
  asChild,
  children,
  className,
  disabled,
  ...props
}: {
  asChild?: boolean;
} & ComponentProps<"button">) {
  const Comp = asChild ? Slot.Root : "button";
  return (
    <Comp
      className={cn(
        "relative inline-flex h-(--btn-h) cursor-pointer items-center dashed px-(--btn-px) font-diatype text-(length:--btn-text) text-current",
        composeVariants({
          hover: "hover:solid",
          // active: "active:opacity-30",
          // loading: "data-[loading]:cursor-wait data-[loading]:opacity-30",
          // appearDisabled: "data-[appear-disabled]:opacity-30",
          // disabled: "disabled:opacity-30",
        }),
        className,
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </Comp>
  );
}
