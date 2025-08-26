import Link from "next/link";
import * as React from "react";
import { ButtonViewMore } from "@/components/globals/ButtonDefault";
import { RichText } from "@/components/globals/RichText";
import { cn } from "@/lib/cn";
import { routes } from "@/lib/routes";
import { Schema } from "@/lib/schemas";

type ProgrammePreviewCardProps = {
  className?: string;
  programme: Schema<"schoolProgrammePreview">;
};

export const ProgrammePreviewCard = ({
  className,
  programme,
}: ProgrammePreviewCardProps) => {
  const durationBarW = `${programme.durationValue}%`;
  return (
    <div className={cn("pb-[50px]", className)}>
      <h2 className="flex items-end md:h-[90px]">{programme.programmeTitle}</h2>
      <Link
        scroll={false}
        href={routes.tipin1("school-programmes", programme.slug ?? ``)}
        className="group mt-[10px] block border border-dotted transition-all hover:border-solid hover:bg-school-tint sm:mt-[20px]"
      >
        {programme.degreeAwarded && (
          <div className="border-b border-dotted p-[15px] mono transition-all group-hover:border-solid sm:min-h-[87px]">
            {programme.degreeAwarded}
          </div>
        )}
        <div className="p-[15px]">
          <div className="mono md:min-h-[90px]">{programme.durationText}</div>
          <div className="mt-[10px] h-[10px] w-[100%] bg-school-tint transition-all group-hover:bg-white">
            <div
              style={{ width: durationBarW }}
              className={cn(
                programme.rightAlign && "float-end",
                programme.studyMode === "full-time"
                  ? "bg-black"
                  : "bg-dotted-line",
                "h-[10px]",
              )}
            ></div>
          </div>
        </div>
      </Link>
      {programme.shortDescription && (
        <RichText className="mt-[15px] line-clamp-10 body whitespace-pre-line">
          {programme.shortDescription}
        </RichText>
      )}
      <div className="mt-(--padding) flex gap-10">
        <ButtonViewMore
          className="hover:bg-school-tint"
          href={routes.tipin1("school-programmes", programme.slug)}
        >
          Learn More
        </ButtonViewMore>
        {programme.schoolApply?.slug && (
          <ButtonViewMore
            className="hover:bg-school-tint"
            href={`/school-apply/${programme.schoolApply.slug}`}
          >
            How to Apply
          </ButtonViewMore>
        )}
      </div>
    </div>
  );
};
