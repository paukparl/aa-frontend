"use client";

import React from "react";
import {
  DTAPeopleGrid,
  DTAPeopleGridItem,
} from "@/components/dta/components/DTAPeopleGrid";
import { DTAContentSingleCol } from "@/components/dta/layouts/DTAContentSingleCol";
import { Pagination } from "@/components/globals/components/Pagination";
import { cn } from "@/lib/cn";
import { Schema } from "@/lib/schemas";

type DTAPeoplePageContentProps = {
  people: Schema<"dtaPersonPreview">[];
  pagination: Schema<"pagination">;
  description?: Schema<"dtaSnippets">["peopleLandingDescription"];
};

export const DTAPeoplePageContent = ({
  people,
  pagination,
  description,
}: DTAPeoplePageContentProps) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-[20px] p-24 text-dta-people-foreground 700:gap-[30px]",
      )}
    >
      <h1>People</h1>
      {description && <DTAContentSingleCol>{description}</DTAContentSingleCol>}
      <span className="mt-[10px] mono">All 570 records</span>
      <DTAPeopleGrid>
        {people.map((person) => (
          <DTAPeopleGridItem key={person.documentId} person={person} />
        ))}
      </DTAPeopleGrid>
      <Pagination pagination={pagination} searchParamKey="1_page" />
    </div>
  );
};
