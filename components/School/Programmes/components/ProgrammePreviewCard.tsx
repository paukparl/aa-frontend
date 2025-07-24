import clsx from "clsx";
import Link from "next/link";
import * as React from "react";
import { Body } from "@/components/Typography/Body";
import { H1 } from "@/components/Typography/H1";
import { Mono } from "@/components/Typography/Mono";

type ProgrammePreviewCardProps = {
  className?: string;
  title: string;
  uid: string;
  description: string;
  degreeType: string | null;
  duration: string;
  durationFrac: number; // must be between 0 and 1
  fullTime: boolean; // displays solid vs dotted line
  durationStart: boolean; // true if the duration starts at the beginning of study, shows duraiton bar at beginning or end
};

export const ProgrammePreviewCard = ({
  className,
  title,
  uid,
  description,
  degreeType,
  duration,
  durationFrac,
  fullTime,
  durationStart,
}: ProgrammePreviewCardProps) => {
  const durationBarW = `${durationFrac * 100}%`;
  return (
    <div className={clsx(className, "pb-[50px] md:pr-[30px]")}>
      <H1 className="block md:h-[90px]">{title}</H1>
      <div className="mt-[10px] border border-dotted sm:mt-[20px]">
        {degreeType && (
          <Mono className="block border-b border-dotted p-[15px] sm:min-h-[87px]">
            {degreeType}
          </Mono>
        )}
        <div className="p-[15px]">
          <Mono className="block md:min-h-[90px]">{duration}</Mono>
          <div className="bg-school-tint mt-[10px] h-[10px] w-[100%]">
            <div
              style={{ width: durationBarW }}
              className={clsx(
                !durationStart && "float-end",
                fullTime ? "bg-black" : "bg-dotted-line",
                "h-[10px]",
              )}
            ></div>
          </div>
        </div>
      </div>
      <Body className="mt-[15px] line-clamp-10 whitespace-pre-line">
        {description}
      </Body>
    </div>
  );
};
0;
