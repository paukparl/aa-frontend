// TODO
import clsx from "clsx";
import React from "react";
import { Body } from "@/components/Typography/Body";

type DTAHeaderProps = {
  children: string;
  className?: string;
};

export const DTAHeader = ({ children, className }: DTAHeaderProps) => {
  return (
    <div
      className={clsx(
        className,
        "mb-[10px] w-full border-b-[1.5px] pb-[10px] md:border-b-[2px]",
      )}
    >
      <Body children={children} />
    </div>
  );
};
