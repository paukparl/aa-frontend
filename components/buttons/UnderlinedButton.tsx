"use client";

import { Slot } from "radix-ui";
import { ComponentProps } from "react";
import { cn } from "@/lib/cn";
import composeVariants from "@/lib/composeVariants";

export default function UnderlinedButton({
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
        "relative -mx-(--btn-px) -my-(--btn-py) text-current underline decoration-dotted underline-offset-[0.25em] outline-hidden",
        composeVariants({
          hover: "hover:opacity-60",
          active: "active:opacity-30",
          loading: "data-[loading]:opacity-30",
          appearDisabled: "data-[appear-disabled]:opacity-30",
          disabled: "disabled:opacity-30",
        }),
        className,
      )}
      disabled={disabled}
      {...props}
    >
      <Slot.Slottable>{children}</Slot.Slottable>
    </Comp>
  );
}
