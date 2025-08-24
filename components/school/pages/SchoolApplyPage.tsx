import { getSchoolApplyEntries } from "@/api/getSchoolApplyEntries";
import { getSchoolSnippet } from "@/api/getSchoolSnippet";
import ViewTransitionGroundPage from "@/components/ViewTransitionGroundPage";
import { RichText } from "@/components/globals/RichText";
import { ButtonWindow } from "@/components/globals/components/ButtonWindow";
import { ProgrammeDoubleTextCol } from "@/components/school/components/ProgrammeDoubleTextCol";
import { ProgrammePreviewCard } from "@/components/school/components/ProgrammePreviewCard";
import { SchoolNav } from "@/components/school/components/SchoolNav";

export default async function SchoolApplyPage() {
  const [schoolSnippet, { data: applyEntries }] = await Promise.all([
    getSchoolSnippet(),
    getSchoolApplyEntries(),
  ]);
  return (
    <ViewTransitionGroundPage panel="school">
      <div className="px-(--padding)">
        <SchoolNav activeSlug={"school-apply"} />
        {schoolSnippet?.applyLandingDescription && (
          <ProgrammeDoubleTextCol
            col1Content={
              <RichText className="body">
                {schoolSnippet.applyLandingDescription}
              </RichText>
            }
            col2Content={
              <div className="flex w-[100%] justify-center">
                <ButtonWindow
                  context="school"
                  colorTheme="school"
                  links={[
                    {
                      displayText: "Financial Assistance",
                      link:
                        schoolSnippet.applyLandingFinancialAssistanceLink ?? "",
                    },
                    {
                      displayText: "Tuition Fees",
                      link: schoolSnippet.applyLandingTuitionFees ?? "",
                    },
                  ]}
                />
              </div>
            }
          />
        )}
        <h1>Programmes</h1>
        <div className="grid gap-(--padding) 1024:grid-cols-2 1280:grid-cols-3">
          {schoolSnippet?.programOrdering.map(
            (item) =>
              item.school_programme && (
                <ProgrammePreviewCard
                  key={item.school_programme.id}
                  programme={item.school_programme}
                />
              ),
          )}
        </div>
      </div>
    </ViewTransitionGroundPage>
  );
}
