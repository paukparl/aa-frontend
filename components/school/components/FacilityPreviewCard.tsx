"use client";

import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import DashedMonoButton from "@/components/buttons/DashedMonoButton";
import { cn } from "@/lib/cn";
import { routes } from "@/lib/routes";
import { Schema } from "@/lib/schemas";

export const FacilityPreviewCard = ({
  facility,
  className,
}: {
  facility: Schema<"schoolFacilityPreview">;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-2 gap-(--padding) bg-school-tint p-(--padding)",
        className,
      )}
    >
      <div className={cn("flex aspect-square flex-col items-start")}>
        <h3 className={cn("title-24 700:title-36")}>{facility.name}</h3>
        <DashedMonoButton className={cn("mt-auto")} asChild>
          <Link
            href={routes.tipin1("school-facilities", facility.slug ?? "-")}
            scroll={false}
          >
            Learn More
          </Link>
        </DashedMonoButton>
      </div>
      {facility.representativeImage && (
        <div className={cn("relative aspect-square")}>
          <Image
            src={facility.representativeImage.url}
            alt={facility.representativeImage.alternativeText ?? ""}
            fill
            sizes="100vw, (min-width: 700px) 50vw"
            className={cn("object-cover")}
          />
        </div>
      )}
    </div>
  );
};
