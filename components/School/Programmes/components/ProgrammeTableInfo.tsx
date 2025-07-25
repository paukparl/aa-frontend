import clsx from "clsx";
import * as React from "react";
import { Mono } from "@/components/Typography/Mono";

type ProgrammeTableInfoProps = {
  className?: string;
  degreeType: string;
  duration: string;
};

export const ProgrammeTableInfo = ({
  className,
  degreeType,
  duration,
}: ProgrammeTableInfoProps) => {
  return (
    <div className={clsx(className, "pb-[50px]")}>
      <div className="mt-[10px] grid border border-dotted sm:mt-[20px] sm:min-h-[85px] md:grid-cols-2">
        <Mono className="block border-b border-dotted p-[15px] md:border-r md:border-b-[0px]">
          {degreeType}
        </Mono>
        <Mono className="block p-[15px]">{duration}</Mono>
      </div>
    </div>
  );
};
0;
