import { getSchoolProgrammes } from "@/api/getSchoolProgrammes";
import ViewTransitionGroundPage from "@/components/ViewTransitionGroundPage";
import { ProgrammePreviewCard } from "@/components/school/components/ProgrammePreviewCard";
import { SchoolNav } from "@/components/school/components/SchoolNav";

export default async function SchoolProgrammesPage() {
  const { data: programmes } = await getSchoolProgrammes();
  // replace mock data below when we can access the rich text fields
  const mockDescriptionData =
    "The Diploma Programme introduces students to the study of advanced research and design methods, and new approaches to practice. Throughout its history, the Diploma Programme has fostered some of the most innovative, challenging and progressive thinking in architecture.";
  return (
    <ViewTransitionGroundPage panel="school">
      <div className="px-(--padding)">
        <SchoolNav activeRoute="programmes" />
        <div className="1000:grid-cols-2 grid gap-(--padding) 1280:grid-cols-3">
          {programmes.map((programme) => (
            <ProgrammePreviewCard
              key={programme.documentId}
              rightAlign={programme.rightAlign}
              fullTime={programme.studyMode === "full-time"}
              durationValue={programme.durationValue}
              documentId={
                programme.programmeTitle === "AA Visiting School"
                  ? "aa-visiting-school"
                  : programme.documentId
              }
              programmeTitle={programme.programmeTitle}
              applyLink={programme.applyLink}
              degreeAwarded={programme.degreeAwarded}
              durationText={programme.durationText}
              description={mockDescriptionData}
            />
          ))}
        </div>
      </div>
    </ViewTransitionGroundPage>
  );
}
