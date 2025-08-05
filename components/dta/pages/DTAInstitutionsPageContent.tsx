"use client";

import React from "react";
import {
  DTAInstitutionsGrid,
  DTAInstitutionsGridItem,
} from "@/components/dta/components/DTAInstitutionsGrid";
import { DTAContentSingleCol } from "@/components/dta/layouts/DTAContentSingleCol";
import { Pagination } from "@/components/globals/components/Pagination";
import { cn } from "@/lib/cn";
import { Schema } from "@/lib/schemas";

type DTAInstitutionsPageContentProps = {
  institutions: Schema<"dtaInstitutionPreview">[];
  pagination: Schema<"pagination">;
  description?: Schema<"dtaSnippets">["institutionsLandingDescription"];
};

export const DTAInstitutionsPageContent = ({
  institutions,
  pagination,
  description,
}: DTAInstitutionsPageContentProps) => {
  return (
    <div className={cn("flex flex-col gap-20 p-24 700:gap-30")}>
      <h1>Institutions</h1>
      {description && <DTAContentSingleCol>{description}</DTAContentSingleCol>}
      <span className="mt-[10px] mono">All 570 records</span>
      <DTAInstitutionsGrid>
        {institutions.map((institution) => (
          <DTAInstitutionsGridItem
            key={institution.documentId}
            institution={institution}
          />
        ))}
      </DTAInstitutionsGrid>
      <Pagination pagination={pagination} searchParamKey="1_page" />
    </div>
  );
};
