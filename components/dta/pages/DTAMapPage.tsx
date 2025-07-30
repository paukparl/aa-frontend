import * as React from "react";
import ViewTransitionGroundPage from "@/components/ViewTransitionGroundPage";
import { DTAMapFooter } from "@/components/dta/components/DTAMapFooter";
import { DTAMapNav } from "@/components/dta/components/DTAMapNav";
import { DTAMapComponent } from "@/components/dta/components/Map/DTAMapComponent";
import { DTAContentSingleCol } from "@/components/dta/layouts/DTAContentSingleCol";

export async function DTAMapPage() {
  return (
    <ViewTransitionGroundPage panel="public" microsite="dta">
      <DTAMapNav className="700:px-30 700:mb-30 px-10" />
      <DTAMapComponent className="700:p-30 p-10" />
      <DTAContentSingleCol className="700:p-30 p-10">
        The Department of Tropical Architecture Archive provides an online
        digital platform to make the work held by the Architectural Association
        (AA) Archive and the dispersed work of the graduates of the Department
        of Tropical Architecture (DTA) available to the next generation of
        researchers eager to examine the network of global relationships and
        challenge the orthodoxy of the DTA program.
      </DTAContentSingleCol>
      <DTAMapFooter />
    </ViewTransitionGroundPage>
  );
}
