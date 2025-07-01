// Add children as object instead of string
// depending on output from Strapi
import clsx from "clsx";
import React from "react";

type BodyProps = {
  children: string;
  className?: string;
};

export const Body = ({ children, className }: BodyProps) => {
  return <span className={clsx("body", className)}>{children}</span>;
};
