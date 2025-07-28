import Image from "next/image";
import * as React from "react";
import { H1 } from "@/components/Typography/H1";
import { DTAHeader } from "@/components/dta/components/DTAHeader";
import { DTATablePeople } from "@/components/dta/components/DTATablePeople";
import { cn } from "@/lib/cn";
import { Schema } from "@/lib/schemas";

type DTAPersonPageContentProps = {
  person: Schema<"dtaPersonDetail">;
};

export const DTAPersonPageContent = ({ person }: DTAPersonPageContentProps) => {
  return (
    <div className={cn("flex flex-col gap-20 p-24 sm:gap-72")}>
      <H1 tipIn>
        Handel Kitchiner (Hal) Lawson
        <br />
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
        <div>
          <DTAHeader className="capitalize">Education</DTAHeader>
          <DTATablePeople
            type="education"
            content={person.Eduction.map((row) => ({
              info: `${row.courseName ? `${row.courseName}, ` : ""}${row.institution ? `${row.institution}, ` : ""}${row.country ?? ""}`,
              year: row.dateRange ?? "",
            }))}
          />
        </div>
        <div>
          <DTAHeader className="capitalize">Education</DTAHeader>
          <DTATablePeople
            type="career"
            content={person.Career.map((row) => ({
              info: `${row.jobRole ? `${row.jobRole}, ` : ""}${row.institution ? `${row.institution}, ` : ""}${row.country ?? ""}`,
              year: row.dateRange ?? "",
            }))}
          />
        </div>
      </div>
      <div>
        <DTAHeader className="capitalize">Map</DTAHeader>
      </div>
      <div>
        <DTAHeader className="capitalize">Related Practices</DTAHeader>
      </div>
      <div>
        <DTAHeader className="capitalize">Related Institutions</DTAHeader>
      </div>
      <div>
        <DTAHeader className="capitalize">Related Collections</DTAHeader>
      </div>
    </div>
  );
};
