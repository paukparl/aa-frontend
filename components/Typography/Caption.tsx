// Add children as object instead of string
// depending on output from Strapi
import React from 'react';
import clsx from 'clsx';

type CaptionProps = {
  content: string;
  className?: string;
};

export const Caption = ({ content, className }: CaptionProps) => {
  return <span className={clsx("caption", className)}>{content}</span>;
};
