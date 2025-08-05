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
        "1024:grid-cols-3 1024:gap-x-5 1024:gap-y-10 1280:gap-x-5 1280:gap-y-20 700:grid-cols-2 grid gap-x-5 gap-y-8",
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
        "mono 1024:px-15 1024:py-15 700:aspect-2/1 block w-full border border-dashed p-15",
        className,
      )}
      href={href}
      scroll={false}
    >
      <div>{practice.name}</div>
      {practice.dta_location_news[0]?.country && (
        <div className="mt-20">{practice.dta_location_news[0]?.country}</div>
      )}
    </Link>
  );
};
