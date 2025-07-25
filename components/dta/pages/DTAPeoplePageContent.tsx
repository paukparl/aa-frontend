"use client";

import React from "react";
import { H1 } from "@/components/Typography/H1";
import { Mono } from "@/components/Typography/Mono";
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
};

export const DTAPeoplePageContent = ({
  people,
  pagination: _,
}: DTAPeoplePageContentProps) => {
  return (
    <div
      className={cn(
        "text-dta-people-foreground flex flex-col gap-[20px] p-24 sm:gap-[30px]",
      )}
    >
      <H1>People</H1>
      <DTAContentSingleCol>
        Brief sentence describing what people means in the context of DTA. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua.
      </DTAContentSingleCol>
      <Mono className="mt-[10px]">All 570 records</Mono>
      <DTAPeopleGrid>
        {people.map((person) => (
          <DTAPeopleGridItem key={person.documentId} person={person} />
        ))}
      </DTAPeopleGrid>
    </div>
  );
};
