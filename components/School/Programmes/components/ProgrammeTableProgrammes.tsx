import clsx from "clsx";
import * as React from "react";
import { Body } from "@/components/Typography/Body";
import { H1 } from "@/components/Typography/H1";
import { Mono } from "@/components/Typography/Mono";

type ProgrammeColorTheme = "intermediate" | "diploma" | "postgrad" | "visiting";
type ProgrammeUnit = { title: string; degree: string };
type ProgrammeTableProgrammesProps = {
  className?: string;
  colorTheme: ProgrammeColorTheme;
  programmes: ProgrammeUnit[];
};

export const ProgrammeTableProgrammes = ({
  className,
  colorTheme,
  programmes,
}: ProgrammeTableProgrammesProps) => {
  const colorThemeDict = {
    intermediate: "bg-programmes-intermediate-accent",
    diploma: "bg-programmes-diploma-accent",
    postgrad: "bg-programmes-postgrad-accent",
    visiting: "bg-programmes-visiting-accent",
  };
  return (
    <div className={clsx(className)}>
      <H1 className="mb-[20px]" tipIn>
        Programmes
      </H1>
      <div className="border-x border-t border-dotted">
        <div
          className={clsx(
            "grid grid-cols-[2fr_1fr] md:grid-cols-[3fr_1fr]",
            colorThemeDict[colorTheme],
          )}
        >
          <Mono className="block flex justify-center border-r border-dotted p-[15px]">
            Programme
          </Mono>
          <Mono className="block flex justify-center border-dotted p-[15px] md:border-r">
            Degree
          </Mono>
        </div>
        {programmes.map((programme, index) => (
          <div className="mb-[-1px] grid grid-cols-[2fr_1fr] md:grid-cols-[3fr_1fr]">
            <Body className="block border-y border-dotted p-[15px] md:border-r">
              {programme.title}
            </Body>
            <Body className="block border-y border-dotted p-[15px]">
              {programme.degree}
            </Body>
          </div>
        ))}
      </div>
    </div>
  );
};
