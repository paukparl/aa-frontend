import Link from "next/link";
import { getSchoolProgrammes } from "@/api/getSchoolProgrammes";
import { getSchoolVisitingSchoolSnippet } from "@/api/getSchoolVisitingSchoolSnippet";
import ViewTransitionGroundPage from "@/components/ViewTransitionGroundPage";
import { ProgrammePreviewCard } from "@/components/school/components/ProgrammePreviewCard";
import { SchoolNav } from "@/components/school/components/SchoolNav";
import { routes } from "@/lib/routes";

export default async function SchoolProgrammesPage() {
  const [{ data: programmes }, visitingSchoolSnippet] = await Promise.all([
    getSchoolProgrammes(),
    getSchoolVisitingSchoolSnippet(),
  ]);

  return (
    <ViewTransitionGroundPage panel="school">
      <div className="px-(--padding)">
        <SchoolNav activeRoute="programmes" />
        <div className="1000:grid-cols-2 grid 1280:grid-cols-3">
          {programmes.map((programme) => (
            <ProgrammePreviewCard
              key={programme.documentId}
              programmeTitle={programme.programmeTitle}
              degreeAwarded={programme.degreeAwarded}
              durationText={programme.durationText}
            />
          ))}
          <Link
            href={routes.tipin1("school-programmes", "aa-visiting-school")}
            className="underline"
            scroll={false}
          >
            {routes.tipin1("school-programmes", "aa-visiting-school")}
          </Link>
          <br />
          {JSON.stringify(programmes, null, 2)}
          {JSON.stringify(visitingSchoolSnippet, null, 2)}
        </div>
      </div>
    </ViewTransitionGroundPage>
  );
}
