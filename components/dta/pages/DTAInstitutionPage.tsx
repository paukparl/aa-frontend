import { notFound } from "next/navigation";
import { z } from "zod/v4";
import { getDTAInstitution } from "@/api/getDTAInstitution";
import ViewTransitionTipinPage from "@/components/ViewTransitionTipinPage";
import { DTAInstitutionPageContent } from "@/components/dta/pages/DTAInstitutionPageContent";
import { routes } from "@/lib/routes";
import { SearchParams } from "@/lib/types";
import { parseUrlSearchParams } from "@/lib/urlUtils";

export async function DTAInstitutionPage({
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

  const institution = await getDTAInstitution(slug);

  if (!institution) notFound();

  return (
    <ViewTransitionTipinPage
      type="2"
      bg="var(--color-dta-tipin-2-background)"
      fg="var(--color-dta-institutions-foreground)"
      title={institution.Name}
      ancestors={[
        { title: "DTA Archive", href: routes.ground("dta") },
        { title: "Institutions", href: routes.tipin1("dta", "institutions") },
      ]}
    >
      <DTAInstitutionPageContent institution={institution} />
    </ViewTransitionTipinPage>
  );
}
