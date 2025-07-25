import { notFound } from "next/navigation";
import * as React from "react";
import { z } from "zod/v4";
import { getDTAPractice } from "@/api/getDTAPractice";
import ViewTransitionTipinPage from "@/components/ViewTransitionTipinPage";
import { DTAPracticePageContent } from "@/components/dta/pages/DTAPracticePageContent";
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
      <DTAPracticePageContent practice={practice} />
    </ViewTransitionTipinPage>
  );
}
