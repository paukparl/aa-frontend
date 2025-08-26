import { getDTAPeople } from "@/api";
import { getDTASnippet } from "@/api/getDTASnippet";
import ViewTransitionTipinPage from "@/components/ViewTransitionTipinPage";
import {
  DTAPeopleGrid,
  DTAPeopleGridItem,
} from "@/components/dta/components/DTAPeopleGrid";
// import { DTAFilterMultiSelectRow } from "@/components/dta/components/Filter/DTAFilterMultiSelectRow";
import { DTAContentSingleCol } from "@/components/dta/layouts/DTAContentSingleCol";
import { Pagination } from "@/components/globals/components/Pagination";
// import { cn } from "@/lib/cn";
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
    snippets,
  ] = await Promise.all([
    getDTAPeople({
      pagination: { page, pageSize: 30 },
    }),
    getDTASnippet(),
  ]);

  return (
    <ViewTransitionTipinPage
      type="1"
      bg="var(--color-dta-tipin-1-background)"
      fg="var(--color-dta-green)"
      title="People"
      ancestors={[{ title: "DTA Archive", path: routes.ground("dta") }]}
    >
      <div className="flex flex-col gap-(--padding) p-(--padding) text-dta-people-foreground">
        <h1 className="h1">People</h1>
        <DTAContentSingleCol>
          {snippets?.peopleLandingDescription ?? ``}
        </DTAContentSingleCol>
        {/* <DTAFilterMultiSelectRow
          clearFilters={clearFilters}
          activeFilters={activeFilters}
          toggleFilter={toggleFilter}
          colorTheme="people"
          filtersInfo={[
            { filters: mockAlphabetFilters, multiFilterType: "alphabet" },
            {
              filters: mockBirthPlaceFilters,
              multiFilterType: "birthPlace",
            },
            { filters: mockYearOfStudyFilters, multiFilterType: "yearOfStudy" },
          ]}
        /> */}
        <span className="mt-[10px] mono">{`All ${people.length} record${people.length > 1 ? `s` : ``}`}</span>
        <DTAPeopleGrid>
          {people.map((person) => (
            <DTAPeopleGridItem key={person.documentId} person={person} />
          ))}
        </DTAPeopleGrid>
        {/* update pagination component:
        pass in current page, total page, and setnewpage function */}
        {pagination.pageCount > 1 && (
          <Pagination pagination={pagination} searchParamKey="1_page" />
        )}
      </div>
    </ViewTransitionTipinPage>
  );
}
