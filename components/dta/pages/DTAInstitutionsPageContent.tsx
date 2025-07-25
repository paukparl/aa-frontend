"use client";

import React from "react";
import { H1 } from "@/components/Typography/H1";
import { Mono } from "@/components/Typography/Mono";
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
    <div className={cn("flex flex-col gap-20 p-24 sm:gap-30")}>
      <H1>Institutions</H1>
      <DTAContentSingleCol>
        Brief sentence describing what institutions means in the context of DTA.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </DTAContentSingleCol>
      <Mono className="mt-[10px]">All 570 records</Mono>
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
