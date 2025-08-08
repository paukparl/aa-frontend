import clsx from "clsx";
import * as React from "react";

type ProgrammePreviewCardProps = {
  className?: string;
  programmeTitle: string;
  description: string;
  degreeAwarded: string | null;
  durationText: string;
  durationFrac: number; // must be between 0 and 1
  fullTime: boolean; // displays solid vs dotted line
  durationStart: boolean; // true if the duration starts at the beginning of study, shows duraiton bar at beginning or end
};

export const ProgrammePreviewCard = ({
  className,
  programmeTitle,
  description,
  degreeAwarded,
  durationText,
  durationFrac,
  fullTime,
  durationStart,
}: ProgrammePreviewCardProps) => {
  const durationBarW = `${durationFrac * 100}%`;
  return (
    <div className={clsx(className, "pb-[50px] md:pr-[30px]")}>
      <h1 className="flex w-[90%] items-end md:h-[90px]">{programmeTitle}</h1>
      <div className="mt-[10px] border border-dotted sm:mt-[20px]">
        {degreeAwarded && (
          <div className="border-b border-dotted p-[15px] mono sm:min-h-[87px]">
            {degreeAwarded}
          </div>
        )}
        <div className="p-[15px]">
          <div className="mono md:min-h-[90px]">{durationText}</div>
          <div className="mt-[10px] h-[10px] w-[100%] bg-school-tint">
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
      <div className="mt-[15px] line-clamp-10 body whitespace-pre-line">
        {description}
      </div>
    </div>
  );
};
