// Add children as object instead of string
// depending on output from Strapi
import React from 'react';
import clsx from 'clsx';

type H1Props = {
  content: string;
  tipIn?: boolean;
  className?: string
};

export const H1 = ({ content, tipIn = false, className = "" }: H1Props) => {
  return <h1 className={clsx(tipIn ? `h1-tipin` : `h1`, className)}>{content}</h1>;
};
