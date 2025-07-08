// Add children as object instead of string
// depending on output from Strapi
import clsx from "clsx";
import React from "react";

type MonoProps = {
  children: string;
  className?: string;
  small?: boolean;
};

export const Mono = ({ children, className, small }: MonoProps) => {
  return (
    <span className={clsx("mono", className, small && "!text-[12px]")}>
      {children}
    </span>
  );
};
