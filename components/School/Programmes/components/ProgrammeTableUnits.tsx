import clsx from "clsx";
import * as React from "react";
import { Body } from "@/components/Typography/Body";
import { H1 } from "@/components/Typography/H1";
import { Mono } from "@/components/Typography/Mono";

type ProgrammeColorTheme = "intermediate" | "diploma" | "postgrad" | "visiting";
type ProgrammeUnit = { thumbnailImgSrc: string; title: string; tutors: string };
type ProgrammeTableUnitsProps = {
  className?: string;
  colorTheme: ProgrammeColorTheme;
  units: ProgrammeUnit[];
};

export const ProgrammeTableUnits = ({
  className,
  colorTheme,
  units,
}: ProgrammeTableUnitsProps) => {
  const colorThemeDict = {
    intermediate: "bg-programmes-intermediate-accent",
    diploma: "bg-programmes-diploma-accent",
    postgrad: "bg-programmes-postgrad-accent",
    visiting: "bg-programmes-visiting-accent",
  };
  return (
    <div className={clsx(className)}>
      <H1 className="mb-[20px]" tipIn>
        Design Units
      </H1>
      <div className="border-x border-t border-dotted">
        <div
          className={clsx(
            "grid grid-cols-[100px_1fr] md:grid-cols-[100px_1fr_1fr]",
            colorThemeDict[colorTheme],
          )}
        >
          <Mono className="block flex justify-center border-r border-dotted p-[15px]">
            Unit
          </Mono>
          <Mono className="block flex justify-center border-dotted p-[15px] md:border-r">
            Title
          </Mono>
          <Mono className="block hidden justify-center p-[15px] md:flex">
            Tutors
          </Mono>
        </div>
        {units.map((unit, index) => (
          <div className="mb-[-1px] grid grid-cols-[100px_1fr] sm:min-h-[86px] md:grid-cols-[100px_1fr_1fr]">
            <Body className="block flex justify-center border-y border-r border-dotted p-[15px]">
              {`${index}`}
            </Body>
            <Body className="block flex items-start border-y border-dotted p-[15px] md:border-r">
              <img
                src={unit.thumbnailImgSrc}
                className="mr-[20px] hidden h-[67px] w-[67px] object-cover object-center sm:block"
              />
              {unit.title}
            </Body>
            <Body className="hidden border-y border-dotted p-[15px] md:block">
              {unit.tutors}
            </Body>
          </div>
        ))}
      </div>
    </div>
  );
};
