import { getSchoolVisitingSchoolCourse } from "@/api/getSchoolVisitingSchoolCourse";
import ViewTransitionTipinPage from "@/components/ViewTransitionTipinPage";
import { MediaGallery } from "@/components/globals/components/MediaGallery";
import { routes } from "@/lib/routes";
import { formatLocationText } from "@/lib/utils";

export async function SchoolVisitingSchoolCoursePage({
  slug,
}: {
  slug: string;
}) {
  const course = await getSchoolVisitingSchoolCourse(slug);
  return (
    <ViewTransitionTipinPage
      type="2"
      bg="var(--color-school-visiting-school-bg)"
      fg="var(--color-black)"
      title={course?.title ?? ""}
      ancestors={[
        { title: "Programmes", path: routes.ground("school-programmes") },
        {
          title: "AA Visiting School",
          path: routes.tipin1("school-programmes", "aa-visiting-school"),
        },
      ]}
    >
      <div className="p-(--padding)">
        <h1 className="h1-mono">{course?.title}</h1>
        {course?.representativeImage?.url && (
          <MediaGallery
            className="mt-(--padding)"
            colorTheme="school-programmes"
            slides={[
              {
                src: course?.representativeImage?.url,
                caption: course?.representativeImage?.caption,
              },
            ]}
          />
        )}
        <div className="pb-[30px] sm:pb-[50px]">
          <div className="mt-[10px] grid grid-cols-[1fr_2fr] border-x border-t border-dotted sm:mt-[20px] md:grid-cols-[1fr_3fr]">
            <div className="border-r border-b border-dotted p-[15px] mono">
              Location
            </div>
            <div className="border-b border-dotted p-[15px] mono">
              {formatLocationText(course?.onlineCourse, course?.dta_locations)}
            </div>
            <div className="border-r border-b border-dotted p-[15px] mono">
              Duration
            </div>
            <div className="border-b border-dotted p-[15px] mono">
              {course?.dateTextOverride}
            </div>
            <div className="border-r border-b border-dotted p-[15px] mono">
              Theme
            </div>
            <div className="border-b border-dotted p-[15px] mono">
              {course?.theme}
            </div>
          </div>
        </div>
        <div className="bg-white p-100 text-center mono">DYNAMIC ZONE</div>
      </div>
    </ViewTransitionTipinPage>
  );
}
