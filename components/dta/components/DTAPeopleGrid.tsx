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

export const DTAPeopleGrid = ({ className, children }: DTAPeopleGridProps) => {
  return (
    <div
      className={cn(
        "700:grid-cols-3 1024:grid-cols-4 1024:gap-x-5 1024:gap-y-10 1280:grid-cols-5 1280:gap-x-5 1280:gap-y-20 grid w-full grid-cols-2 gap-x-5 gap-y-[35px] xl:grid-cols-6",
        className,
      )}
    >
      {children}
    </div>
  );
};

type DTAPeopleGridItemProps = {
  person: Schema<"dtaPersonPreview">;
  className?: string;
};

export const DTAPeopleGridItem = ({
  person,
  className,
}: DTAPeopleGridItemProps) => {
  const urlSearchParams = useSearchParams();
  const href = composeUrl({
    path: routes.tipin2("dta", "people", person.documentId), // TODO: slug
    params: urlSearchParams,
  });
  return (
    <div className={cn(className)}>
      <Link
        className="dta-griditem-bg 700:mb-10 relative mb-5 block aspect-[4/5]"
        tabIndex={-1}
        href={href}
        scroll={false}
      >
        {person.headshot && (
          <Image
            src={person.headshot.url}
            fill
            sizes="20vw"
            alt={person.headshot.alternativeText ?? ""}
            className="object-cover"
          />
        )}
      </Link>
      <Link href={href} className="mono" scroll={false}>
        <div>
          {person.firstName} {person.lastName}
        </div>
        {person.displayStudyYear && (
          <div className="mt-10">{person.displayStudyYear}</div>
        )}
      </Link>
    </div>
  );
};
