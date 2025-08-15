import { getSchoolPeople } from "@/api/getSchoolPeople";
import { getSchoolSnippet } from "@/api/getSchoolSnippet";
import ViewTransitionGroundPage from "@/components/ViewTransitionGroundPage";
import { SchoolNav } from "@/components/school/components/SchoolNav";

export default async function SchoolPeoplePage() {
  const [schoolSnippet, { data: people }] = await Promise.all([
    getSchoolSnippet(),
    getSchoolPeople(),
  ]);
  return (
    <ViewTransitionGroundPage panel="school">
      <div className="px-(--padding)">
        <SchoolNav activeSlug={"school-people"} />
        <pre>{JSON.stringify(schoolSnippet, null, 2)}</pre>
        <pre>{JSON.stringify(people, null, 2)}</pre>
      </div>
    </ViewTransitionGroundPage>
  );
}
