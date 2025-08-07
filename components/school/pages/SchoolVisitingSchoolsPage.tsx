import Link from "next/link";
import { Fragment } from "react";
import { getSchoolVisitingSchoolSnippet } from "@/api/getSchoolVisitingSchoolSnippet";
import { getSchoolVisitingSchools } from "@/api/getSchoolVisitingSchools";
import ViewTransitionTipinPage from "@/components/ViewTransitionTipinPage";
import { routes } from "@/lib/routes";

export async function SchoolVisitingSchoolsPage() {
  const [visitingSchoolSnippet, { data: visitingSchools }] = await Promise.all([
    getSchoolVisitingSchoolSnippet(),
    getSchoolVisitingSchools(),
  ]);
  return (
    <ViewTransitionTipinPage
      type="1"
      bg="var(--color-white)"
      fg="var(--color-black)"
      title="AA Visiting School"
      ancestors={[
        { title: "Programmes", path: routes.ground("school-programmes") },
      ]}
    >
      <pre>
        {visitingSchools.map((visitingSchool) => (
          <Fragment key={visitingSchool.documentId}>
            <Link
              key={visitingSchool.documentId}
              href={routes.tipin2(
                "school-programmes",
                "aa-visiting-school",
                visitingSchool.documentId,
              )}
              className="underline"
              scroll={false}
            >
              {routes.tipin2(
                "school-programmes",
                "aa-visiting-school",
                visitingSchool.documentId,
              )}
            </Link>
            <br />
          </Fragment>
        ))}
        {JSON.stringify(visitingSchoolSnippet, null, 2)}
        {JSON.stringify(visitingSchools, null, 2)}
      </pre>
    </ViewTransitionTipinPage>
  );
}
