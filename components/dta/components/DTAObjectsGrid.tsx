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
      className={cn(
        "grid w-full grid-cols-2 gap-(--padding) 700:grid-cols-3 1024:grid-cols-4 1280:grid-cols-5 1500:grid-cols-6",
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
    <Link
      className={cn(className, "group block")}
      tabIndex={-1}
      href={href}
      scroll={false}
    >
      <div className="relative mb-5 block aspect-[4/5] dta-griditem-bg 700:mb-10">
        {object.image?.[0] && (
          <Image
            src={object.image[0].url}
            fill
            alt={object.image[0].alternativeText ?? ""}
            className="object-cover"
          />
        )}
      </div>
      <div className="mono transition-all group-hover:opacity-70">
        {object.title}
      </div>
    </Link>
  );
};
