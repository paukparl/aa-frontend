// import { getSchoolFacilities } from "@/api/getSchoolFacilities";
// import { getSchoolProgrammes } from "@/api/getSchoolProgrammes";
// import { getSchoolVisitingSchoolCourses } from "@/api/getSchoolVisitingSchoolCourses";
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
import { ProgrammeTextCol } from "@/components/school/components/ProgrammeTextCol";
import { SchoolNav } from "@/components/school/components/SchoolNav";
import { cn } from "@/lib/cn";
import { Schema } from "@/lib/schemas";

type _TypesAvailable =
  | Schema<"schoolProgrammePreview">
  | Schema<"schoolFacilityPreview">
  | Schema<"schoolVisitingSchoolCoursePreview">
  | Schema<"schoolEventPreview">;

export default async function SchoolPage() {
  // const [
  //   { data: programmes },
  //   { data: facilities },
  //   { data: visitingSchoolCourses },
  // ] = await Promise.all([
  //   getSchoolProgrammes(),
  //   getSchoolFacilities(),
  //   getSchoolVisitingSchoolCourses(),
  // ]);

  return (
    <ViewTransitionGroundPage panel="school">
      <div className="min-h-[90vh] px-(--padding)">
        <SchoolNav activeSlug="school" />
        <ProgrammeTextCol
          className="mt-(--padding)"
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

        <Carousel options={{ align: "start" }}>
          <div className={cn("flex items-center")}>
            <h2 className={cn("h1")}>Programmes</h2>
            <DashedMonoButton className={cn("ml-24")}>See all</DashedMonoButton>
            <CarouselArrows className={cn("ml-auto")} />
          </div>
          <CarouselViewport className={cn("700:-mx-(--padding)")}>
            <CarouselContainer
              className={cn("flex-col gap-(--padding) 700:flex-row")}
            >
              {/* {programmes.map((programme, programmeIdx) => (
                <CarouselSlide key={programme.id} asChild>
                  <div
                    className={cn(
                      "max-700:flex- size-400",
                      programmeIdx >= 3 && "hidden 700:block",
                    )}
                    style={{ background: programme.hexValue ?? "#fff" }}
                  ></div>
                </CarouselSlide>
              ))} */}
            </CarouselContainer>
          </CarouselViewport>
        </Carousel>

        <Carousel options={{ align: "start" }}>
          <div className={cn("flex items-center")}>
            <h2 className={cn("h1")}>Facilities</h2>
            <DashedMonoButton className={cn("ml-24")}>See all</DashedMonoButton>
            <CarouselArrows className={cn("ml-auto")} />
          </div>
          <CarouselViewport>
            <CarouselContainer>
              <CarouselSlide asChild>
                <div className={cn("ml-20 size-400 bg-white")}></div>
              </CarouselSlide>
              <CarouselSlide asChild>
                <div className={cn("ml-20 size-400 bg-white")}></div>
              </CarouselSlide>
              <CarouselSlide asChild>
                <div className={cn("ml-20 size-400 bg-white")}></div>
              </CarouselSlide>
              <CarouselSlide asChild>
                <div className={cn("ml-20 size-400 bg-white")}></div>
              </CarouselSlide>
              <CarouselSlide asChild>
                <div className={cn("ml-20 size-400 bg-white")}></div>
              </CarouselSlide>
              <CarouselSlide asChild>
                <div className={cn("ml-20 size-400 bg-white")}></div>
              </CarouselSlide>
            </CarouselContainer>
          </CarouselViewport>
        </Carousel>
      </div>
    </ViewTransitionGroundPage>
  );
}
