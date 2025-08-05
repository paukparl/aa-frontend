import Image from "next/image";
import { notFound } from "next/navigation";
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
import { routes } from "@/lib/routes";

export async function DTAPersonPage({ slug }: { slug: string }) {
  const person = await getDTAPerson(slug);

  if (!person) notFound();

  return (
    <ViewTransitionTipinPage
      type="2"
      bg="var(--color-dta-tipin-2-background)"
      fg="var(--color-dta-green)"
      title={`${person.firstName} ${person.lastName}`}
      ancestors={[
        { title: "DTA Archive", path: routes.ground("dta") },
        { title: "People", path: routes.tipin1("dta", "people") },
      ]}
    >
      <div className="700:gap-72 flex flex-col gap-20 p-(--padding)">
        <h1 className="tipin">
          {person.firstName} {person.lastName}
          <br />
          {person.displayStudyYear}
        </h1>
        <div className="700:grid-cols-2 grid gap-(--padding)">
          {person.headshot && (
            <div className="relative aspect-4/5">
              <Image
                fill
                sizes="50vw"
                src={person.headshot.url}
                alt={person.headshot.alternativeText ?? ""}
                className="object-cover"
              />
            </div>
          )}
          <div className="body">{person.bio}</div>
        </div>
        <div className="1024:grid-cols-2 grid grid-cols-1 gap-(--padding)">
          <div>
            <DTAHeader>Education</DTAHeader>
            <DTAPeopleTable
              content={person.Eduction.map((row) => ({
                info: `${row.courseName ? `${row.courseName}, ` : ""}${row.institution ? `${row.institution}, ` : ""}${row.country ?? ""}`,
                year: row.dateRange ?? "",
              }))}
            />
          </div>
          <div>
            <DTAHeader>Career</DTAHeader>
            <DTAPeopleTable
              content={person.Career.map((row) => ({
                info: `${row.jobRole ? `${row.jobRole}, ` : ""}${row.institution ? `${row.institution}, ` : ""}${row.country ?? ""}`,
                year: row.dateRange ?? "",
              }))}
            />
          </div>
        </div>
        <div>
          <DTAHeader>Map</DTAHeader>
          <Map
            className="aspect-2/1 w-full"
            gridStroke="var(--color-dta-people-foreground)"
            landFill="var(--color-dta-map-land)"
          />
        </div>
        <div>
          <DTAHeader>Related Practices</DTAHeader>
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
          <DTAHeader>Related Institutions</DTAHeader>
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
          <DTAHeader>Related Collections</DTAHeader>
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
