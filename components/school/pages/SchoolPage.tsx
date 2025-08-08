import ViewTransitionGroundPage from "@/components/ViewTransitionGroundPage";
import { SchoolNav } from "@/components/school/components/SchoolNav";
import { Schema } from "@/lib/schemas";

type _TypesAvailable =
  | Schema<"schoolProgrammePreview">
  | Schema<"schoolFacilityPreview">
  | Schema<"schoolVisitingSchoolPreview">
  | Schema<"schoolEventPreview">;

export default async function SchoolPage() {
  // TODO: (Paul) Fetch and pass data below

  return (
    <ViewTransitionGroundPage panel="school">
      <div className="min-h-[90vh] px-(--padding)">
        <SchoolNav />
      </div>
    </ViewTransitionGroundPage>
  );
}
