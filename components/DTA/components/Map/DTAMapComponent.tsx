import clsx from "clsx";
import React from "react";
import { DTATooltip } from "@/components/DTA/components/Map/DTATooltip";

type DTAMapProps = {
  className?: string;
};

export const DTAMapComponent = ({ className }: DTAMapProps) => {
  return (
    <div className={clsx(className)}>
      this is the DTA map component
      <DTATooltip />
    </div>
  );
};
