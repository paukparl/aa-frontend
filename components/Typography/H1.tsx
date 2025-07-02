// Add children as object instead of string
// depending on output from Strapi
import clsx from "clsx";
import React from "react";

type H1Props = {
  children: string;
  tipIn?: boolean;
  className?: string;
};

export const H1 = ({ children, tipIn = false, className = "" }: H1Props) => {
  return (
    <h1 className={clsx(tipIn ? `h1-tipin` : `h1`, className)}>{children}</h1>
  );
};
