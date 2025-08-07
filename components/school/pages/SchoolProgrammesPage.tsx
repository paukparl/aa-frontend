import Link from "next/link";
import { Fragment } from "react";
import { getSchoolProgrammes } from "@/api/getSchoolProgrammes";
import { getSchoolVisitingSchoolSnippet } from "@/api/getSchoolVisitingSchoolSnippet";
import ViewTransitionGroundPage from "@/components/ViewTransitionGroundPage";
import { routes } from "@/lib/routes";

export default async function SchoolProgrammesPage() {
  const [{ data: programmes }, visitingSchoolSnippet] = await Promise.all([
    getSchoolProgrammes(),
    getSchoolVisitingSchoolSnippet(),
  ]);

  return (
    <ViewTransitionGroundPage panel="school">
      {/* Links and data */}
      <pre>
        {programmes.map((programme) => (
          <Fragment key={programme.documentId}>
            <Link
              key={programme.documentId}
              href={routes.tipin1("school-programmes", programme.documentId)}
              className="underline"
              scroll={false}
            >
              {routes.tipin1("school-programmes", programme.documentId)}
            </Link>
            <br />
          </Fragment>
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
      </pre>
    </ViewTransitionGroundPage>
  );
}
