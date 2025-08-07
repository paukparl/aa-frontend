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
import { Map, MapCoords } from "@/components/dta/components/Map";
import { cn } from "@/lib/cn";
import { routes } from "@/lib/routes";

export async function DTAPersonPage({ slug }: { slug: string }) {
  const person = await getDTAPerson(slug);

  if (!person) notFound();

  const location = person?.dta_location;

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
      <div className={cn("flex flex-col gap-20 p-24 700:gap-72")}>
        <h1 className="tipin">
          {person.firstName} {person.lastName}
          <br />
          {person.displayStudyYear}
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
        <div className="grid grid-cols-1 gap-[30px] 1024:grid-cols-2">
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

        {location && location.longitude && location.latitude && (
          <div>
            <DTAHeader className="capitalize">Map</DTAHeader>
            <Map
              gridStroke="var(--color-dta-people-foreground)"
              pathFill="var(--color-dta-map-land)"
            >
              <MapCoords long={location.longitude} lat={location.latitude}>
                <div
                  className={cn(
                    "size-20 rounded-full bg-dta-people-foreground",
                  )}
                />
              </MapCoords>
            </Map>
          </div>
        )}
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
