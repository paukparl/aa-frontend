import Image from "next/image";
import * as React from "react";
import { H1 } from "@/components/Typography/H1";
import { DTAHeader } from "@/components/dta/components/DTAHeader";
import {
  DTAObjectsGrid,
  DTAObjectsGridItem,
} from "@/components/dta/components/DTAObjectsGrid";
import {
  DTAPeopleGrid,
  DTAPeopleGridItem,
} from "@/components/dta/components/DTAPeopleGrid";
import {
  DTAPracticesGrid,
  DTAPracticesGridItem,
} from "@/components/dta/components/DTAPracticesGrid";
import { cn } from "@/lib/cn";
import { Schema } from "@/lib/schemas";

type DTAInstitutionPageContentProps = {
  institution: Schema<"dtaInstitutionDetail">;
};

export const DTAInstitutionPageContent = ({
  institution,
}: DTAInstitutionPageContentProps) => {
  return (
    <div className="flex flex-col gap-[20px] p-24 sm:gap-[30px]">
      <H1 tipIn>{institution.Name}</H1>
      <div className={cn("grid grid-cols-2 gap-24")}>
        <div className={cn("relative")}>
          {institution.Display && (
            <div
              className={cn("relative")}
              style={{
                aspectRatio:
                  institution.Display.width / institution.Display.height,
              }}
            >
              <Image
                fill
                sizes="50vw"
                src={institution.Display.url}
                alt={institution.Display.alternativeText ?? ""}
              />
            </div>
          )}
        </div>
        <div className={cn("body")}>{institution.Description}</div>
      </div>
      <div>
        <DTAHeader className="capitalize">Map</DTAHeader>
      </div>
      <div>
        <DTAHeader className="capitalize">Related People</DTAHeader>
        <DTAPeopleGrid>
          {institution.dtaPeople.map((person) => (
            <DTAPeopleGridItem key={person.documentId} person={person} />
          ))}
        </DTAPeopleGrid>
      </div>
      <div>
        <DTAHeader className="capitalize">Related Practices</DTAHeader>
        <DTAPracticesGrid>
          {institution.dta_practices.map((practice) => (
            <DTAPracticesGridItem
              key={practice.documentId}
              practice={practice}
            />
          ))}
        </DTAPracticesGrid>
      </div>
      <div>
        <DTAHeader className="capitalize">Related Collections</DTAHeader>
        <DTAObjectsGrid>
          {institution.dta_objects.map((object) => (
            <DTAObjectsGridItem key={object.documentId} object={object} />
          ))}
        </DTAObjectsGrid>
      </div>
    </div>
  );
};
