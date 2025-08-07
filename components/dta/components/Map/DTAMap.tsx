import React from "react";
import { Map } from "@/components/dta/components/Map";
// import { DTATooltip } from "@/components/dta/components/Map/DTATooltip";
import { cn } from "@/lib/cn";

type DTAMapProps = {
  className?: string;
};

export const DTAMapComponent = ({ className }: DTAMapProps) => {
  return (
    <div className={cn("relative aspect-2/1", className)}>
      {/* <img
        src="/storybook/dta/components/Map/perspective-grid.svg"
        className="w-[100%]"
      />
      <img
        src="/storybook/dta/components/Map/map-placeholder.svg"
        className="absolute top-0 left-0 w-[100%]"
      /> */}
      <Map
        className={cn("absolute top-0 left-0 size-full")}
        gridStroke="var(--color-dta-map-grid)"
        landFill="var(--color-dta-map-land)"
      />
      <div className="absolute top-[50%] left-[50%] translate-[-50%] text-center font-times text-[5vw] leading-[.9] text-white">
        Department of
        <br />
        Tropical Architecture
        <br />
        Archive
      </div>
      {/* <div className="absolute top-[30%] left-[70%]">
        <DTATooltip />
      </div> */}
    </div>
  );
};
