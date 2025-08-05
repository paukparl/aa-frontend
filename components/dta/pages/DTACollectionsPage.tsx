import * as React from "react";
import { z } from "zod/v4";
import { getDTAObjects } from "@/api/getDTAObjects";
import { getDTASnippets } from "@/api/getDTASnippet";
import ViewTransitionTipinPage from "@/components/ViewTransitionTipinPage";
import {
  DTAObjectsGrid,
  DTAObjectsGridItem,
} from "@/components/dta/components/DTAObjectsGrid";
import { DTAContentSingleCol } from "@/components/dta/layouts/DTAContentSingleCol";
import { Pagination } from "@/components/globals/components/Pagination";
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

  const [
    {
      data: collections,
      meta: { pagination },
    },
    { data: snippets },
  ] = await Promise.all([
    getDTAObjects({
      pagination: { page, pageSize: 30 },
    }),
    getDTASnippets(),
  ]);
  return (
    <ViewTransitionTipinPage
      type="1"
      bg="var(--color-dta-tipin-1-background)"
      fg="var(--color-dta-collections-foreground)"
      title="Collections"
      ancestors={[{ title: "DTA Archive", path: routes.ground("dta") }]}
    >
      <div className="flex flex-col gap-(--padding) p-(--padding)">
        <h1>Collections</h1>
        <DTAContentSingleCol>
          {snippets?.collectionsLandingDescription ?? ``}
        </DTAContentSingleCol>
        <span className="mono mt-[10px]">{`All ${collections.length} record${collections.length > 1 ? `s` : ``}`}</span>
        <DTAObjectsGrid>
          {collections.map((object) => (
            <DTAObjectsGridItem key={object.documentId} object={object} />
          ))}
        </DTAObjectsGrid>
        {pagination.pageCount > 1 && (
          <Pagination pagination={pagination} searchParamKey="1_page" />
        )}
      </div>
    </ViewTransitionTipinPage>
  );
}
