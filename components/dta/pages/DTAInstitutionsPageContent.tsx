"use client";

import React from "react";
import {
  DTAInstitutionsGrid,
  DTAInstitutionsGridItem,
} from "@/components/dta/components/DTAInstitutionsGrid";
import { DTAContentSingleCol } from "@/components/dta/layouts/DTAContentSingleCol";
import { cn } from "@/lib/cn";
import { Schema } from "@/lib/schemas";

type DTAInstitutionsPageContentProps = {
  institutions: Schema<"dtaInstitutionPreview">[];
  pagination: Schema<"pagination">;
};

export const DTAInstitutionsPageContent = ({
  institutions,
  pagination: _,
}: DTAInstitutionsPageContentProps) => {
  return (
    <div className={cn("700:gap-30 flex flex-col gap-20 p-24")}>
      <h1>Institutions</h1>
      <DTAContentSingleCol>
        Brief sentence describing what institutions means in the context of DTA.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </DTAContentSingleCol>
      <span className="mono mt-[10px]">All 570 records</span>
      <DTAInstitutionsGrid>
        {institutions.map((institution) => (
          <DTAInstitutionsGridItem
            key={institution.documentId}
            institution={institution}
          />
        ))}
      </DTAInstitutionsGrid>
    </div>
  );
};
