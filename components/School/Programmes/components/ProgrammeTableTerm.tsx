import clsx from "clsx";
import { RadioGroup } from "radix-ui";
import React, { useId, useState } from "react";
import { Body } from "@/components/Typography/Body";
import { Mono } from "@/components/Typography/Mono";

type TableTermColorTheme = "intermediate" | "diploma";
type CourseInfo = {
  title: string;
  termYears: number[];
  core?: boolean;
  lecturers?: string;
  choose?: string;
  credits?: number;
};
type ProgrammeTableTermProps = {
  className?: string;
  colorTheme: TableTermColorTheme;
  units: CourseInfo[];
  type: "credits" | "lecturers";
};

export const ProgrammeTableTerm = ({
  className,
  colorTheme,
  type,
  units,
}: ProgrammeTableTermProps) => {
  const uniqueId = useId();
  const colorThemeDict = {
    intermediate: "bg-programmes-intermediate-accent",
    diploma: "bg-programmes-diploma-accent",
  };
  const filters = Array.from(
    new Set(units.map((unit) => unit.termYears).flat()),
  ).sort((a, b) => a - b);
  const filterDict = [
    "First Year",
    "Second Year",
    "Third Year",
    "Fourth Year",
    "Fifth Year",
  ];
  const [activeFilter, setActiveFilter] = useState(filterDict[filters[0] - 1]);
  return (
    <div className={clsx(className)}>
      <Body className="mb-[20px] block !font-bold">Term by term</Body>
      <RadioGroup.Root
        name={`term-radio-${uniqueId}`}
        className="mb-[20px] flex gap-[20px]"
        defaultValue={activeFilter}
        onValueChange={(value) => setActiveFilter(value)}
      >
        {filters.length > 1 &&
          filters.map((year, index) => (
            <div
              className="flex items-center gap-[10px]"
              key={`${uniqueId}-${index}`}
            >
              <RadioGroup.Item
                id={`termtableradioitem-${filterDict[year - 1]}-${uniqueId}`}
                className="flex size-[18px] cursor-default rounded-full bg-white outline-[1px] outline-black"
                value={filterDict[year - 1]}
              >
                <RadioGroup.Indicator className="relative flex size-full items-center justify-center after:block after:size-[11px] after:rounded-full after:bg-black" />
              </RadioGroup.Item>
              <label
                className="mono cursor-pointer"
                htmlFor={`termtableradioitem-${filterDict[year - 1]}-${uniqueId}`}
              >
                {filterDict[year - 1]}
              </label>
            </div>
          ))}
      </RadioGroup.Root>

      {type === "credits" && (
        <div
          className="border-x border-t border-dotted"
          id={`term-radio-credits-items${uniqueId}`}
        >
          <div
            className={clsx(
              "grid grid-cols-[1fr_80px] md:grid-cols-[2fr_100px_1fr_1fr]",
              colorThemeDict[colorTheme],
            )}
          >
            <Mono className="flex justify-center border-r border-dotted p-[15px]">
              Title
            </Mono>
            <Mono className="flex justify-center border-dotted p-[15px] md:border-r">
              Term
            </Mono>
            <Mono className="hidden justify-center border-dotted p-[15px] md:flex md:border-r">
              Choose
            </Mono>
            <Mono className="hidden justify-center p-[15px] md:flex">
              Credits
            </Mono>
          </div>
          {units.map(
            (unit, index) =>
              unit.termYears.includes(filterDict.indexOf(activeFilter) + 1) && (
                <div
                  key={`${uniqueId}-${index}`}
                  className="mb-[-1px] grid grid-cols-[1fr_80px] md:grid-cols-[2fr_100px_1fr_1fr]"
                >
                  <Body className="flex h-[70px] items-center border-y border-r border-dotted px-[15px] sm:min-h-[86px] md:px-[20px]">
                    <div>
                      {unit.core && (
                        <div className="!text-[12px]">Core Studies</div>
                      )}
                      {unit.title}
                    </div>
                  </Body>
                  <Body className="flex h-[70px] items-center border-y border-r border-dotted px-[15px] sm:min-h-[86px] md:px-[20px]">
                    {unit.termYears.join(", ")}
                  </Body>
                  <Body className="hidden h-[70px] items-center border-y border-r border-dotted px-[15px] sm:min-h-[86px] md:flex md:px-[20px]">
                    {unit.choose}
                  </Body>
                  <Body className="hidden h-[70px] items-center border-y border-r border-dotted px-[15px] sm:min-h-[86px] md:flex md:px-[20px]">
                    {unit.credits}
                  </Body>
                </div>
              ),
          )}
        </div>
      )}

      {type === "lecturers" && (
        <div
          className="border-x border-t border-dotted"
          id={`term-radio-lecturers-items${uniqueId}`}
        >
          <div
            className={clsx(
              "grid grid-cols-[2fr_1fr] md:grid-cols-[3fr_1fr]",
              colorThemeDict[colorTheme],
            )}
          >
            <Mono className="flex justify-center border-r border-dotted p-[15px]">
              Title
            </Mono>
            <Mono className="flex justify-center p-[15px]">Lecturers</Mono>
          </div>
          {units.map(
            (unit, index) =>
              unit.termYears.includes(filterDict.indexOf(activeFilter) + 1) && (
                <div
                  key={`${uniqueId}-${index}`}
                  className="mb-[-1px] grid grid-cols-[2fr_1fr] md:grid-cols-[3fr_1fr]"
                >
                  <Body className="flex h-[70px] items-center border-y border-r border-dotted px-[15px] sm:min-h-[86px] md:px-[20px]">
                    <div>
                      {unit.core && (
                        <div className="!text-[12px]">Core Studies</div>
                      )}
                      {unit.title}
                    </div>
                  </Body>
                  <Body className="flex h-[70px] items-center border-y border-r border-dotted px-[15px] sm:min-h-[86px] md:px-[20px]">
                    {unit.lecturers}
                  </Body>
                </div>
              ),
          )}
        </div>
      )}
    </div>
  );
};
