// TODO
import clsx from "clsx";
import React from "react";
import { Body } from "@/components/Typography/Body";

type DTAHeaderProps = {
  title: string;
  className?: string;
};

export default ({ title, className }: DTAHeaderProps) => {
  return (
    <div
      className={clsx(
        className,
        "mb-[10px] w-full border-b-[1.5px] pb-[10px] md:border-b-[2px]",
      )}
    >
      <Body children={title} />
    </div>
  );
};
