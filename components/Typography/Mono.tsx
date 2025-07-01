// Add children as object instead of string
// depending on output from Strapi
import React from 'react';
import clsx from 'clsx';

type MonoProps = {
  children: string;
  className?: string;
};

export const Mono = ({ children, className }: MonoProps) => {
  return <span className={clsx("mono", className)}>{children}</span>;
};
