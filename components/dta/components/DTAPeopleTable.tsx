import * as React from "react";
import { cn } from "@/lib/cn";

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
    <div className={cn(className, "mb-[10px] flex w-full flex-col gap-[5px]")}>
      {content.map((row, index) => (
        <div
          className="flex justify-between"
          key={`dta-table-people-${row.info}-${row.year}-${index}`}
        >
          <span className="body">{row.info}</span>
          <span className="body">{row.year}</span>
        </div>
      ))}
    </div>
  );
};
