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
};

export const DTAPracticesPageContent = ({
  practices,
  pagination,
}: DTAPracticesPageContentProps) => {
  return (
    <div className={cn("700:gap-30 flex flex-col gap-20 p-24")}>
      <h1>Practices</h1>
      <DTAContentSingleCol>
        Brief sentence describing what practices means in the context of DTA.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </DTAContentSingleCol>
      <span className="mono mt-[10px]">All {pagination.total} records</span>
      <DTAPracticesTable>
        {practices.map((practice) => (
          <DTAPracticesTableRow key={practice.documentId} practice={practice} />
        ))}
      </DTAPracticesTable>
    </div>
  );
};
