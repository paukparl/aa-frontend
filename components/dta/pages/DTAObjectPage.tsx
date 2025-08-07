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
import { cn } from "@/lib/cn";
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
        { title: "DTA Archive", path: routes.ground("dta") },
        { title: "Collections", path: routes.tipin1("dta", "collections") },
      ]}
    >
      <div className="flex flex-col gap-[20px] p-24 700:gap-[30px]">
        <h1 className="tipin">{object.title}</h1>
        <span className="body">{object.additionalDescription}</span>
        <MediaGallery
          imgs={object.image}
          className={cn("text-dta-collections-foreground")}
        />
        <div>
          <DTAHeader className="capitalize">Related People</DTAHeader>
          <DTAPeopleGrid>
            {object.dta_peopleNew.map((person) => (
              <DTAPeopleGridItem key={person.documentId} person={person} />
            ))}
          </DTAPeopleGrid>
        </div>
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
      </div>
    </ViewTransitionTipinPage>
  );
}
