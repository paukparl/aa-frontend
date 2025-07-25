import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { cn } from "@/lib/cn";
import { routes } from "@/lib/routes";
import { Schema } from "@/lib/schemas";

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
      className={clsx(
        "grid grid-cols-2 gap-x-5 gap-y-8 md:grid-cols-3 md:gap-x-5 md:gap-y-10 lg:gap-x-5 lg:gap-y-20",
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
  const href = routes.tipin2("dta", "institutions", institution.documentId); // TODO: slug
  return (
    <div className={cn(className)}>
      <Link
        className={cn(
          "dta-griditem-bg relative mb-2 block aspect-[4/3] lg:mb-3",
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
