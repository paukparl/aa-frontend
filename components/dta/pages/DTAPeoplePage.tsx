import { getDTAPeople } from "@/api";
import { getDTASnippets } from "@/api/getDTASnippet";
import ViewTransitionTipinPage from "@/components/ViewTransitionTipinPage";
import { DTAPeoplePageContent } from "@/components/dta/pages/DTAPeoplePageContent";
import { routes } from "@/lib/routes";
import { SearchParams } from "@/lib/types";
import { parsePageParam, parseUrlSearchParams } from "@/lib/urlUtils";

export async function DTAPeoplePage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const urlSearchParams = parseUrlSearchParams(await searchParams);
  const page = parsePageParam({ urlSearchParams, searchParamKey: "1_page" });

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
      ancestors={[{ title: "DTA Archive", path: routes.ground("dta") }]}
    >
      <DTAPeoplePageContent
        people={people}
        pagination={pagination}
        description={snippets?.peopleLandingDescription}
      />
    </ViewTransitionTipinPage>
  );
}
