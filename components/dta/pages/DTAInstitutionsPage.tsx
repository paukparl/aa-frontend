import * as React from "react";
import { z } from "zod/v4";
import { getDTAInstitutions } from "@/api/getDTAInstitutions";
import { getDTASnippets } from "@/api/getDTASnippet";
import ViewTransitionTipinPage from "@/components/ViewTransitionTipinPage";
import {
  DTAInstitutionsGrid,
  DTAInstitutionsGridItem,
} from "@/components/dta/components/DTAInstitutionsGrid";
import { DTAContentSingleCol } from "@/components/dta/layouts/DTAContentSingleCol";
import { FooterPagination } from "@/components/globals/components/FooterPagination";
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
      ancestors={[{ title: "DTA Archive", href: routes.ground("dta") }]}
    >
      <div className="700:gap-30 flex flex-col gap-20 p-24">
        <h1>Institutions</h1>
        <DTAContentSingleCol>
          {snippets?.institutionsLandingDescription ?? ``}
        </DTAContentSingleCol>
        <span className="mono mt-[10px]">{`All ${institutions.length} record${institutions.length > 1 ? `s` : ``}`}</span>
        <DTAInstitutionsGrid>
          {institutions.map((institution) => (
            <DTAInstitutionsGridItem
              key={institution.documentId}
              institution={institution}
            />
          ))}
        </DTAInstitutionsGrid>
        {pagination.pageCount > 1 && (
          <FooterPagination
            totalPages={pagination.pageCount}
            className="text-dta-institutions-foreground"
          />
        )}
      </div>
    </ViewTransitionTipinPage>
  );
}
