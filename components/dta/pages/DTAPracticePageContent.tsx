import * as React from "react";
import { DTAHeader } from "@/components/dta/components/DTAHeader";
import {
  DTAInstitutionsGrid,
  DTAInstitutionsGridItem,
} from "@/components/dta/components/DTAInstitutionsGrid";
import {
  DTAObjectsGrid,
  DTAObjectsGridItem,
} from "@/components/dta/components/DTAObjectsGrid";
import {
  DTAPeopleGrid,
  DTAPeopleGridItem,
} from "@/components/dta/components/DTAPeopleGrid";
import { Map } from "@/components/dta/components/Map";
import { cn } from "@/lib/cn";
import { Schema } from "@/lib/schemas";

type DTAPracticeProps = {
  practice: Schema<"dtaPracticeDetail">;
};

export const DTAPracticePageContent = ({ practice }: DTAPracticeProps) => {
  return (
    <div className="flex flex-col gap-20 p-24 700:gap-30">
      <h1 className="tipin">{practice.name}</h1>
      {practice.description && (
        <span className="body">{practice.description}</span>
      )}
      <div>
        <DTAHeader className="capitalize">Map</DTAHeader>
        <Map
          className={cn("aspect-2/1 w-full")}
          gridStroke="var(--color-dta-practices-foreground)"
          landFill="var(--color-dta-map-land)"
        />
      </div>
      <div>
        <DTAHeader className="capitalize">Related People</DTAHeader>
        <DTAPeopleGrid>
          {practice.dta_peopleNew.map((person) => (
            <DTAPeopleGridItem key={person.documentId} person={person} />
          ))}
        </DTAPeopleGrid>
      </div>
      <div>
        <DTAHeader className="capitalize">Related Institutions</DTAHeader>
        <DTAInstitutionsGrid>
          {practice.dta_institutionsNew.map((institution) => (
            <DTAInstitutionsGridItem
              key={institution.documentId}
              institution={institution}
            />
          ))}
        </DTAInstitutionsGrid>
      </div>
      <div>
        <DTAHeader className="capitalize">Related Collections</DTAHeader>
        <DTAObjectsGrid>
          {practice.dta_objects.map((object) => (
            <DTAObjectsGridItem key={object.documentId} object={object} />
          ))}
        </DTAObjectsGrid>
      </div>
    </div>
  );
};
