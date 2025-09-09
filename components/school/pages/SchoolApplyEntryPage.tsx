import { notFound } from "next/navigation";
import { getSchoolApplyEntry } from "@/api/getSchoolApplyEntry";
import ViewTransitionTipinPage from "@/components/ViewTransitionTipinPage";
import { RichText } from "@/components/globals/RichText";
import { ButtonWindow } from "@/components/globals/components/ButtonWindow";
import { ProgrammeDoubleTextCol } from "@/components/school/components/ProgrammeDoubleTextCol";
import { ProgrammeTableInfo } from "@/components/school/components/ProgrammeTableInfo";
import { routes } from "@/lib/routes";

export async function SchoolApplyEntryPage({ slug }: { slug: string }) {
  const entry = await getSchoolApplyEntry(slug);
  if (!entry || !entry.schoolProgramme) notFound();
  return (
    <ViewTransitionTipinPage
      type="1"
      bg={entry.schoolProgramme.hexValue ?? "var(--color-white)"}
      fg={"var(--color-black)"}
      title={entry.schoolProgramme.programmeTitle}
      ancestors={[{ title: "Programmes", path: routes.schoolProgrammes }]}
    >
      <div className="p-(--padding) pb-100">
        <h1 className="h1-mono">{`${entry.schoolProgramme.programmeTitle} Admissions`}</h1>
        <ProgrammeTableInfo
          degreeAwarded={entry.schoolProgramme.degreeAwarded}
          durationText={entry.schoolProgramme.durationText}
        />
        <h1 className="h1-mono">How to Apply</h1>
        <ProgrammeDoubleTextCol
          className="mt-[2rem]"
          col1Content={
            <RichText className="body">
              {entry.howToApplyRichText ?? ``}
            </RichText>
          }
          col2Content={
            <div className="flex w-full justify-center">
              <ButtonWindow
                colorTheme="school"
                context="school"
                links={[
                  { displayText: "Start Application", link: "" },
                  {
                    displayText: "Discover the Program",
                    link: `/school-programmes/${entry.schoolProgramme.slug}`,
                  },
                ]}
              />
            </div>
          }
        />
      </div>
    </ViewTransitionTipinPage>
  );
}
