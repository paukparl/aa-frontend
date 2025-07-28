import clsx from "clsx";
import Link from "next/link";
import React from "react";
import { cn } from "@/lib/cn";
import { routes } from "@/lib/routes";
import { Schema } from "@/lib/schemas";

type DTAPracticesTableProps = {
  className?: string;
  children: React.ReactNode;
};

export const DTAPracticesTable = ({
  className,
  children,
}: DTAPracticesTableProps) => {
  return <div className={clsx("w-full", className)}>{children}</div>;
};

type DTAPracticesTableItemProps = {
  practice: Schema<"dtaPracticePreview">;
  className?: string;
};

export const DTAPracticesTableRow = ({
  practice,
  className,
}: DTAPracticesTableItemProps) => {
  const href = routes.tipin2("dta", "practices", practice.documentId); // TODO: slug
  return (
    <div className={cn(className)}>
      <Link
        className={cn("mb-[-1px] grid grid-cols-[75%_25%]")}
        href={href}
        scroll={false}
      >
        <div className="mono border border-dashed px-[15px] py-[11px] md:px-[20px] md:py-[12px]">
          {practice.name}
        </div>
        <div className="mono ml-[-1px] border border-dashed px-[15px] py-[11px] md:px-[20px] md:py-[12px]">
          {practice.dta_locationNew?.country}
        </div>
      </Link>
    </div>
  );
};
