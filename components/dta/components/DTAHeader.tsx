// TODO
import clsx from "clsx";
import React from "react";

type DTAHeaderProps = {
  children: string;
  className?: string;
};

export const DTAHeader = ({ children, className }: DTAHeaderProps) => {
  return (
    <div
      className={clsx(
        className,
        "1024:border-b-[2px] mb-[10px] w-full border-b-[1.5px] pb-[10px]",
      )}
    >
      <span className="body">{children}</span>
    </div>
  );
};
