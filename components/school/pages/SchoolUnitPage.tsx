import { notFound } from "next/navigation";
import { getSchoolProgramme } from "@/api/getSchoolProgramme";
import { getSchoolUnit } from "@/api/getSchoolUnit";
import ViewTransitionTipinPage from "@/components/ViewTransitionTipinPage";
import { routes } from "@/lib/routes";

export async function SchoolUnitPage({
  programmeSlug,
  slug,
}: {
  programmeSlug: string;
  slug: string;
}) {
  const [programme, unit] = await Promise.all([
    getSchoolProgramme(programmeSlug),
    getSchoolUnit(slug),
  ]);

  if (!programme || !unit) notFound();

  return (
    <ViewTransitionTipinPage
      type="2"
      bg={programme.hexValue ?? "var(--color-white)"}
      fg={"var(--color-black)"}
      title={unit.unitTitle}
      ancestors={[
        { title: "Programmes", path: routes.ground("school-programmes") },
        {
          title: programme.programmeTitle ?? "",
          path: routes.tipin1("school-programmes", programmeSlug),
        },
      ]}
    >
      {/* Links and data */}
      <pre>{JSON.stringify(unit, null, 2)}</pre>
    </ViewTransitionTipinPage>
  );
}
