"use client";

import { ComponentProps } from "react";
import Button from "@/components/Button";
import LoadingLink from "@/components/LoadingLink";
import { cn } from "@/lib/cn";

export default function TempLink({
  className,
  ...props
}: ComponentProps<typeof LoadingLink>) {
  return (
    <Button theme="minimal" asChild>
      <LoadingLink
        className={cn(
          "inline-block font-diatype text-24 font-400 underline",
          className,
        )}
        {...props}
      />
    </Button>
  );
}
