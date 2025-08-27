import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import DashedMonoButton from "@/components/buttons/DashedMonoButton";
import { cn } from "@/lib/cn";
import { routes } from "@/lib/routes";
import { Schema } from "@/lib/schemas";

export const ProgrammePreviewCardWithImg = ({
  className,
  programme,
}: {
  className?: string;
  programme: Schema<"schoolProgrammePreview">;
}) => {
  return (
    <div
      className={cn("flex flex-col bg-facilities p-(--padding)", className)}
      style={{
        background: programme.hexValue ?? "#fff",
      }}
    >
      <h3 className={cn("mb-(--padding) h1")}>{programme.programmeTitle}</h3>
      <div className={cn("relative mb-(--padding) aspect-4/3")}>
        {programme.representativeImage && (
          <Image
            src={programme.representativeImage.url}
            alt={programme.representativeImage.alternativeText ?? ""}
            className={cn("object-cover")}
            sizes="100vw, (min-width: 700px) 75vw, (min-width: 1024px) 60vw, (min-width: 1280px) 40vw"
            fill
          />
        )}
      </div>
      <div className={cn("mt-auto")}>
        <DashedMonoButton asChild>
          <Link href={routes.tipin1("school-programmes", programme.slug)}>
            Read more
          </Link>
        </DashedMonoButton>
      </div>
    </div>
  );
};
