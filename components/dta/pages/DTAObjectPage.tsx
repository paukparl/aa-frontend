import { notFound } from "next/navigation";
import * as React from "react";
import { getDTAObject } from "@/api/getDTAObject";
import ViewTransitionTipinPage from "@/components/ViewTransitionTipinPage";
import { DTAObjectPageContent } from "@/components/dta/pages/DTAObjectPageContent";
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
      <DTAObjectPageContent object={object} />
    </ViewTransitionTipinPage>
  );
}
