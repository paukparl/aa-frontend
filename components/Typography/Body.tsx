// Add children as object instead of string
// depending on output from Strapi
import React from 'react';
import clsx from 'clsx';

type BodyProps = {
  children: string;
  className?: string;
};

export const Body = ({ children, className }: BodyProps) => {
  return <span className={clsx("body", className)}>{children}</span>;
};
