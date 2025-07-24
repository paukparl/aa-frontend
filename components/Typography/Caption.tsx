import clsx from "clsx";
import React from "react";
import type { ReactNode } from "react";

type CaptionProps = {
  children: ReactNode;
  className?: string;
};

export const Caption = ({ children, className }: CaptionProps) => {
  return <span className={clsx("caption", className)}>{children}</span>;
};
