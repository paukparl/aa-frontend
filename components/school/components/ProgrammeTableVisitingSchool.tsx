import Link from "next/link";
import * as React from "react";

export type CourseUnit = {
  representativeImage: string | undefined;
  title: string | null;
  dateTextOverride: string | null;
  location: string;
  theme: string;
  documentId: string;
};
type ProgrammeTableVisitingSchoolProps = {
  className?: string;
  units: CourseUnit[];
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
        {units.map((unit) => (
          <Link
            href={`school-programmes/aa-visiting-school/${unit.documentId}`}
            key={unit.title}
            className="mb-[-1px] block grid cursor-pointer grid-cols-[1fr_1fr] transition-[.1s] hover:bg-school-visiting-school-bg sm:min-h-[86px] md:grid-cols-[1fr_1fr_1fr] lg:grid-cols-[1fr_1fr_1fr_1fr]"
          >
            <div className="block flex items-start border-y border-r border-dotted p-[15px] body">
              {unit.representativeImage && (
                <img
                  src={unit.representativeImage}
                  className="mr-[20px] hidden h-[67px] w-[67px] object-cover object-center sm:block"
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
        ))}
      </div>
    </div>
  );
};
