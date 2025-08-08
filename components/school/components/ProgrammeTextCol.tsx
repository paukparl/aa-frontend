import * as React from "react";

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
    <div className={className}>
      <div className="grid grid-cols-1 gap-[20px] md:grid-cols-[2fr_1fr] md:gap-[30px]">
        <span className="body">{children}</span>
        <div>{col2content}</div>
      </div>
    </div>
  );
};
