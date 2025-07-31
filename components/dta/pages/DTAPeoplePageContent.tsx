"use client";

import React from "react";
import {
  DTAPeopleGrid,
  DTAPeopleGridItem,
} from "@/components/dta/components/DTAPeopleGrid";
import { DTAContentSingleCol } from "@/components/dta/layouts/DTAContentSingleCol";
import { cn } from "@/lib/cn";
import { Schema } from "@/lib/schemas";

type DTAPeoplePageContentProps = {
  people: Schema<"dtaPersonPreview">[];
  pagination: Schema<"pagination">;
  description?: Schema<"dtaSnippets">["peopleLandingDescription"];
};

export const DTAPeoplePageContent = ({
  people,
  pagination: _,
  description,
}: DTAPeoplePageContentProps) => {
  return (
    <div
      className={cn(
        "text-dta-people-foreground 700:gap-[30px] flex flex-col gap-[20px] p-24",
      )}
    >
      <h1>People</h1>
      {description && <DTAContentSingleCol>{description}</DTAContentSingleCol>}
      <span className="mono mt-[10px]">All 570 records</span>
      <DTAPeopleGrid>
        {people.map((person) => (
          <DTAPeopleGridItem key={person.documentId} person={person} />
        ))}
      </DTAPeopleGrid>
    </div>
  );
};
