"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";
import { cn } from "@/lib/cn";
import { routes } from "@/lib/routes";
import { Schema } from "@/lib/schemas";
import { composeUrl } from "@/lib/urlUtils";

type DTAPeopleGridProps = {
  className?: string;
  children: React.ReactNode;
};

export const DTAInstitutionsGrid = ({
  className,
  children,
}: DTAPeopleGridProps) => {
  return (
    <div
      className={cn(
        "grid grid-cols-2 gap-x-5 gap-y-8 1024:grid-cols-3 1024:gap-x-5 1024:gap-y-10 1280:gap-x-5 1280:gap-y-20",
        className,
      )}
    >
      {children}
    </div>
  );
};

type DTAInstitutionsGridItemProps = {
  institution: Schema<"dtaInstitutionPreview">;
  className?: string;
};

export const DTAInstitutionsGridItem = ({
  institution,
  className,
}: DTAInstitutionsGridItemProps) => {
  const urlSearchParams = useSearchParams();
  const href = composeUrl({
    path: routes.tipin2("dta", "institutions", institution.documentId), // TODO: slug
    params: urlSearchParams,
  });
  return (
    <div className={cn(className)}>
      <Link
        className={cn(
          "relative mb-2 block aspect-[4/3] dta-griditem-bg 1280:mb-3",
        )}
        tabIndex={-1}
        href={href}
        scroll={false}
      >
        {institution.Display && (
          <Image
            src={institution.Display.url}
            sizes="30vw"
            fill
            alt={institution.Display.alternativeText ?? ""}
            className="object-cover"
          />
        )}
      </Link>
      <Link
        href={href}
        className={cn("font-diatype text-18/1.3")}
        scroll={false}
      >
        {institution.Name}
      </Link>
    </div>
  );
};
