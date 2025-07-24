import clsx from "clsx";
import React from "react";
import type { ReactNode } from "react";

type H1Props = {
  children: ReactNode;
  tipIn?: boolean;
  className?: string;
};

export const H1 = ({ children, tipIn = false, className = "" }: H1Props) => {
  return (
    <h1 className={clsx(tipIn ? `h1-tipin` : `h1`, className)}>{children}</h1>
  );
};
