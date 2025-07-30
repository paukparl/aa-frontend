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
        "700:grid-cols-3 1024:grid-cols-4 1024:gap-x-5 1024:gap-y-10 1280:grid-cols-5 1280:gap-x-5 1280:gap-y-20 1500:grid-cols-6 grid w-full grid-cols-2 gap-x-5 gap-y-[35px]",
        className,
      )}
    >
      {children}
    </div>
  );
};

type DTAPersonGridItemProps = {
  person: Schema<"dtaPersonPreview">;
  className?: string;
};

export const DTAPersonGridItem = ({
  person,
  className,
}: DTAPersonGridItemProps) => {
  const href = routes.tipin2("dta", "people", person.documentId); // TODO: slug
  return (
    <Link
      className={cn(
        className,
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
      <div className={cn("font-diatype text-18/1.3")}>
        {person.firstName} {person.lastName}
        {person.displayStudyYear && (
          <>
            <br />
            {person.displayStudyYear}
          </>
        )}
      </div>
    </Link>
  );
};
