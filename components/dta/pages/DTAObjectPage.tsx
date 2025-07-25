import { notFound } from "next/navigation";
import * as React from "react";
import { z } from "zod/v4";
import { getDTAObject } from "@/api/getDTAObject";
import ViewTransitionTipinPage from "@/components/ViewTransitionTipinPage";
import { DTAObjectPageContent } from "@/components/dta/pages/DTAObjectPageContent";
import { routes } from "@/lib/routes";
import { SearchParams } from "@/lib/types";
import { parseUrlSearchParams } from "@/lib/urlUtils";

export async function DTAObjectPage({
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

  const object = await getDTAObject(slug);

  if (!object) notFound();

  return (
    <ViewTransitionTipinPage
      type="2"
      bg="var(--color-dta-tipin-2-background)"
      fg="var(--color-dta-collections-foreground)"
      title="Object"
      ancestors={[
        { title: "DTA Archive", href: routes.ground("dta") },
        { title: "Collections", href: routes.tipin1("dta", "collections") },
      ]}
    >
      <DTAObjectPageContent object={object} />
    </ViewTransitionTipinPage>
  );
}
