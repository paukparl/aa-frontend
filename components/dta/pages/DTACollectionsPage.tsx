import * as React from "react";
import { z } from "zod/v4";
import { getDTAObjects } from "@/api/getDTAObjects";
import ViewTransitionTipinPage from "@/components/ViewTransitionTipinPage";
import { DTACollectionsPageContent } from "@/components/dta/pages/DTACollectionsPageContent";
import { routes } from "@/lib/routes";
import { SearchParams } from "@/lib/types";
import { parseUrlSearchParams } from "@/lib/urlUtils";

export async function DTACollectionsPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const urlSearchParams = parseUrlSearchParams(await searchParams);
  const page =
    z.coerce.number().int().min(1).safeParse(urlSearchParams.get("1_page"))
      .data ?? 1;

  const {
    data: objects,
    meta: { pagination },
  } = await getDTAObjects({
    pagination: {
      page,
      pageSize: 30,
    },
  });

  return (
    <ViewTransitionTipinPage
      type="1"
      bg="var(--color-dta-tipin-1-background)"
      fg="var(--color-dta-collections-foreground)"
      title="People"
      ancestors={[{ title: "DTA Archive", href: routes.ground("dta") }]}
    >
      <DTACollectionsPageContent objects={objects} pagination={pagination} />
    </ViewTransitionTipinPage>
  );
}
