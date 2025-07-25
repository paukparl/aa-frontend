import * as React from "react";
import { Body } from "@/components/Typography/Body";
import { H1 } from "@/components/Typography/H1";
import { Schema } from "@/lib/schemas";

type DTAPracticeProps = {
  practice: Schema<"dtaPracticeDetail">;
};

export const DTAPracticePageContent = ({ practice }: DTAPracticeProps) => {
  return (
    <div className="flex flex-col gap-20 p-24 sm:gap-30">
      <H1 tipIn>{practice.name}</H1>
      {practice.description && <Body>{practice.description}</Body>}
    </div>
  );
};
