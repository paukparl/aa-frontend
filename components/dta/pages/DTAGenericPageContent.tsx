import * as React from "react";
import { H1 } from "@/components/Typography/H1";
import { cn } from "@/lib/cn";
import { Schema } from "@/lib/schemas";

type DTAGenericPageContentProps = {
  page: Schema<"dtaPage">;
};

export const DTAGenericPageContent = ({ page }: DTAGenericPageContentProps) => {
  return (
    <div className={cn("flex flex-col gap-20 p-24 sm:gap-30")}>
      <H1 tipIn>{page.pageTitle}</H1>
    </div>
  );
};
