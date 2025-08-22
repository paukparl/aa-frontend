import { notFound } from "next/navigation";
import { getSchoolFacility } from "@/api/getSchoolFacility";
import ViewTransitionTipinPage from "@/components/ViewTransitionTipinPage";
import { routes } from "@/lib/routes";

export async function SchoolFacilityPage({ slug }: { slug: string }) {
  const facility = await getSchoolFacility(slug);

  if (!facility) notFound();

  return (
    <ViewTransitionTipinPage
      type="1"
      bg={"var(--color-facilities)"}
      fg={"var(--color-black)"}
      title={facility.name}
      ancestors={[
        { title: "Facilities", path: routes.ground("school-facilities") },
      ]}
    >
      <div className="p-(--padding) pb-100">
        <pre>{JSON.stringify(facility, null, 2)}</pre>
      </div>
    </ViewTransitionTipinPage>
  );
}
