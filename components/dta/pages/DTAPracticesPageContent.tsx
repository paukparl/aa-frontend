"use client";

import React from "react";
import {
  DTAPracticesTable,
  DTAPracticesTableRow,
} from "@/components/dta/components/DTAPracticesTable";
import { DTAContentSingleCol } from "@/components/dta/layouts/DTAContentSingleCol";
import { Pagination } from "@/components/globals/components/Pagination";
import { cn } from "@/lib/cn";
import { Schema } from "@/lib/schemas";

type DTAPracticesPageContentProps = {
  practices: Schema<"dtaPracticePreview">[];
  pagination: Schema<"pagination">;
  description?: Schema<"dtaSnippets">["practicesLandingDescription"];
};

export const DTAPracticesPageContent = ({
  practices,
  pagination,
  description,
}: DTAPracticesPageContentProps) => {
  return (
    <div className={cn("flex flex-col gap-20 p-24 700:gap-30")}>
      <h1>Practices</h1>
      {description && <DTAContentSingleCol>{description}</DTAContentSingleCol>}
      <span className="mt-[10px] mono">All {pagination.total} records</span>
      <DTAPracticesTable>
        {practices.map((practice) => (
          <DTAPracticesTableRow key={practice.documentId} practice={practice} />
        ))}
      </DTAPracticesTable>
      <Pagination pagination={pagination} searchParamKey="1_page" />
    </div>
  );
};
