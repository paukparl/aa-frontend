import clsx from "clsx";
import * as React from "react";
import { ProgrammeTableInfo } from "@/components/School/Programmes/components/ProgrammeTableInfo";
import { H1 } from "@/components/Typography/H1";
import { TipinHeader } from "@/components/globals/layouts/TipinHeader";

type PageFoundationCourseProps = {
  className?: string;
};

export const PageFoundationCourse = ({
  className,
}: PageFoundationCourseProps) => {
  const mockPageData = {
    tableDegreeType: "AA Foundation Award in Architecture",
    tableDuration: "1 year, full time",
  };
  return (
    <div
      className={clsx(
        className,
        "min-h-[100vh] bg-[rgba(255,255,255,.9)] p-[10px] sm:p-[30px]",
      )}
    >
      <TipinHeader
        colorTheme="school-programmes"
        pageTitle="Foundation"
        breadcrumbLinks={[{ title: "Programmes" }]}
      />
      <H1 tipIn>Foundation Course</H1>
      <ProgrammeTableInfo
        degreeType={mockPageData.tableDegreeType}
        duration={mockPageData.tableDuration}
      />
    </div>
  );
};
