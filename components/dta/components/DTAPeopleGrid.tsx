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
  const href = routes.tipin2("dta", "people", person.documentId); // TODO: slug
  return (
    <div className={cn(className)}>
      <Link
        className={cn(
          "dta-griditem-bg 1280:mb-3 relative mb-2 block aspect-[4/5]",
        )}
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
      <Link
        href={href}
        className={cn("font-diatype text-18/1.3")}
        scroll={false}
      >
        {person.firstName} {person.lastName}
        {person.displayStudyYear && (
          <>
            <br />
            {person.displayStudyYear}
          </>
        )}
      </Link>
    </div>
  );
};
