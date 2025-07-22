import clsx from "clsx";
import * as React from "react";
import { DTAMapFooter } from "@/components/DTA/components/DTAMapFooter";
import { DTAMapNav } from "@/components/DTA/components/DTAMapNav";
import { DTAMapComponent } from "@/components/DTA/components/Map/DTAMapComponent";
import { DTAContentSingleCol } from "@/components/DTA/layouts/DTAContentSingleCol";
import { H1 } from "@/components/Typography/H1";
import { H2 } from "@/components/Typography/H2";
import { TipinHeader } from "@/components/globals/layouts/TipinHeader";

type DTAMapProps = {
  className?: string;
};

export const DTAMap = ({ className }: DTAMapProps) => {
  return (
    <div
      className={clsx(
        className,
        "text-dta-map-foreground bg-dta-map-background min-h-[100vh] w-[100vw]",
      )}
    >
      <DTAMapNav />
      <DTAMapComponent />
      <DTAContentSingleCol
        className="p-[10px] sm:p-[30px]"
        children="The Department of Tropical Architecture Archive provides an online digital platform to make the work held by the Architectural Association (AA) Archive and the dispersed work of the graduates of the Department of Tropical Architecture (DTA) available to the next generation of researchers eager to examine the network of global relationships and challenge the orthodoxy of the DTA program."
      />
      <DTAMapFooter />
    </div>
  );
};
