// Add children as object instead of string
// depending on output from Strapi
import clsx from "clsx";
import React from "react";

type CaptionProps = {
  children: string;
  className?: string;
};

export const Caption = ({ children, className }: CaptionProps) => {
  return <span className={clsx("caption", className)}>{children}</span>;
};
