// Add children as object instead of string
// depending on output from Strapi
import React from 'react';
import clsx from 'clsx';

type H2Props = {
  children: string;
  className?: string;
};

export const H2 = ({ children, className }: H2Props) => {
  return <h2 className={clsx("h2", className)}>{children}</h2>;
};
