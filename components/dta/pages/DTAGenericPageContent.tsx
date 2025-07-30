import * as React from "react";
import { cn } from "@/lib/cn";
import { Schema } from "@/lib/schemas";

type DTAGenericPageContentProps = {
  page: Schema<"dtaPage">;
};

export const DTAGenericPageContent = ({ page }: DTAGenericPageContentProps) => {
  return (
    <div className={cn("700:gap-30 flex flex-col gap-20 p-24")}>
      <h1 className="tipin">{page.pageTitle}</h1>
    </div>
  );
};
