import clsx from "clsx";
import * as React from "react";
import { ProgrammeTableInfo } from "@/components/School/Programmes/components/ProgrammeTableInfo";
import { H1 } from "@/components/Typography/H1";
import { TipinHeader } from "@/components/globals/layouts/TipinHeader";

type PagePhDProgrammeProps = {
  className?: string;
};

export const PagePhDProgramme = ({ className }: PagePhDProgrammeProps) => {
  const mockPageData = {
    tableDegreeType: "PhD",
    tableDuration: "3 years, full time",
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
        pageTitle="PhD"
        breadcrumbLinks={[{ title: "Programmes" }]}
      />
      <H1 tipIn>PhD Programme</H1>
      <ProgrammeTableInfo
        degreeType={mockPageData.tableDegreeType}
        duration={mockPageData.tableDuration}
      />
    </div>
  );
};
