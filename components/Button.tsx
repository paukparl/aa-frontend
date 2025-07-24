"use client";

import { Slot } from "radix-ui";
import { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";
import composeVariants from "@/lib/composeVariants";

// Themable button to control appearance and behavior in single file

export default function Button({
  theme,
  loading,
  nonInteractive = false,
  appearDisabled = false,
  asChild,
  leftIcon,
  rightIcon,
  children,
  className,
  disabled,
  ...props
}: {
  theme: "minimal";
  loading?: boolean;
  nonInteractive?: boolean; // no reaction to hover, click or focus
  appearDisabled?: boolean; // interactive but looks disabled
  asChild?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
} & ComponentProps<"button">) {
  const Comp = asChild ? Slot.Root : "button";

  return (
    <Comp
      className={cn(
        "relative h-(--btn-h) w-(--btn-w) rounded-(--btn-r) px-(--btn-px) py-(--btn-py) outline-hidden",
        theme !== "minimal" &&
          "inline-flex items-center justify-center text-(length:--btn-text)",
        !nonInteractive && [
          "cursor-pointer disabled:cursor-not-allowed",
          loading && "cursor-wait",
        ],
        // Themes
        theme === "minimal" && [
          "-mx-(--btn-px) -my-(--btn-py) text-current",
          composeVariants(
            {
              hover: "hover:opacity-60",
              active: "active:opacity-30",
              loading: "data-[loading]:cursor-wait data-[loading]:opacity-30",
              appearDisabled: "data-[appear-disabled]:opacity-30",
              disabled: "disabled:opacity-30",
            },
            { loading, appearDisabled, nonInteractive },
          ),
        ],
        className,
      )}
      disabled={loading || disabled}
      {...(loading && { "data-loading": "" })}
      {...(appearDisabled && { "data-appear-disabled": "" })}
      {...props}
    >
      {leftIcon}
      <Slot.Slottable>{children}</Slot.Slottable>
      {rightIcon}
    </Comp>
  );
}
