import clsx from "clsx";
import React from "react";
import type { ReactNode } from "react";

type BodyProps = {
  children: ReactNode;
  className?: string;
};

export const Body = ({ children, className }: BodyProps) => {
  return <span className={clsx("body", className)}>{children}</span>;
};
