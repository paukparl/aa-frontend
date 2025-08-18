import { getSchoolApplyEntries } from "@/api/getSchoolApplyEntries";
import { getSchoolSnippet } from "@/api/getSchoolSnippet";
import ViewTransitionGroundPage from "@/components/ViewTransitionGroundPage";
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
        <pre>{JSON.stringify(schoolSnippet, null, 2)}</pre>
        <pre>{JSON.stringify(applyEntries, null, 2)}</pre>
      </div>
    </ViewTransitionGroundPage>
  );
}
