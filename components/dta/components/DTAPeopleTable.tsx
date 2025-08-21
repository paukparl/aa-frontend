import * as React from "react";
import { DTAHeader } from "@/components/dta/components/DTAHeader";
import { cn } from "@/lib/cn";
import { Schema } from "@/lib/schemas";

type DTAPeopleTableProps = {
  person: Schema<"dtaPersonDetail">;
  className?: string;
};
export const DTAPeopleTable = ({ person, className }: DTAPeopleTableProps) => {
  return (
    <div
      className={cn(
        className,
        "grid grid-cols-1 gap-(--padding) 1024:grid-cols-2",
      )}
    >
      {person.Eduction && (
        <div>
          <DTAHeader>Education</DTAHeader>
          <div className="mb-[10px] flex w-full flex-col gap-[5px]">
            {person.Eduction.map((row, index) => {
              const info = `${row.courseName ? `${row.courseName}, ` : ""}${row.institution ? `${row.institution}, ` : ""}${row.country ?? ""}`;
              const year = row.dateRange ?? "";
              return (
                <div
                  className="flex justify-between"
                  key={`dta-table-people-${info}-${year}-${index}`}
                >
                  <span className="body">{info}</span>
                  <span className="body">{year}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
      {person.Career && (
        <div>
          <DTAHeader>Career</DTAHeader>
          {person.Career.map((row, index) => {
            const info = `${row.jobRole ? `${row.jobRole}, ` : ""}${row.institution ? `${row.institution}, ` : ""}${row.country ?? ""}`;
            const year = row.dateRange ?? "";
            return (
              <div
                className="flex justify-between"
                key={`dta-table-people-${info}-${year}-${index}`}
              >
                <span className="body">{info}</span>
                <span className="body">{year}</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
