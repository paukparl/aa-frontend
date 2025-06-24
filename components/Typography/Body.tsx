// Add children as object instead of string
// depending on output from Strapi
import React from 'react';
import clsx from 'clsx';

type BodyProps = {
  content: string;
  className?: string;
};

export const Body = ({ content, className }: BodyProps) => {
  return <span className={clsx("body", className)}>{content}</span>;
};
