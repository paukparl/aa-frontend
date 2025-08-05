import * as React from "react";
import { z } from "zod/v4";
import { getDTAInstitutions } from "@/api/getDTAInstitutions";
import { getDTASnippets } from "@/api/getDTASnippet";
import ViewTransitionTipinPage from "@/components/ViewTransitionTipinPage";
import { DTAInstitutionsPageContent } from "@/components/dta/pages/DTAInstitutionsPageContent";
import { routes } from "@/lib/routes";
import { SearchParams } from "@/lib/types";
import { parseUrlSearchParams } from "@/lib/urlUtils";

export async function DTAInstitutionsPage({
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
      data: institutions,
      meta: { pagination },
    },
    { data: snippets },
  ] = await Promise.all([
    getDTAInstitutions({
      pagination: { page, pageSize: 30 },
    }),
    getDTASnippets(),
  ]);

  return (
    <ViewTransitionTipinPage
      type="1"
      bg="var(--color-dta-tipin-1-background)"
      fg="var(--color-dta-institutions-foreground)"
      title="Institutions"
      ancestors={[{ title: "DTA Archive", path: routes.ground("dta") }]}
    >
      <DTAInstitutionsPageContent
        institutions={institutions}
        pagination={pagination}
        description={snippets?.institutionsLandingDescription}
      />
    </ViewTransitionTipinPage>
  );
}
