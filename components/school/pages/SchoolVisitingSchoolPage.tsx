import Image from "next/image";
import { notFound } from "next/navigation";
import { Popover } from "radix-ui";
import { CSSProperties } from "react";
import { getSchoolVisitingSchoolCourses } from "@/api/getSchoolVisitingSchoolCourses";
import { getSchoolVisitingSchoolSnippet } from "@/api/getSchoolVisitingSchoolSnippet";
import ViewTransitionTipinPage from "@/components/ViewTransitionTipinPage";
import {
  Map,
  MapCoords,
  MapPopoverContent,
  MapPopoverTrigger,
} from "@/components/dta/components/Map";
import { ButtonWindow } from "@/components/globals/components/ButtonWindow";
import { ProgrammeTableVisitingSchool } from "@/components/school/components/ProgrammeTableVisitingSchool";
import { ProgrammeTextCol } from "@/components/school/components/ProgrammeTextCol";
import { cn } from "@/lib/cn";
import { parseHtml } from "@/lib/parseHtml";
import { routes } from "@/lib/routes";
import { Schema } from "@/lib/schemas";
import { formatLocationText, groupItemsByCoordinates } from "@/lib/utils";

type ValidCourse = Omit<
  Schema<"schoolVisitingSchoolPreview">,
  "dta_locations"
> & {
  dta_locations: (Omit<Schema<"dtaLocation">, "longitude" | "latitude"> & {
    longitude: number;
    latitude: number;
  })[];
};

export async function SchoolVisitingSchoolPage() {
  const [visitingSchoolSnippet, { data: courses }] = await Promise.all([
    getSchoolVisitingSchoolSnippet(),
    getSchoolVisitingSchoolCourses(),
  ]);

  const courseCoords = (
    courses.filter(
      (course) =>
        course.dta_locations.length > 0 &&
        course.dta_locations.every(
          (location) =>
            location.longitude !== null && location.latitude !== null,
        ),
    ) as ValidCourse[]
  ).flatMap((course) =>
    course.dta_locations.map((location) => ({ location, course })),
  );

  const courseCoordGroups = groupItemsByCoordinates({
    items: courseCoords,
    getCoords: (course) => course.location,
    getKey: (course) => course.course.documentId,
  });

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
          {visitingSchoolSnippet.descriptionLandingPage &&
            parseHtml(visitingSchoolSnippet.descriptionLandingPage)}
        </ProgrammeTextCol>
      </div>
      <div className="relative w-full bg-school-visiting-school-bg p-(--padding)">
        <div className="relative">
          <Map
            pathFill="var(--color-school-background)"
            gridStroke="var(--color-black)"
            className="relative gradient-mask"
            style={{ "--gradient-mask-size": "3rem" } as CSSProperties}
          >
            {courseCoordGroups.map((group) => (
              <MapCoords
                key={group.key}
                long={group.longitude}
                lat={group.latitude}
              >
                <Popover.Root>
                  <MapPopoverTrigger count={group.items.length} />
                  <MapPopoverContent
                    className={cn(group.items.length > 1 && "max-h-340")}
                  >
                    {group.items.map(({ course, location }) => (
                      <div
                        key={course.documentId}
                        className="border-dotted border-current py-16 mono text-12/1.4 not-last:border-b first:pt-10 last:pb-10"
                      >
                        {course.representativeImage && (
                          <Image
                            key={course.representativeImage.documentId}
                            src={course.representativeImage.url}
                            alt={
                              course.representativeImage.alternativeText ?? ""
                            }
                            width={course.representativeImage.width}
                            height={course.representativeImage.height}
                            sizes="16rem"
                            className={cn("mb-10")}
                          />
                        )}
                        <div>
                          {course.title && (
                            <>
                              <div className="mt-16">TITLE</div>
                              <div>{course.title}</div>
                            </>
                          )}
                          <div className="mt-16">LOCATION</div>
                          <div>
                            {location.country}
                            {course.onlineCourse ? " / Online" : ""}
                          </div>
                          {course.dateTextOverride && (
                            <>
                              <div className="mt-16">DATE</div>
                              <div>{course.dateTextOverride}</div>
                            </>
                          )}
                        </div>
                      </div>
                    ))}
                  </MapPopoverContent>
                </Popover.Root>
              </MapCoords>
            ))}
          </Map>
          <p className="absolute top-0 left-0 z-1 w-full mono">
            {visitingSchoolSnippet?.mapHeadline}
          </p>
        </div>
      </div>
      <div className="p-(--padding) pb-100">
        <div className="mb-(--padding) mono">
          Join one of our Visiting School short courses happening around the
          world.
        </div>
        <ProgrammeTableVisitingSchool
          units={courses.map((course) => ({
            representativeImage:
              course.representativeImage?.formats?.thumbnail?.url ??
              course.representativeImage?.url,
            imgAlt: course.representativeImage?.alternativeText ?? ``,
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
