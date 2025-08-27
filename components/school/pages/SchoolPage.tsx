import Link from "next/link";
import { getSchoolFacilities } from "@/api/getSchoolFacilities";
import { getSchoolSnippet } from "@/api/getSchoolSnippet";
import { getSchoolVisitingSchoolCourses } from "@/api/getSchoolVisitingSchoolCourses";
import ViewTransitionGroundPage from "@/components/ViewTransitionGroundPage";
import DashedMonoButton from "@/components/buttons/DashedMonoButton";
import {
  Carousel,
  CarouselArrows,
  CarouselContainer,
  CarouselSlide,
  CarouselViewport,
} from "@/components/dta/components/Carousel";
import { ButtonWindow } from "@/components/globals/components/ButtonWindow";
import { FacilityPreviewCard } from "@/components/school/components/FacilityPreviewCard";
import { ProgrammePreviewCardWithImg } from "@/components/school/components/ProgrammePreviewCardWithImg";
import { ProgrammeTextCol } from "@/components/school/components/ProgrammeTextCol";
import { SchoolNav } from "@/components/school/components/SchoolNav";
import { VisitingSchoolCoursePreviewCard } from "@/components/school/components/VisitingSchoolCoursePreviewCard";
import { cn } from "@/lib/cn";
import { routes } from "@/lib/routes";

export default async function SchoolPage() {
  const [schoolSnippet, { data: facilities }, { data: visitingSchoolCourses }] =
    await Promise.all([
      getSchoolSnippet(),
      getSchoolFacilities(),
      getSchoolVisitingSchoolCourses(),
    ]);

  return (
    <ViewTransitionGroundPage panel="school">
      <div className="min-h-[90vh] px-(--padding) pb-100">
        <SchoolNav activeSlug="school" />
        <ProgrammeTextCol
          className="mt-(--padding) mb-70"
          col2content={
            <div className="flex justify-center">
              <ButtonWindow
                links={[
                  { displayText: "Inquire to Apply", link: "" },
                  { displayText: "Applications are now open", link: "" },
                ]}
                context="school"
                colorTheme="school"
              />
            </div>
          }
        >
          The Architectural Association (AA), one of the oldest schools of
          architecture in the UK, was founded in 1847 with the aspiration of
          ‘promoting and affording facilities for the study of architecture for
          the public benefit’. Since 1847, the AA has been committed to
          producing and disseminating ideas that challenge and advance the
          design of contemporary culture, cities and the environment, constantly
          and fearlessly looking into the future.
        </ProgrammeTextCol>

        {/* Programmes grid / carousel */}
        <Carousel
          options={{
            align: "start",
            breakpoints: {
              "": { active: false },
              "(min-width: 700px)": { active: true },
            },
          }}
          className={cn("-mx-(--padding) mb-70")}
        >
          <div
            className={cn("mb-(--padding) flex items-center px-(--padding)")}
          >
            <h2 className={cn("h1")}>Programmes</h2>
            <DashedMonoButton className={cn("ml-24 max-700:hidden")} asChild>
              <Link href={routes.ground("school-programmes")} scroll={false}>
                See all
              </Link>
            </DashedMonoButton>
            <CarouselArrows className={cn("ml-auto max-700:hidden")} />
          </div>
          <CarouselViewport className={cn("px-(--padding)")}>
            <CarouselContainer
              className={cn("flex-col gap-(--padding) 700:flex-row")}
            >
              {schoolSnippet?.programOrdering
                .filter((item) => item.school_programme)
                .map(
                  ({ school_programme: programme }, programmeIdx) =>
                    programme && (
                      <CarouselSlide key={programme.id} asChild>
                        <ProgrammePreviewCardWithImg
                          className={cn(
                            "700:w-[60%] 1280:w-[40%]",
                            programmeIdx >= 3 && "max-700:hidden",
                          )}
                          programme={programme}
                        />
                      </CarouselSlide>
                    ),
                )}
            </CarouselContainer>
          </CarouselViewport>
          <div className={cn("mt-(--padding) px-(--padding) 700:hidden")}>
            <DashedMonoButton className={cn("")} asChild>
              <Link href={routes.ground("school-programmes")} scroll={false}>
                See all
              </Link>
            </DashedMonoButton>
          </div>
        </Carousel>

        {/* Facilities grid / carousel */}
        <Carousel
          options={{
            align: "start",
            breakpoints: {
              "": { active: false },
              "(min-width: 700px)": { active: true },
            },
          }}
          className={cn("-mx-(--padding) mb-70")}
        >
          <div
            className={cn("mb-(--padding) flex items-center px-(--padding)")}
          >
            <h2 className={cn("h1")}>Facilities</h2>
            <DashedMonoButton className={cn("ml-24 max-700:hidden")} asChild>
              <Link href={routes.ground("school-facilities")} scroll={false}>
                See all
              </Link>
            </DashedMonoButton>
            <CarouselArrows className={cn("ml-auto max-700:hidden")} />
          </div>
          <CarouselViewport className={cn("px-(--padding)")}>
            <CarouselContainer
              className={cn("flex-col gap-(--padding) 700:flex-row")}
            >
              {facilities.map((facility, facilityIdx) => (
                <CarouselSlide key={facility.id} asChild>
                  <FacilityPreviewCard
                    className={cn(
                      "bg-facilities 700:w-[60%] 1280:w-[40%]",
                      facilityIdx >= 3 && "max-700:hidden",
                    )}
                    facility={facility}
                  />
                </CarouselSlide>
              ))}
            </CarouselContainer>
          </CarouselViewport>
        </Carousel>

        {/* Visiting School grid */}
        <div>
          <div className={cn("mb-(--padding) flex items-center")}>
            <h2 className={cn("h1")}>Visiting School</h2>
            <DashedMonoButton className={cn("ml-24")} asChild>
              <Link
                href={routes.tipin1("school-programmes", "aa-visiting-school")}
                scroll={false}
              >
                See all
              </Link>
            </DashedMonoButton>
          </div>
          <div
            className={cn(
              "grid gap-(--padding) 700:grid-cols-2 1280:grid-cols-3",
            )}
          >
            {visitingSchoolCourses.slice(0, 3).map((course, courseIdx) => (
              <VisitingSchoolCoursePreviewCard
                key={course.id}
                course={course}
                className={cn(courseIdx >= 2 && "700:max-1280:hidden")}
              />
            ))}
          </div>
        </div>
      </div>
    </ViewTransitionGroundPage>
  );
}
