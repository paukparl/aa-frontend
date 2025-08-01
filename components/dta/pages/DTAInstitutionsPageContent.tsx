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
  description?: Schema<"dtaSnippets">["institutionsLandingDescription"];
};

export const DTAInstitutionsPageContent = ({
  institutions,
  pagination: _,
  description,
}: DTAInstitutionsPageContentProps) => {
  return (
    <div className={cn("700:gap-30 flex flex-col gap-20 p-24")}>
      <h1>Institutions</h1>
      {description && <DTAContentSingleCol>{description}</DTAContentSingleCol>}
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
