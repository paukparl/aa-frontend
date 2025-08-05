import { notFound } from "next/navigation";
import { getDTAPerson } from "@/api";
import ViewTransitionTipinPage from "@/components/ViewTransitionTipinPage";
import { DTAPersonPageContent } from "@/components/dta/pages/DTAPersonPageContent";
import { routes } from "@/lib/routes";

export async function DTAPersonPage({ slug }: { slug: string }) {
  const person = await getDTAPerson(slug);

  if (!person) notFound();

  return (
    <ViewTransitionTipinPage
      type="2"
      bg="var(--color-dta-tipin-2-background)"
      fg="var(--color-dta-green)"
      title={`${person.firstName} ${person.lastName}`}
      ancestors={[
        { title: "DTA Archive", path: routes.ground("dta") },
        { title: "People", path: routes.tipin1("dta", "people") },
      ]}
    >
      <DTAPersonPageContent person={person} />
    </ViewTransitionTipinPage>
  );
}
