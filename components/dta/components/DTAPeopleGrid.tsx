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
        "grid w-full grid-cols-2 gap-(--padding) 700:grid-cols-3 1024:grid-cols-4 1280:grid-cols-5 xl:grid-cols-6",
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
    <Link
      className={cn(className, "group block")}
      tabIndex={-1}
      href={href}
      scroll={false}
    >
      <div className="relative mb-5 block aspect-[4/5] dta-griditem-bg 700:mb-10">
        {person.headshot && (
          <Image
            src={person.headshot.url}
            fill
            sizes="fill"
            alt={person.headshot.alternativeText ?? ""}
            className="object-cover"
          />
        )}
      </div>
      <div className="mono transition-all group-hover:opacity-70">
        {person.firstName} {person.lastName}
        {person.displayStudyYear && (
          <div className="mt-10">{person.displayStudyYear}</div>
        )}
      </div>
    </Link>
  );
};
