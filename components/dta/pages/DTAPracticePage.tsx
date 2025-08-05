import { notFound } from "next/navigation";
import * as React from "react";
import { getDTAPractice } from "@/api/getDTAPractice";
import ViewTransitionTipinPage from "@/components/ViewTransitionTipinPage";
import { DTAPracticePageContent } from "@/components/dta/pages/DTAPracticePageContent";
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
      <DTAPracticePageContent practice={practice} />
    </ViewTransitionTipinPage>
  );
}
