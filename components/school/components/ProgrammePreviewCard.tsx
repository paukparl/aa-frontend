import Link from "next/link";
import * as React from "react";
import { ButtonViewMore } from "@/components/globals/ButtonDefault";
import { cn } from "@/lib/cn";
import { routes } from "@/lib/routes";
import { Schema } from "@/lib/schemas";

type ProgrammePreviewCardProps = {
  className?: string;
  programmeTitle: string | null;
  description: string;
  documentId: string;
  applyLink: string | null;
  degreeAwarded: string | null;
  durationText: string | null;
  durationValue: number | null;
  fullTime: boolean; // displays solid vs dotted line
  rightAlign: boolean | null; // true if the duration starts at the beginning of study, shows duraiton bar at beginning or end
  slug: string | null;
};

// You could do this ↓↓
type _ProgrammePreviewCardProps = {
  programme: Schema<"schoolProgrammePreview">;
};

export const ProgrammePreviewCard = ({
  className,
  programmeTitle,
  description,
  degreeAwarded,
  durationText,
  durationValue,
  fullTime,
  rightAlign,
  documentId: _,
  applyLink,
  slug,
}: ProgrammePreviewCardProps) => {
  const durationBarW = `${durationValue}%`;
  if (!slug) return null;
  return (
    <div className={cn(className, "pb-[50px]")}>
      <h1 className="flex items-end md:h-[90px]">{programmeTitle}</h1>
      <Link
        scroll={false}
        href={routes.tipin1("school-programmes", slug)}
        className="group mt-[10px] block border border-dotted transition-all hover:border-solid hover:bg-school-tint sm:mt-[20px]"
      >
        {degreeAwarded && (
          <div className="border-b border-dotted p-[15px] mono transition-all group-hover:border-solid sm:min-h-[87px]">
            {degreeAwarded}
          </div>
        )}
        <div className="p-[15px]">
          <div className="mono md:min-h-[90px]">{durationText}</div>
          <div className="mt-[10px] h-[10px] w-[100%] bg-school-tint transition-all group-hover:bg-white">
            <div
              style={{ width: durationBarW }}
              className={cn(
                rightAlign && "float-end",
                fullTime ? "bg-black" : "bg-dotted-line",
                "h-[10px]",
              )}
            ></div>
          </div>
        </div>
      </Link>
      <div className="mt-[15px] line-clamp-10 body whitespace-pre-line">
        {description}
      </div>
      <div className="mt-(--padding) flex gap-10">
        <ButtonViewMore
          className="hover:bg-school-tint"
          href={routes.tipin1("school-programmes", slug)}
        >
          Learn More
        </ButtonViewMore>
        {/* TODO: This doesn't seem right. Maybe the button shouldn't appear when applyLink is null. Also relative urls are safer with a leading slash */}
        <ButtonViewMore
          className="hover:bg-school-tint"
          href={
            applyLink ? `school-programmes/${applyLink}` : "school-programmes/"
          }
        >
          How to Apply
        </ButtonViewMore>
      </div>
    </div>
  );
};
