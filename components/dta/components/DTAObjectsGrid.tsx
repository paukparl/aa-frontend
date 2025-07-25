import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { cn } from "@/lib/cn";
import { routes } from "@/lib/routes";
import { Schema } from "@/lib/schemas";

type DTAObjectsGridProps = {
  className?: string;
  children: React.ReactNode;
};

export const DTAObjectsGrid = ({
  className,
  children,
}: DTAObjectsGridProps) => {
  return (
    <div
      className={clsx(
        "grid w-full grid-cols-2 gap-x-5 gap-y-[35px] sm:grid-cols-3 md:grid-cols-4 md:gap-x-5 md:gap-y-10 lg:grid-cols-5 lg:gap-x-5 lg:gap-y-20 xl:grid-cols-6",
        className,
      )}
    >
      {children}
    </div>
  );
};

type DTAObjectsGridItemProps = {
  object: Schema<"dtaObjectPreview">;
  className?: string;
};

export const DTAObjectsGridItem = ({
  object,
  className,
}: DTAObjectsGridItemProps) => {
  const href = routes.tipin2("dta", "collections", object.documentId); // TODO: slug
  return (
    <div className={cn(className)}>
      <Link
        className={cn(
          "dta-griditem-bg relative mb-2 block aspect-[4/5] lg:mb-3",
        )}
        tabIndex={-1}
        href={href}
        scroll={false}
      >
        {object.image[0] && (
          <Image
            src={object.image[0].url}
            fill
            alt={object.image[0].alternativeText ?? ""}
            className="object-cover"
          />
        )}
      </Link>
      <Link
        href={href}
        className={cn("font-diatype text-18/1.3")}
        scroll={false}
      >
        {object.title}
      </Link>
    </div>
  );
};
