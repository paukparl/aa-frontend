"use client";

import React from "react";
import {
  DTAObjectsGrid,
  DTAObjectsGridItem,
} from "@/components/dta/components/DTAObjectsGrid";
import { DTAContentSingleCol } from "@/components/dta/layouts/DTAContentSingleCol";
import { Pagination } from "@/components/globals/components/Pagination";
import { Schema } from "@/lib/schemas";

type DTACollectionsPageContentProps = {
  objects: Schema<"dtaObjectPreview">[];
  pagination: Schema<"pagination">;
  description?: Schema<"dtaSnippets">["collectionsLandingDescription"];
};

export const DTACollectionsPageContent = ({
  objects,
  pagination,
  description,
}: DTACollectionsPageContentProps) => {
  return (
    <div className="flex flex-col gap-[20px] p-24 700:gap-[30px]">
      <h1>Collections</h1>
      {description && <DTAContentSingleCol>{description}</DTAContentSingleCol>}
      <span className="mt-[10px] mono">All 570 records</span>
      <DTAObjectsGrid>
        {objects.map((object) => (
          <DTAObjectsGridItem key={object.documentId} object={object} />
        ))}
      </DTAObjectsGrid>
      <Pagination pagination={pagination} searchParamKey="1_page" />
    </div>
  );
};
