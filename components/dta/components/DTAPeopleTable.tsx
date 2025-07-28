import clsx from "clsx";
import * as React from "react";
import { Body } from "@/components/Typography/Body";

type ContentItem = {
  info: string;
  year: string;
};

type DTAPeopleTableProps = {
  content: ContentItem[];
  className?: string;
};
export const DTAPeopleTable = ({ content, className }: DTAPeopleTableProps) => {
  return (
    <div
      className={clsx(className, "mb-[10px] flex w-full flex-col gap-[5px]")}
    >
      {content.map((row, index) => (
        <div
          className="flex justify-between"
          key={`dta-table-people-${row.info}-${row.year}-${index}`}
        >
          <Body>{row.info}</Body>
          <Body>{row.year}</Body>
        </div>
      ))}
    </div>
  );
};
