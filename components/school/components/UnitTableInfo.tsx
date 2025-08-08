import clsx from "clsx";
import * as React from "react";

type courseInfoItem = { type: string; content: string };
type ProgrammeTableInfoTipInProps = {
  className?: string;
  items: courseInfoItem[];
};

export const ProgrammeTableInfoTipIn = ({
  className,
  items,
}: ProgrammeTableInfoTipInProps) => {
  return (
    <div className={clsx(className, "pb-[30px] sm:pb-[50px]")}>
      <div className="mt-[10px] grid grid-cols-[1fr_2fr] border-x border-t border-dotted sm:mt-[20px] sm:min-h-[85px] md:grid-cols-[1fr_3fr]">
        {items.map((item) => (
          <>
            <div className="border-r border-b border-dotted p-[15px] mono">
              {item.type}
            </div>
            <div className="border-b border-dotted p-[15px] mono">
              {item.content}
            </div>
          </>
        ))}
      </div>
    </div>
  );
};
