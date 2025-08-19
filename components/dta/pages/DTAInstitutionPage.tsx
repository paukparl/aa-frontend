import Image from "next/image";
import { notFound } from "next/navigation";
import { getDTAInstitution } from "@/api/getDTAInstitution";
import ViewTransitionTipinPage from "@/components/ViewTransitionTipinPage";
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
import { Map, MapCoords } from "@/components/dta/components/Map";
import { cn } from "@/lib/cn";
import { parseHtml } from "@/lib/parseHtml";
import { routes } from "@/lib/routes";

export async function DTAInstitutionPage({ slug }: { slug: string }) {
  const institution = await getDTAInstitution(slug);

  if (!institution) notFound();

  return (
    <ViewTransitionTipinPage
      type="2"
      bg="var(--color-dta-tipin-2-background)"
      fg="var(--color-dta-institutions-foreground)"
      title={institution.Name}
      ancestors={[
        { title: "DTA Archive", path: routes.ground("dta") },
        { title: "Institutions", path: routes.tipin1("dta", "institutions") },
      ]}
    >
      <div className="flex flex-col gap-(--padding) p-(--padding)">
        <h1 className="tipin">{institution.Name}</h1>
        <div className="grid grid-cols-2 gap-24">
          <div className="relative">
            {institution.Display && (
              <div
                className="relative"
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
          <div className="body">
            {institution.descriptionRichText &&
              parseHtml(institution.descriptionRichText)}
          </div>
        </div>
        {institution.dta_locationsNew.length > 0 && (
          <div>
            <DTAHeader className="capitalize">Map</DTAHeader>
            <Map
              gridStroke="var(--color-dta-institutions-foreground)"
              pathFill="var(--color-dta-map-land)"
            >
              {institution.dta_locationsNew.map(
                (location) =>
                  location.longitude &&
                  location.latitude && (
                    <MapCoords
                      key={location.documentId}
                      long={location.longitude ?? 0}
                      lat={location.latitude ?? 0}
                    >
                      <div
                        className={cn(
                          "size-20 rounded-full bg-dta-institutions-foreground",
                        )}
                      />
                    </MapCoords>
                  ),
              )}
            </Map>
          </div>
        )}
        {institution.dtaPeople.length > 0 && (
          <div>
            <DTAHeader className="capitalize">Related People</DTAHeader>
            <DTAPeopleGrid>
              {institution.dtaPeople.map((person) => (
                <DTAPeopleGridItem key={person.documentId} person={person} />
              ))}
            </DTAPeopleGrid>
          </div>
        )}
        {institution.dta_practices.length > 0 && (
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
        )}
        {institution.dta_objects.length > 0 && (
          <div>
            <DTAHeader className="capitalize">Related Collections</DTAHeader>
            <DTAObjectsGrid>
              {institution.dta_objects.map((object) => (
                <DTAObjectsGridItem key={object.documentId} object={object} />
              ))}
            </DTAObjectsGrid>
          </div>
        )}
      </div>
    </ViewTransitionTipinPage>
  );
}
