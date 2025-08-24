import { getSchoolSnippet } from "@/api/getSchoolSnippet";
import ViewTransitionGroundPage from "@/components/ViewTransitionGroundPage";
import { ProgrammePreviewCard } from "@/components/school/components/ProgrammePreviewCard";
import { SchoolNav } from "@/components/school/components/SchoolNav";

export default async function SchoolProgrammesPage() {
  const _schoolSnippet = await getSchoolSnippet();
  return (
    <ViewTransitionGroundPage panel="school">
      <div className="px-(--padding)">
        <SchoolNav activeSlug={"school-programmes"} />
        <div className="grid gap-(--padding) 1024:grid-cols-2 1280:grid-cols-3">
          {_schoolSnippet &&
            _schoolSnippet.programOrdering.map(
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
