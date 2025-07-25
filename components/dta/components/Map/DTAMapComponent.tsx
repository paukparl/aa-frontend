import clsx from "clsx";
import React from "react";
import { DTATooltip } from "@/components/dta/components/Map/DTATooltip";

type DTAMapProps = {
  className?: string;
};

export const DTAMapComponent = ({ className }: DTAMapProps) => {
  return (
    <div className={(clsx(className), "relative leading-[0]")}>
      <img
        src="/storybook/dta/components/Map/perspective-grid.svg"
        className="w-[100%]"
      />
      <img
        src="/storybook/dta/components/Map/map-placeholder.svg"
        className="absolute top-0 left-0 w-[100%]"
      />
      <div className="font-weight-800 font-times absolute top-[50%] left-[50%] translate-[-50%] text-center text-[5vw] leading-[.9] text-white">
        Department of
        <br />
        Tropical Architecture
        <br />
        Archive
      </div>
      <div className="absolute top-[30%] left-[70%]">
        <DTATooltip />
      </div>
    </div>
  );
};
