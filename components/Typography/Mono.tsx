import clsx from "clsx";
import React from "react";
import type { ReactNode } from "react";

type MonoProps = {
  children: ReactNode;
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
