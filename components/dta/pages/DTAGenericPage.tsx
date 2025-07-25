import { notFound } from "next/navigation";
import { getDTAPage } from "@/api/getDTAPage";
import ViewTransitionTipinPage from "@/components/ViewTransitionTipinPage";
import { DTAGenericPageContent } from "@/components/dta/pages/DTAGenericPageContent";
import { routes } from "@/lib/routes";

export async function DTAGenericPage({ slug }: { slug: string }) {
  const page = await getDTAPage(slug);

  if (!page) notFound();

  return (
    <ViewTransitionTipinPage
      type="1"
      bg="var(--color-dta-tipin-1-background)"
      fg="var(--color-dta-green)"
      title="People"
      ancestors={[{ title: "DTA Archive", href: routes.ground("dta") }]}
    >
      <DTAGenericPageContent page={page} />
    </ViewTransitionTipinPage>
  );
}
