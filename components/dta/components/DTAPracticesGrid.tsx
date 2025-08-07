import Link from "next/link";
import React from "react";
import { cn } from "@/lib/cn";
import { routes } from "@/lib/routes";
import { Schema } from "@/lib/schemas";

type DTAPracticesGridProps = {
  className?: string;
  children: React.ReactNode;
};

export const DTAPracticesGrid = ({
  className,
  children,
}: DTAPracticesGridProps) => {
  return (
    <div
      className={cn(
        "grid grid-cols-2 gap-x-5 gap-y-8 1024:grid-cols-3 1024:gap-x-5 1024:gap-y-10 1280:gap-x-5 1280:gap-y-20",
        className,
      )}
    >
      {children}
    </div>
  );
};

type DTAPracticesGridItemProps = {
  practice: Schema<"dtaPracticePreview">;
  className?: string;
};

export const DTAPracticesGridItem = ({
  practice,
  className,
}: DTAPracticesGridItemProps) => {
  const href = routes.tipin2("dta", "practices", practice.documentId); // TODO: slug
  return (
    <Link
      className={cn(
        "block aspect-2/1 border border-dashed px-15 py-11 text-18 1024:px-20 1024:py-12",
        className,
      )}
      href={href}
      scroll={false}
    >
      <div>{practice.name}</div>
      <div>{practice.dta_location_news[0]?.country}</div>
    </Link>
  );
};
