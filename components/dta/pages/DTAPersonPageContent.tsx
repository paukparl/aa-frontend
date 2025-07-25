import Image from "next/image";
import * as React from "react";
import { H1 } from "@/components/Typography/H1";
import { DTATablePeople } from "@/components/dta/components/DTATablePeople";
import { cn } from "@/lib/cn";
import { Schema } from "@/lib/schemas";

type DTAPersonPageContentProps = {
  person: Schema<"dtaPersonDetail">;
};

export const DTAPersonPageContent = ({ person }: DTAPersonPageContentProps) => {
  return (
    <div className={cn("flex flex-col gap-20 p-24 sm:gap-30")}>
      <H1 tipIn>Handel Kitchiner (Hal) Lawson</H1>
      <H1 tipIn className="block">
        1928-1985
      </H1>
      <div className={cn("grid grid-cols-2 gap-24")}>
        <div className={cn("")}>
          {person.headshot && (
            <div className={cn("relative aspect-4/5")}>
              <Image
                fill
                sizes="50vw"
                src={person.headshot.url}
                alt={person.headshot.alternativeText ?? ""}
                className={cn("object-cover")}
              />
            </div>
          )}
        </div>
        <div className={cn("body")}>{person.bio}</div>
      </div>
      <div className="grid grid-cols-1 gap-[30px] md:grid-cols-2">
        <DTATablePeople
          type="education"
          content={person.Eduction.map((row) => ({
            info: `${row.courseName ? `${row.courseName}, ` : ""}${row.institution ? `${row.institution}, ` : ""}${row.country ?? ""}`,
            year: row.dateRange ?? "",
          }))}
        />
        <DTATablePeople
          type="career"
          content={person.Career.map((row) => ({
            info: `${row.jobRole ? `${row.jobRole}, ` : ""}${row.institution ? `${row.institution}, ` : ""}${row.country ?? ""}`,
            year: row.dateRange ?? "",
          }))}
        />
      </div>
    </div>
  );
};
