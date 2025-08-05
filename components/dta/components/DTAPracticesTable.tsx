import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";
import { cn } from "@/lib/cn";
import { routes } from "@/lib/routes";
import { Schema } from "@/lib/schemas";
import { composeUrl } from "@/lib/urlUtils";

type DTAPracticesTableProps = {
  className?: string;
  children: React.ReactNode;
};

export const DTAPracticesTable = ({
  className,
  children,
}: DTAPracticesTableProps) => {
  return <div className={cn("w-full", className)}>{children}</div>;
};

type DTAPracticesTableItemProps = {
  practice: Schema<"dtaPracticePreview">;
  className?: string;
};

export const DTAPracticesTableRow = ({
  practice,
  className,
}: DTAPracticesTableItemProps) => {
  const urlSearchParams = useSearchParams();
  const href = composeUrl({
    path: routes.tipin2("dta", "practices", practice.documentId), // TODO: slug
    params: urlSearchParams,
  });
  return (
    <div className={cn(className)}>
      <Link
        className={cn("mb-[-1px] grid grid-cols-[75%_25%]")}
        href={href}
        scroll={false}
      >
        <div className="border border-dashed px-[15px] py-[11px] mono 1024:px-[20px] 1024:py-[12px]">
          {practice.name}
        </div>
        <div className="ml-[-1px] border border-dashed px-[15px] py-[11px] mono 1024:px-[20px] 1024:py-[12px]">
          {practice.dta_locationNew?.country}
        </div>
      </Link>
    </div>
  );
};
