"use client";

import React from "react";
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
    <div className="700:gap-[30px] flex flex-col gap-[20px] p-24">
      <h1>Collections</h1>
      <DTAContentSingleCol>
        Brief sentence describing what collections means in the context of DTA.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </DTAContentSingleCol>
      <span className="mono mt-[10px]">All 570 records</span>
      <DTAObjectsGrid>
        {objects.map((object) => (
          <DTAObjectsGridItem key={object.documentId} object={object} />
        ))}
      </DTAObjectsGrid>
    </div>
  );
};
