import clsx from "clsx";
import * as React from "react";
import DTAHeader from "@/components/DTA/components/DTAHeader";
import { Body } from "@/components/Typography/Body";

type TableType = "education" | "career";

type DTATablePeopleProps = {
  type: TableType;
  content: Array<Record<string, any>>;
  className?: string;
};
export default ({ type, content, className }: DTATablePeopleProps) => {
  return (
    <div
      className={clsx(className, "mb-[10px] flex w-full flex-col gap-[5px]")}
    >
      <DTAHeader className="capitalize" title={type} />
      {content.map((row) => (
        <div className="flex justify-between">
          <Body children={row.info} />
          <Body children={row.year} />
        </div>
      ))}
    </div>
  );
};
