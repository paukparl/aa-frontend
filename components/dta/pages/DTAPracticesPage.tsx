import * as React from "react";
import { z } from "zod/v4";
import { getDTAPractices } from "@/api/getDTAPractices";
import { getDTASnippets } from "@/api/getDTASnippet";
import ViewTransitionTipinPage from "@/components/ViewTransitionTipinPage";
import {
  DTAPracticesTable,
  DTAPracticesTableRow,
} from "@/components/dta/components/DTAPracticesTable";
import { DTAContentSingleCol } from "@/components/dta/layouts/DTAContentSingleCol";
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
    snippets,
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
      ancestors={[{ title: "DTA Archive", path: routes.ground("dta") }]}
    >
      <div className="flex flex-col gap-(--padding) p-(--padding)">
        <h1>Practices</h1>
        <DTAContentSingleCol>
          {snippets?.practicesLandingDescription ?? ``}
        </DTAContentSingleCol>
        <span className="mono mt-[10px]">All {pagination.total} records</span>
        <DTAPracticesTable>
          {practices.map((practice) => (
            <DTAPracticesTableRow
              key={practice.documentId}
              practice={practice}
            />
          ))}
        </DTAPracticesTable>
      </div>
    </ViewTransitionTipinPage>
  );
}
