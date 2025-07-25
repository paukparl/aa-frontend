import { notFound } from "next/navigation";
import { z } from "zod/v4";
import { getDTAPerson } from "@/api";
import ViewTransitionTipinPage from "@/components/ViewTransitionTipinPage";
import { DTAPersonPageContent } from "@/components/dta/pages/DTAPersonPageContent";
import { routes } from "@/lib/routes";
import { SearchParams } from "@/lib/types";
import { parseUrlSearchParams } from "@/lib/urlUtils";

export async function DTAPersonPage({
  searchParams,
  slug,
}: {
  searchParams: SearchParams;
  slug: string;
}) {
  const urlSearchParams = parseUrlSearchParams(await searchParams);
  const _page =
    z.coerce.number().int().min(1).safeParse(urlSearchParams.get("1_page"))
      .data ?? 1;

  const person = await getDTAPerson(slug);

  if (!person) notFound();

  return (
    <ViewTransitionTipinPage
      type="2"
      bg="var(--color-dta-tipin-2-background)"
      fg="var(--color-dta-green)"
      title={`${person.firstName} ${person.lastName}`}
      ancestors={[
        { title: "DTA Archive", href: routes.ground("dta") },
        { title: "People", href: routes.tipin1("dta", "people") },
      ]}
    >
      <DTAPersonPageContent person={person} />
    </ViewTransitionTipinPage>
  );
}
