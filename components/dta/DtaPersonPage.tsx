import { notFound } from "next/navigation";
import { z } from "zod/v4";
import { getDtaPerson } from "@/api/getDtaPerson";
import MountTest from "@/components/MountTest";
import ViewTransitionTipinPage from "@/components/ViewTransitionTipinPage";
import { cn } from "@/lib/cn";
import { routes } from "@/lib/routes";
import { SearchParams } from "@/lib/types";
import { parseUrlSearchParams } from "@/lib/urlUtils";

export async function DtaPersonPage({
  searchParams,
  slug,
}: {
  searchParams: SearchParams;
  slug: string;
}) {
  const urlSearchParams = parseUrlSearchParams(await searchParams);
  const page =
    z.coerce.number().int().min(1).safeParse(urlSearchParams.get("1_page"))
      .data ?? 1;

  const person = await getDtaPerson(slug);

  if (!person) notFound();

  return (
    <ViewTransitionTipinPage
      type="2"
      tipinBg="#fff"
      title={`${person.firstName} ${person.lastName}`}
      ancestors={[
        { title: "DTA Archive", href: routes.ground("dta") },
        { title: "People", href: routes.tipin1("dta", "people") },
      ]}
    >
      <div className={cn("")}>
        <div>
          <h1>DTA People Page</h1>
        </div>
        <MountTest />
        <pre>{JSON.stringify(person, null, 2)}</pre>
      </div>
    </ViewTransitionTipinPage>
  );
}
