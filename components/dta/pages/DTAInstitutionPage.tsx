import { notFound } from "next/navigation";
import { getDTAInstitution } from "@/api/getDTAInstitution";
import ViewTransitionTipinPage from "@/components/ViewTransitionTipinPage";
import { DTAInstitutionPageContent } from "@/components/dta/pages/DTAInstitutionPageContent";
import { routes } from "@/lib/routes";

export async function DTAInstitutionPage({ slug }: { slug: string }) {
  const institution = await getDTAInstitution(slug);

  if (!institution) notFound();

  return (
    <ViewTransitionTipinPage
      type="2"
      bg="var(--color-dta-tipin-2-background)"
      fg="var(--color-dta-institutions-foreground)"
      title={institution.Name}
      ancestors={[
        { title: "DTA Archive", path: routes.ground("dta") },
        { title: "Institutions", path: routes.tipin1("dta", "institutions") },
      ]}
    >
      <DTAInstitutionPageContent institution={institution} />
    </ViewTransitionTipinPage>
  );
}
