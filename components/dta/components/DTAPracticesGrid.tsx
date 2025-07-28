import clsx from "clsx";
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
      className={clsx(
        "grid grid-cols-2 gap-x-5 gap-y-8 md:grid-cols-3 md:gap-x-5 md:gap-y-10 lg:gap-x-5 lg:gap-y-20",
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
        "text-18 block aspect-2/1 border border-dashed px-15 py-11 md:px-20 md:py-12",
        className,
      )}
      href={href}
      scroll={false}
    >
      <div>{practice.name}</div>
      <div>{practice.dta_locationNew?.country}</div>
    </Link>
  );
};
