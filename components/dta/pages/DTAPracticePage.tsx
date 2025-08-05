import { notFound } from "next/navigation";
import * as React from "react";
import { getDTAPractice } from "@/api/getDTAPractice";
import ViewTransitionTipinPage from "@/components/ViewTransitionTipinPage";
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
import { routes } from "@/lib/routes";

export async function DTAPracticePage({ slug }: { slug: string }) {
  const practice = await getDTAPractice(slug);

  if (!practice) notFound();

  return (
    <ViewTransitionTipinPage
      type="2"
      bg="var(--color-dta-tipin-2-background)"
      fg="var(--color-dta-practices-foreground)"
      title={practice.name}
      ancestors={[
        { title: "DTA Archive", path: routes.ground("dta") },
        { title: "Practices", path: routes.tipin1("dta", "practices") },
      ]}
    >
      <div className="flex flex-col gap-(--padding) p-(--padding)">
        <h1 className="tipin">{practice.name}</h1>
        {practice.description && (
          <span className="body">{practice.description}</span>
        )}
        <div>
          <DTAHeader className="capitalize">Map</DTAHeader>
          <Map
            className="aspect-2/1 w-full"
            gridStroke="var(--color-dta-map-background)"
            landFill="var(--color-dta-map-highlight)"
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
    </ViewTransitionTipinPage>
  );
}
