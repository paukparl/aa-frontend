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
        "1024:grid-cols-3 1024:gap-y-10 1280:gap-y-20 grid grid-cols-2 gap-x-(--padding) gap-y-8",
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
          "dta-griditem-bg 700:mb-10 relative mb-5 block aspect-[4/3]",
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
      <Link href={href} className="mono" scroll={false}>
        {institution.Name}
      </Link>
    </div>
  );
};
