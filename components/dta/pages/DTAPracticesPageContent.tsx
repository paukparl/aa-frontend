"use client";

import React from "react";
import { H1 } from "@/components/Typography/H1";
import { Mono } from "@/components/Typography/Mono";
import {
  DTAPeopleTableRow,
  DTAPracticesTable,
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
    <div className={cn("flex flex-col gap-20 p-24 sm:gap-30")}>
      <H1>Practices</H1>
      <DTAContentSingleCol>
        Brief sentence describing what practices means in the context of DTA.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </DTAContentSingleCol>
      <Mono className="mt-[10px]">All {pagination.total} records</Mono>
      <DTAPracticesTable>
        {practices.map((practice) => (
          <DTAPeopleTableRow key={practice.documentId} practice={practice} />
        ))}
      </DTAPracticesTable>
    </div>
  );
};
