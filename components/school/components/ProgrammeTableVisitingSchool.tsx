import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { routes } from "@/lib/routes";
import { Schema } from "@/lib/schemas";

export type CourseUnit = {
  representativeImage: string | undefined;
  imgAlt: string | null | undefined;
  title: string | null;
  dateTextOverride: string | null;
  location: string;
  theme: string;
  documentId: string;
  slug: string | null;
};
type ProgrammeTableVisitingSchoolProps = {
  className?: string;
  units: CourseUnit[];
};

// You could do this ↓↓
type _ProgrammeTableVisitingSchoolProps = {
  courses: Schema<"schoolVisitingSchoolCoursePreview">[];
};

export const ProgrammeTableVisitingSchool = ({
  className,
  units,
}: ProgrammeTableVisitingSchoolProps) => {
  return (
    <div className={className}>
      <div className="border-x border-t border-dotted">
        <div className="grid grid-cols-[1fr_1fr] bg-school-visiting-school-bg md:grid-cols-[1fr_1fr_1fr] lg:grid-cols-[1fr_1fr_1fr_1fr]">
          <div className="flex justify-center border-r border-dotted p-[15px] mono">
            Title
          </div>
          <div className="hidden justify-center border-dotted p-[15px] mono md:flex md:border-r">
            Dates
          </div>
          <div className="flex justify-center border-dotted p-[15px] mono md:border-r">
            Location
          </div>
          <div className="hidden justify-center p-[15px] mono lg:flex">
            Theme
          </div>
        </div>
        {units.map(
          (unit) =>
            unit.slug && (
              <Link
                href={routes.tipin2(
                  "school-programmes",
                  "aa-visiting-school",
                  unit.slug,
                )}
                key={unit.title}
                className="mb-[-1px] block grid cursor-pointer grid-cols-[1fr_1fr] transition-[.1s] hover:bg-school-visiting-school-bg sm:min-h-[86px] md:grid-cols-[1fr_1fr_1fr] lg:grid-cols-[1fr_1fr_1fr_1fr]"
              >
                <div className="block flex items-start border-y border-r border-dotted p-[15px] body">
                  {unit.representativeImage && (
                    <Image
                      height="67"
                      width="67"
                      alt={unit.imgAlt ?? ``}
                      src={unit.representativeImage}
                      className="mr-[20px] hidden object-cover object-center sm:block"
                    />
                  )}
                  {unit.title}
                </div>
                <div className="hidden border-y border-dotted p-[15px] body md:block md:border-r">
                  {unit.dateTextOverride}
                </div>
                <div className="block border-y border-dotted p-[15px] body md:border-r">
                  {unit.location}
                </div>
                <div className="hidden border-y border-dotted p-[15px] body lg:block">
                  {unit.theme}
                </div>
              </Link>
            ),
        )}
      </div>
    </div>
  );
};
