import Link from "next/link";
import { notFound } from "next/navigation";
import { Fragment } from "react";
import { getSchoolProgramme } from "@/api/getSchoolProgramme";
import ViewTransitionTipinPage from "@/components/ViewTransitionTipinPage";
import { routes } from "@/lib/routes";

export async function SchoolProgrammePage({ slug }: { slug: string }) {
  const programme = await getSchoolProgramme(slug);

  if (!programme) notFound();

  return (
    <ViewTransitionTipinPage
      type="1"
      bg={"var(--color-white)"}
      fg={"var(--color-black)"}
      title={programme.programmeTitle}
      ancestors={[
        { title: "Programmes", path: routes.ground("school-programmes") },
      ]}
    >
      {/* Links and data */}
      <pre>
        {programme.school_units.map((unit) => (
          <Fragment key={unit.documentId}>
            <Link
              key={unit.documentId}
              href={routes.tipin2(
                "school-programmes",
                programme.documentId,
                unit.documentId,
              )}
              className="underline"
              scroll={false}
            >
              {routes.tipin2(
                "school-programmes",
                programme.documentId,
                unit.documentId,
              )}
            </Link>
            <br />
          </Fragment>
        ))}
        {JSON.stringify(programme, null, 2)}
      </pre>
    </ViewTransitionTipinPage>
  );
}
