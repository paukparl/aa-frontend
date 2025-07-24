import clsx from "clsx";
import React from "react";
import type { ReactNode } from "react";

type H2Props = {
  children: ReactNode;
  className?: string;
};

export const H2 = ({ children, className }: H2Props) => {
  return <h2 className={clsx("h2", className)}>{children}</h2>;
};
