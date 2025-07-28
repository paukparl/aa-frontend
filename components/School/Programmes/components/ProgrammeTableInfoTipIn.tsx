import clsx from "clsx";
import * as React from "react";
import { Mono } from "@/components/Typography/Mono";

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
            <Mono className="block border-r border-b border-dotted p-[15px]">
              {item.type}
            </Mono>
            <Mono className="block border-b border-dotted p-[15px]">
              {item.content}
            </Mono>
          </>
        ))}
      </div>
    </div>
  );
};
