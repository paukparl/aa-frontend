import clsx from "clsx";
import React from "react";
import type { ReactNode } from "react";

type ULProps = {
  children: ReactNode[];
  className?: string;
  liClassName?: string;
};

export const UL = ({ children, className, liClassName }: ULProps) => {
  return (
    <ul className={clsx("ul", className)}>
      {children.map((item) => (
        <div key={`${item}`} className="grid grid-cols-[50px_1fr]">
          <div className="mt-[5px] h-[20px] w-[20px] rounded-full border border-dotted"></div>
          <li className={clsx("pb-[6px] sm:pb-[12px]", liClassName)}>{item}</li>
        </div>
      ))}
    </ul>
  );
};
