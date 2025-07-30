import { z } from "zod/v4";
import { getDTAPeople } from "@/api";
import ViewTransitionTipinPage from "@/components/ViewTransitionTipinPage";
import {
  DTAPeopleGrid,
  DTAPersonGridItem,
} from "@/components/dta/components/DTAPeopleGrid";
import { DTAContentSingleCol } from "@/components/dta/layouts/DTAContentSingleCol";
import { cn } from "@/lib/cn";
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

  const {
    data: people,
    meta: { pagination },
  } = await getDTAPeople({
    pagination: {
      page,
      pageSize: 30,
    },
  });
  console.log(people);

  return (
    <ViewTransitionTipinPage
      type="1"
      bg="var(--color-dta-tipin-1-background)"
      fg="var(--color-dta-green)"
      title="People"
      ancestors={[{ title: "DTA Archive", href: routes.ground("dta") }]}
    >
      <div
        className={cn(
          "text-dta-people-foreground 700:gap-[30px] flex flex-col gap-[20px] p-24",
        )}
      >
        <h1>People</h1>
        <DTAContentSingleCol>
          Brief sentence describing what people means in the context of DTA.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </DTAContentSingleCol>
        <span className="mono mt-[10px]">{`All ${people.length} record${people.length > 1 ? `s` : ``}`}</span>
        <DTAPeopleGrid>
          {people.map((person) => (
            <DTAPersonGridItem key={person.documentId} person={person} />
          ))}
        </DTAPeopleGrid>
      </div>
    </ViewTransitionTipinPage>
  );
}
