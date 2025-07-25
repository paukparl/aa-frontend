import clsx from "clsx";
import * as React from "react";
import { Body } from "@/components/Typography/Body";

type ProgrammeTextColProps = {
  className?: string;
  children: React.ReactNode;
  col2content?: React.ReactNode;
};

export const ProgrammeTextCol = ({
  children,
  col2content,
  className,
}: ProgrammeTextColProps) => {
  return (
    <div className={clsx(className, "pb-[50px] md:pr-[30px]")}>
      <div className="grid grid-cols-1 gap-[20px] md:grid-cols-[2fr_1fr] md:gap-[30px]">
        <Body>{children}</Body>
        <div>{col2content}</div>
      </div>
    </div>
  );
};
0;
