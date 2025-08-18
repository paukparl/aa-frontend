import { getSchoolFacilities } from "@/api/getSchoolFacilities";
import { getSchoolSnippet } from "@/api/getSchoolSnippet";
import ViewTransitionGroundPage from "@/components/ViewTransitionGroundPage";
import { SchoolNav } from "@/components/school/components/SchoolNav";

export default async function SchoolFacilitiesPage() {
  const [schoolSnippet, { data: facilities }] = await Promise.all([
    // eric says there should be a text for facilities inside school snippet, but it doesn't exist in strapi.
    // i'll leave this for now.
    getSchoolSnippet(),
    getSchoolFacilities(),
  ]);
  return (
    <ViewTransitionGroundPage panel="school">
      <div className="px-(--padding)">
        <SchoolNav activeSlug={"school-facilities"} />
        <pre>{JSON.stringify(schoolSnippet, null, 2)}</pre>
        <pre>{JSON.stringify(facilities, null, 2)}</pre>
      </div>
    </ViewTransitionGroundPage>
  );
}
