// Add children as object instead of string
// depending on output from Strapi
import clsx from "clsx";
import React from "react";

type MonoProps = {
  children: string;
  className?: string;
};

export const Mono = ({ children, className }: MonoProps) => {
  return <span className={clsx("mono", className)}>{children}</span>;
};
