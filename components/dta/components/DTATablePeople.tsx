import clsx from "clsx";
import * as React from "react";
import { DTAHeader } from "@/components/dta/components/DTAHeader";

type TableType = "education" | "career";
type ContentItem = {
  info: string;
  year: string;
};

type DTATablePeopleProps = {
  type: TableType;
  content: ContentItem[];
  className?: string;
};
export const DTATablePeople = ({
  type,
  content,
  className,
}: DTATablePeopleProps) => {
  return (
    <div
      className={clsx(className, "mb-[10px] flex w-full flex-col gap-[5px]")}
    >
      <DTAHeader className="capitalize">{type}</DTAHeader>
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
