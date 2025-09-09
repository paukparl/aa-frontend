import * as React from "react";
import { z } from "zod/v4";
import { getDTAInstitutions } from "@/api/getDTAInstitutions";
import { getDTASnippet } from "@/api/getDTASnippet";
import ViewTransitionTipinPage from "@/components/ViewTransitionTipinPage";
import {
  DTAInstitutionsGrid,
  DTAInstitutionsGridItem,
} from "@/components/dta/components/DTAInstitutionsGrid";
import { DTAContentSingleCol } from "@/components/dta/layouts/DTAContentSingleCol";
import { Pagination } from "@/components/globals/components/Pagination";
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
    snippets,
  ] = await Promise.all([
    getDTAInstitutions({
      pagination: { page, pageSize: 30 },
    }),
    getDTASnippet(),
  ]);

  return (
    <ViewTransitionTipinPage
      type="1"
      bg="var(--color-dta-tipin-1-background)"
      fg="var(--color-dta-institutions-foreground)"
      title="Institutions"
      ancestors={[{ title: "DTA Archive", path: routes.dta }]}
    >
      <div className="flex flex-col gap-(--padding) p-(--padding)">
        <h1 className="h1">Institutions</h1>
        <DTAContentSingleCol>
          {snippets?.institutionsLandingDescription ?? ``}
        </DTAContentSingleCol>
        <span className="mt-[10px] mono">{`All ${institutions.length} record${institutions.length > 1 ? `s` : ``}`}</span>
        <DTAInstitutionsGrid>
          {institutions.map((institution) => (
            <DTAInstitutionsGridItem
              key={institution.documentId}
              institution={institution}
            />
          ))}
        </DTAInstitutionsGrid>
        {pagination.pageCount > 1 && (
          <Pagination pagination={pagination} searchParamKey="1_page" />
        )}
      </div>
    </ViewTransitionTipinPage>
  );
}
