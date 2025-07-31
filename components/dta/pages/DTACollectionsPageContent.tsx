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
  description?: Schema<"dtaSnippets">["collectionsLandingDescription"];
};

export const DTACollectionsPageContent = ({
  objects,
  pagination: _,
  description,
}: DTACollectionsPageContentProps) => {
  return (
    <div className="700:gap-[30px] flex flex-col gap-[20px] p-24">
      <h1>Collections</h1>
      {description && <DTAContentSingleCol>{description}</DTAContentSingleCol>}
      <span className="mono mt-[10px]">All 570 records</span>
      <DTAObjectsGrid>
        {objects.map((object) => (
          <DTAObjectsGridItem key={object.documentId} object={object} />
        ))}
      </DTAObjectsGrid>
    </div>
  );
};
