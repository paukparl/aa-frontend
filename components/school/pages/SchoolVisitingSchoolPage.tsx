import { getSchoolVisitingSchoolCourses } from "@/api/getSchoolVisitingSchoolCourses";
import { getSchoolVisitingSchoolSnippet } from "@/api/getSchoolVisitingSchoolSnippet";
import ViewTransitionTipinPage from "@/components/ViewTransitionTipinPage";
import { ButtonWindow } from "@/components/globals/components/ButtonWindow";
import { ProgrammeTableVisitingSchool } from "@/components/school/components/ProgrammeTableVisitingSchool";
import { ProgrammeTextCol } from "@/components/school/components/ProgrammeTextCol";
import { routes } from "@/lib/routes";
import { formatLocationText } from "@/lib/utils";

export async function SchoolVisitingSchoolPage() {
  const [visitingSchoolSnippet, { data: visitingSchoolCourses }] =
    await Promise.all([
      getSchoolVisitingSchoolSnippet(),
      getSchoolVisitingSchoolCourses(),
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
      <div className="p-(--padding)">
        <h1 className="tipin">AA Visiting School</h1>
        <ProgrammeTextCol
          className="mt-(--padding)"
          col2content={
            <div className="flex justify-center">
              <ButtonWindow
                links={[
                  { displayText: "Enquire to study", link: "" },
                  {
                    displayText: "Newsletter",
                    link: visitingSchoolSnippet?.newsletterLink ?? "",
                  },
                ]}
                context="school"
                colorTheme="school"
              />
            </div>
          }
        >
          Encompassing myriad forms and agendas, AA Visiting School courses,
          competitions and workshops are built around agenda driven project
          briefs that are pursued and shaped by participants working intensively
          in small groups, and are led by AA tutors and other international
          experts. Central to each is the idea that experimental, new and
          provocative forms of architecture are best learned by doing. The
          school promotes, tests and challenges contemporary global interests
          and issues in architectural learning and exchange by embedding a
          diverse group of creative participants and tutors in an array of
          unique rural, urban, international and online contexts. Places on each
          course are limited, and anybody who would like to further their
          architectural knowledge and skills can apply.
        </ProgrammeTextCol>
      </div>
      <div className="my-(--padding) w-full bg-school-visiting-school-bg py-100 text-center mono">
        MAP
        <br />
        map headline:&nbsp;
        {visitingSchoolSnippet?.mapHeadline}
      </div>
      <div className="p-(--padding) pb-100">
        <div className="mb-(--padding) mono">
          Join one of our Visiting School short courses happening around the
          world.
        </div>
        <ProgrammeTableVisitingSchool
          units={visitingSchoolCourses.map((course) => ({
            representativeImage:
              course.representativeImage?.formats?.thumbnail?.url ??
              course.representativeImage?.url,
            dateTextOverride: course.dateTextOverride,
            title: course.title,
            location: formatLocationText(
              course.onlineCourse,
              course.dta_locations,
            ),
            theme: "Urban and Landscape Ecologies",
            documentId: course.documentId,
            slug: course.slug,
          }))}
        />
        <div className="my-(--padding) w-full bg-school-visiting-school-bg py-100 text-center mono">
          DYNAMIC ZONE
        </div>
      </div>
    </ViewTransitionTipinPage>
  );
}
