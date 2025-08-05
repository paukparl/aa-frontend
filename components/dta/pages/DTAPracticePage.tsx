import { notFound } from "next/navigation";
import * as React from "react";
import { z } from "zod/v4";
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
  DTAPersonGridItem,
} from "@/components/dta/components/DTAPeopleGrid";
import { Map } from "@/components/dta/components/Map";
import { cn } from "@/lib/cn";
import { routes } from "@/lib/routes";
import { SearchParams } from "@/lib/types";
import { parseUrlSearchParams } from "@/lib/urlUtils";

export async function DTAPracticePage({
  searchParams,
  slug,
}: {
  searchParams: SearchParams;
  slug: string;
}) {
  const urlSearchParams = parseUrlSearchParams(await searchParams);
  const _page =
    z.coerce.number().int().min(1).safeParse(urlSearchParams.get("1_page"))
      .data ?? 1;

  const practice = await getDTAPractice(slug);

  if (!practice) notFound();

  return (
    <ViewTransitionTipinPage
      type="2"
      bg="var(--color-dta-tipin-2-background)"
      fg="var(--color-dta-practices-foreground)"
      title={practice.name}
      ancestors={[
        { title: "DTA Archive", href: routes.ground("dta") },
        { title: "Practices", href: routes.tipin1("dta", "practices") },
      ]}
    >
      <div className="700:gap-30 flex flex-col gap-20 p-24">
        <h1 className="tipin">{practice.name}</h1>
        {practice.description && (
          <span className="body">{practice.description}</span>
        )}
        <div>
          <DTAHeader className="capitalize">Map</DTAHeader>
          <Map
            className={cn("aspect-2/1 w-full")}
            gridStroke="var(--color-dta-map-background)"
            landFill="var(--color-dta-map-highlight)"
          />
        </div>
        <div>
          <DTAHeader className="capitalize">Related People</DTAHeader>
          <DTAPeopleGrid>
            {practice.dta_peopleNew.map((person) => (
              <DTAPersonGridItem key={person.documentId} person={person} />
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
