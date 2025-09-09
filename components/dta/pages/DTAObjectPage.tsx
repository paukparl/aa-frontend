import { notFound } from "next/navigation";
import * as React from "react";
import { getDTAObject } from "@/api/getDTAObject";
import ViewTransitionTipinPage from "@/components/ViewTransitionTipinPage";
import { DTAHeader } from "@/components/dta/components/DTAHeader";
import {
  DTAInstitutionsGrid,
  DTAInstitutionsGridItem,
} from "@/components/dta/components/DTAInstitutionsGrid";
import {
  DTAPeopleGrid,
  DTAPeopleGridItem,
} from "@/components/dta/components/DTAPeopleGrid";
import {
  DTAPracticesGrid,
  DTAPracticesGridItem,
} from "@/components/dta/components/DTAPracticesGrid";
import { MediaGallery } from "@/components/globals/components/MediaGalleryNew";
import { parseHtml } from "@/lib/parseHtml";
import { routes } from "@/lib/routes";

export async function DTAObjectPage({ slug }: { slug: string }) {
  const object = await getDTAObject(slug);

  if (!object) notFound();

  return (
    <ViewTransitionTipinPage
      type="2"
      bg="var(--color-dta-tipin-2-background)"
      fg="var(--color-dta-collections-foreground)"
      title={object.title}
      ancestors={[
        { title: "DTA Archive", path: routes.dta },
        { title: "Collections", path: routes.dtaCollections },
      ]}
    >
      <div className="flex flex-col gap-(--padding) p-(--padding)">
        <h1 className="h1-mono">{object.title}</h1>
        <span className="body">
          {object.additionalDescriptionRichText &&
            parseHtml(object.additionalDescriptionRichText)}
        </span>
        <MediaGallery
          imgs={object.image ?? []}
          className="text-dta-collections-foreground"
        />
        {object.dta_peopleNew.length > 0 && (
          <div>
            <DTAHeader className="capitalize">Related People</DTAHeader>
            <DTAPeopleGrid>
              {object.dta_peopleNew.map((person) => (
                <DTAPeopleGridItem key={person.documentId} person={person} />
              ))}
            </DTAPeopleGrid>
          </div>
        )}
        {object.dta_practicesNew.length > 0 && (
          <div>
            <DTAHeader className="capitalize">Related Practices</DTAHeader>
            <DTAPracticesGrid>
              {object.dta_practicesNew.map((practice) => (
                <DTAPracticesGridItem
                  key={practice.documentId}
                  practice={practice}
                />
              ))}
            </DTAPracticesGrid>
          </div>
        )}
        {object.dta_institutionsNew.length > 0 && (
          <div>
            <DTAHeader className="capitalize">Related Institutions</DTAHeader>
            <DTAInstitutionsGrid>
              {object.dta_institutionsNew.map((institution) => (
                <DTAInstitutionsGridItem
                  key={institution.documentId}
                  institution={institution}
                />
              ))}
            </DTAInstitutionsGrid>
          </div>
        )}
      </div>
    </ViewTransitionTipinPage>
  );
}
