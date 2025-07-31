"use client";

import React from "react";
import {
  DTAPracticesTable,
  DTAPracticesTableRow,
} from "@/components/dta/components/DTAPracticesTable";
import { DTAContentSingleCol } from "@/components/dta/layouts/DTAContentSingleCol";
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
    <div className={cn("700:gap-30 flex flex-col gap-20 p-24")}>
      <h1>Practices</h1>
      {description && <DTAContentSingleCol>{description}</DTAContentSingleCol>}
      <span className="mono mt-[10px]">All {pagination.total} records</span>
      <DTAPracticesTable>
        {practices.map((practice) => (
          <DTAPracticesTableRow key={practice.documentId} practice={practice} />
        ))}
      </DTAPracticesTable>
    </div>
  );
};
