import { getSchoolVisitingSchool } from "@/api/getSchoolVisitingSchool";
import ViewTransitionTipinPage from "@/components/ViewTransitionTipinPage";
import { routes } from "@/lib/routes";

export async function SchoolVisitingSchoolPage({ slug }: { slug: string }) {
  const visitingSchool = await getSchoolVisitingSchool(slug);
  return (
    <ViewTransitionTipinPage
      type="2"
      bg="var(--color-school-visiting-school-bg)"
      fg="var(--color-black)"
      title={visitingSchool?.title ?? ""}
      ancestors={[
        { title: "Programmes", path: routes.ground("school-programmes") },
        {
          title: "AA Visiting School",
          path: routes.tipin1("school-programmes", "aa-visiting-school"),
        },
      ]}
    >
      <pre>{JSON.stringify(visitingSchool, null, 2)}</pre>
    </ViewTransitionTipinPage>
  );
}
