import * as React from "react";
import { z } from "zod/v4";
import { getDTAPractices } from "@/api/getDTAPractices";
import { getDTASnippets } from "@/api/getDTASnippet";
import ViewTransitionTipinPage from "@/components/ViewTransitionTipinPage";
import { DTAPracticesPageContent } from "@/components/dta/pages/DTAPracticesPageContent";
import { routes } from "@/lib/routes";
import { SearchParams } from "@/lib/types";
import { parseUrlSearchParams } from "@/lib/urlUtils";

export async function DTAPracticesPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const urlSearchParams = parseUrlSearchParams(await searchParams);
  const page =
    z.coerce.number().int().min(1).safeParse(urlSearchParams.get("1_page"))
      .data ?? 1;

  const [
    {
      data: practices,
      meta: { pagination },
    },
    { data: snippets },
  ] = await Promise.all([
    getDTAPractices({
      pagination: { page, pageSize: 30 },
    }),
    getDTASnippets(),
  ]);

  return (
    <ViewTransitionTipinPage
      type="1"
      bg="var(--color-dta-tipin-1-background)"
      fg="var(--color-dta-practices-foreground)"
      title="Practices"
      ancestors={[{ title: "DTA Archive", href: routes.ground("dta") }]}
    >
      <DTAPracticesPageContent
        practices={practices}
        pagination={pagination}
        description={snippets?.practicesLandingDescription}
      />
    </ViewTransitionTipinPage>
  );
}
