import { z } from "zod/v4";
import { getDTAPeople } from "@/api";
import { getDTASnippets } from "@/api/getDTASnippet";
import ViewTransitionTipinPage from "@/components/ViewTransitionTipinPage";
import { DTAPeoplePageContent } from "@/components/dta/pages/DTAPeoplePageContent";
import { routes } from "@/lib/routes";
import { SearchParams } from "@/lib/types";
import { parseUrlSearchParams } from "@/lib/urlUtils";

export async function DTAPeoplePage({
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
      data: people,
      meta: { pagination },
    },
    { data: snippets },
  ] = await Promise.all([
    getDTAPeople({
      pagination: { page, pageSize: 30 },
    }),
    getDTASnippets(),
  ]);

  return (
    <ViewTransitionTipinPage
      type="1"
      bg="var(--color-dta-tipin-1-background)"
      fg="var(--color-dta-green)"
      title="People"
      ancestors={[{ title: "DTA Archive", href: routes.ground("dta") }]}
    >
      <DTAPeoplePageContent
        people={people}
        pagination={pagination}
        description={snippets?.peopleLandingDescription}
      />
    </ViewTransitionTipinPage>
  );
}
