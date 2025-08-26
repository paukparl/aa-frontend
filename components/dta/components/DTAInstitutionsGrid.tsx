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
        "grid grid-cols-2 gap-(--padding) 1024:grid-cols-3",
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
  if (!institution.slug) return null;
  const href = composeUrl({
    path: routes.tipin2("dta", "institutions", institution.slug),
    params: urlSearchParams,
  });
  return (
    <Link
      className={cn("group block", className)}
      tabIndex={-1}
      href={href}
      scroll={false}
    >
      <div className="relative mb-5 block aspect-[4/3] dta-griditem-bg 700:mb-10">
        {institution.Display && (
          <Image
            src={institution.Display.url}
            fill
            alt={institution.Display.alternativeText ?? ""}
            className="object-cover"
            sizes="50vw, (min-width: 1024px) 33vw"
          />
        )}
      </div>
      <div className="mono transition-all group-hover:opacity-70">
        {institution.Name}
      </div>
    </Link>
  );
};
