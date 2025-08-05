import ViewTransitionGroundPage from "@/components/ViewTransitionGroundPage";
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
      {/* TODO: (Jess) Page goes here */}
    </ViewTransitionGroundPage>
  );
}
