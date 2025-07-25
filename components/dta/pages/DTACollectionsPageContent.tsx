"use client";

import React from "react";
import { H1 } from "@/components/Typography/H1";
import { Mono } from "@/components/Typography/Mono";
import {
  DTAObjectsGrid,
  DTAObjectsGridItem,
} from "@/components/dta/components/DTAObjectsGrid";
import { DTAContentSingleCol } from "@/components/dta/layouts/DTAContentSingleCol";
import { Schema } from "@/lib/schemas";

type DTACollectionsPageContentProps = {
  objects: Schema<"dtaObjectPreview">[];
  pagination: Schema<"pagination">;
};

export const DTACollectionsPageContent = ({
  objects,
  pagination: _,
}: DTACollectionsPageContentProps) => {
  return (
    <div className="flex flex-col gap-[20px] p-24 sm:gap-[30px]">
      <H1>Collections</H1>
      <DTAContentSingleCol>
        Brief sentence describing what collections means in the context of DTA.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </DTAContentSingleCol>
      <Mono className="mt-[10px]">All 570 records</Mono>
      <DTAObjectsGrid>
        {objects.map((object) => (
          <DTAObjectsGridItem key={object.documentId} object={object} />
        ))}
      </DTAObjectsGrid>
    </div>
  );
};
