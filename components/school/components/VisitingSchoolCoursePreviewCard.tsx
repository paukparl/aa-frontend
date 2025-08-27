"use client";

import Image from "next/image";
import * as React from "react";
import { cn } from "@/lib/cn";
import { Schema } from "@/lib/schemas";
import { formatLocationText } from "@/lib/utils";

export const VisitingSchoolCoursePreviewCard = ({
  course,
  className,
}: {
  course: Schema<"schoolVisitingSchoolCoursePreview">;
  className?: string;
}) => {
  const locationText = formatLocationText(
    course.onlineCourse,
    course.dta_locations,
  );
  return (
    <div
      className={cn(
        "flex flex-col bg-programmes-visiting-accent p-(--padding)",
        className,
      )}
    >
      <h3 className={cn("mb-(--padding) title-24 700:title-36")}>
        {course.title}
      </h3>
      <div className={cn("relative mb-(--padding) aspect-3/2")}>
        {course.representativeImage && (
          <Image
            fill
            src={course.representativeImage.url}
            alt={course.representativeImage.alternativeText ?? ""}
            sizes="100vw, (min-width: 700px) 50vw, (min-width: 1280px) 33vw"
            className={cn("object-cover")}
          />
        )}
      </div>
      <div className={cn("mt-auto mono")}>
        {locationText}
        {locationText && course.dateTextOverride && <br />}
        {course.dateTextOverride}
      </div>
    </div>
  );
};
