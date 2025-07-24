import { z } from "zod/v4";
import { getDtaPeople } from "@/api/getDtaPeople";
import MountTest from "@/components/MountTest";
import TempLink from "@/components/TempLink";
import ViewTransitionTipinPage from "@/components/ViewTransitionTipinPage";
import { cn } from "@/lib/cn";
import { routes } from "@/lib/routes";
import { SearchParams } from "@/lib/types";
import { composeUrl, parseUrlSearchParams } from "@/lib/urlUtils";

export async function DtaPeoplePage({
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
    meta: { pagination: _ },
  } = await getDtaPeople({
    pagination: {
      page,
      pageSize: 1, // 30,
    },
  });

  return (
    <ViewTransitionTipinPage
      type="1"
      tipinBg="#e9edec"
      title="People"
      ancestors={[{ title: "DTA Archive", href: routes.ground("dta") }]}
    >
      <div className={cn("flex flex-col items-start gap-4")}>
        <div>
          <h1>DTA People Page</h1>
        </div>
        <MountTest />
        {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
        {people.map((person) => (
          <TempLink
            key={person.id}
            href={routes.tipin2("dta", "people", person.documentId)}
            scroll={false}
          >
            {person.firstName} {person.lastName}
          </TempLink>
        ))}
        <TempLink
          href={composeUrl({
            path: routes.tipin1("dta", "people"),
            params: { "1_page": 1 },
          })}
          scroll={false}
        >
          Page 1
        </TempLink>
        <TempLink
          href={composeUrl({
            path: routes.tipin1("dta", "people"),
            params: { "1_page": 2 },
          })}
          scroll={false}
        >
          Page 2
        </TempLink>
      </div>
    </ViewTransitionTipinPage>
  );
}
