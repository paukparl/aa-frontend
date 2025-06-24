// Add children as object instead of string
// depending on output from Strapi
import React from 'react';
import clsx from 'clsx';

type MonoProps = {
  content: string;
  className?: string;
};

export const Mono = ({ content, className }: MonoProps) => {
  return <span className={clsx("mono", className)}>{content}</span>;
};
