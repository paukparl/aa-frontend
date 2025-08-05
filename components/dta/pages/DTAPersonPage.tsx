import Image from "next/image";
import { notFound } from "next/navigation";
import * as React from "react";
import { z } from "zod/v4";
import { getDTAPerson } from "@/api";
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
import { DTAPeopleTable } from "@/components/dta/components/DTAPeopleTable";
import {
  DTAPracticesGrid,
  DTAPracticesGridItem,
} from "@/components/dta/components/DTAPracticesGrid";
import { Map } from "@/components/dta/components/Map";
import { cn } from "@/lib/cn";
import { routes } from "@/lib/routes";
import { SearchParams } from "@/lib/types";
import { parseUrlSearchParams } from "@/lib/urlUtils";

export async function DTAPersonPage({
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

  const person = await getDTAPerson(slug);

  if (!person) notFound();

  return (
    <ViewTransitionTipinPage
      type="2"
      bg="var(--color-dta-tipin-2-background)"
      fg="var(--color-dta-green)"
      title={`${person.firstName} ${person.lastName}`}
      ancestors={[
        { title: "DTA Archive", href: routes.ground("dta") },
        { title: "People", href: routes.tipin1("dta", "people") },
      ]}
    >
      <div className={cn("700:gap-72 flex flex-col gap-20 p-24")}>
        <h1 className="tipin">
          Handel Kitchiner (Hal) Lawson
          <br />
          1928-1985
        </h1>
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
        <div className="1024:grid-cols-2 grid grid-cols-1 gap-[30px]">
          <div>
            <DTAHeader className="capitalize">Education</DTAHeader>
            <DTAPeopleTable
              content={person.Eduction.map((row) => ({
                info: `${row.courseName ? `${row.courseName}, ` : ""}${row.institution ? `${row.institution}, ` : ""}${row.country ?? ""}`,
                year: row.dateRange ?? "",
              }))}
            />
          </div>
          <div>
            <DTAHeader className="capitalize">Career</DTAHeader>
            <DTAPeopleTable
              content={person.Career.map((row) => ({
                info: `${row.jobRole ? `${row.jobRole}, ` : ""}${row.institution ? `${row.institution}, ` : ""}${row.country ?? ""}`,
                year: row.dateRange ?? "",
              }))}
            />
          </div>
        </div>
        <div>
          <DTAHeader className="capitalize">Map</DTAHeader>
          <Map
            className={cn("aspect-2/1 w-full")}
            gridStroke="var(--color-dta-map-background)"
            landFill="var(--color-dta-map-highlight)"
          />
        </div>
        <div>
          <DTAHeader className="capitalize">Related Practices</DTAHeader>
          <DTAPracticesGrid>
            {person.dta_practicesNew.map((practice) => (
              <DTAPracticesGridItem
                key={practice.documentId}
                practice={practice}
              />
            ))}
          </DTAPracticesGrid>
        </div>
        <div>
          <DTAHeader className="capitalize">Related Institutions</DTAHeader>
          <DTAInstitutionsGrid>
            {person.dtaInstitutionsNew.map((institution) => (
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
            {person.dta_objects.map((object) => (
              <DTAObjectsGridItem key={object.documentId} object={object} />
            ))}
          </DTAObjectsGrid>
        </div>
      </div>
    </ViewTransitionTipinPage>
  );
}
