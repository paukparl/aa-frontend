import clsx from "clsx";
import * as React from "react";

type ProgrammeDoubleTextColProps = {
  className?: string;
  col1Content: React.ReactNode;
  col2Content: React.ReactNode;
};

export const ProgrammeDoubleTextCol = ({
  col1Content,
  col2Content,
  className,
}: ProgrammeDoubleTextColProps) => {
  return (
    <div
      className={clsx(
        className,
        "grid-cols-1fr grid grid-cols-1 sm:grid-cols-[1fr_1fr] sm:gap-[30px]",
      )}
    >
      <div>{col1Content}</div>
      <div>{col2Content}</div>
    </div>
  );
};
