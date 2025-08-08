import React from "react";
import { cn } from "@/lib/cn";

type DTAHeaderProps = {
  children: string;
  className?: string;
};

export const DTAHeader = ({ children, className }: DTAHeaderProps) => {
  return (
    <div
      className={cn(
        className,
        "700:mb-30 700:pb-20 700:border-b-2 mb-10 w-full border-b pb-10",
      )}
    >
      <span className="body">{children}</span>
    </div>
  );
};
