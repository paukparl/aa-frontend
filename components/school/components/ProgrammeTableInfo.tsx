import clsx from "clsx";
import * as React from "react";

type ProgrammeTableInfoProps = {
  className?: string;
  degreeAwarded: string | null;
  durationText: string | null;
};

export const ProgrammeTableInfo = ({
  className,
  degreeAwarded,
  durationText,
}: ProgrammeTableInfoProps) => {
  return (
    <div className={clsx(className, "pb-[50px]")}>
      <div className="mt-[10px] grid border border-dotted sm:mt-[20px] sm:min-h-[85px] md:grid-cols-2">
        <div className="border-b border-dotted p-[15px] mono md:border-r md:border-b-[0px]">
          {degreeAwarded}
        </div>
        <div className="p-[15px] mono">{durationText}</div>
      </div>
    </div>
  );
};
