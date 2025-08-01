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
      className={cn(className, "block")}
      tabIndex={-1}
      href={href}
      scroll={false}
    >
      <div className="dta-griditem-bg 1280:mb-10 relative mb-5 aspect-[4/5] w-full">
        {person.headshot && (
          <Image
            src={person.headshot.url}
            alt={person.headshot.alternativeText ?? ""}
            fill
            className="object-cover object-center"
          />
        )}
      </div>
      <div className="mono">
        {person.firstName} {person.lastName}
        {person.displayStudyYear && (
          <>
            <br />
            <div className="1280:mt-10 mt-5">{person.displayStudyYear}</div>
          </>
        )}
      </div>
    </Link>
  );
};
