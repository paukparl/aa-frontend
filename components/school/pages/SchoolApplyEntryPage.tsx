import { notFound } from "next/navigation";
import { getSchoolApplyEntry } from "@/api/getSchoolApplyEntry";
import ViewTransitionTipinPage from "@/components/ViewTransitionTipinPage";
import { routes } from "@/lib/routes";

export async function SchoolApplyEntryPage({ slug }: { slug: string }) {
  const entry = await getSchoolApplyEntry(slug);

  if (!entry) notFound();

  return (
    <ViewTransitionTipinPage
      type="1"
      bg={"var(--color-white)"}
      fg={"var(--color-black)"}
      title={entry.schoolProgramme?.programmeTitle}
      ancestors={[
        { title: "Programmes", path: routes.ground("school-programmes") },
      ]}
    >
      <div className="p-(--padding) pb-100">
        <pre>{JSON.stringify(entry, null, 2)}</pre>
      </div>
    </ViewTransitionTipinPage>
  );
}
