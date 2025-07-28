import * as React from "react";
import { Body } from "@/components/Typography/Body";
import { H1 } from "@/components/Typography/H1";
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
import { Schema } from "@/lib/schemas";

type DTAPracticeProps = {
  practice: Schema<"dtaPracticeDetail">;
};

export const DTAPracticePageContent = ({ practice }: DTAPracticeProps) => {
  return (
    <div className="flex flex-col gap-20 p-24 sm:gap-30">
      <H1 tipIn>{practice.name}</H1>
      {practice.description && <Body>{practice.description}</Body>}
      <div>
        <DTAHeader className="capitalize">Map</DTAHeader>
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
