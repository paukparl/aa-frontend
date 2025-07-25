import clsx from "clsx";
import * as React from "react";
import { DTAMapFooter } from "@/components/dta/components/DTAMapFooter";
import { DTAMapNav } from "@/components/dta/components/DTAMapNav";
import { DTAMapComponent } from "@/components/dta/components/Map/DTAMapComponent";
import { DTAContentSingleCol } from "@/components/dta/layouts/DTAContentSingleCol";

type DTAMapProps = {
  className?: string;
};

export const PageDTAMap = ({ className }: DTAMapProps) => {
  return (
    <div
      className={clsx(
        className,
        "text-dta-map-foreground bg-dta-map-background min-h-[100vh] w-[100vw]",
      )}
    >
      <DTAMapNav className="p-[10px] sm:p-[30px]" />
      <DTAMapComponent className="p-[10px] sm:p-[30px]" />
      <DTAContentSingleCol className="p-[10px] sm:p-[30px]">
        The Department of Tropical Architecture Archive provides an online
        digital platform to make the work held by the Architectural Association
        (AA) Archive and the dispersed work of the graduates of the Department
        of Tropical Architecture (DTA) available to the next generation of
        researchers eager to examine the network of global relationships and
        challenge the orthodoxy of the DTA program.
      </DTAContentSingleCol>
      <DTAMapFooter />
    </div>
  );
};
