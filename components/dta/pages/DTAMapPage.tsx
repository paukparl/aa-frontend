import * as React from "react";
import ViewTransitionGroundPage from "@/components/ViewTransitionGroundPage";
import { DTAMapPageContent } from "@/components/dta/pages/DTAMapPageContent";

export async function DTAMapPage() {
  return (
    <ViewTransitionGroundPage panel="public" microsite="dta">
      <DTAMapPageContent />
    </ViewTransitionGroundPage>
  );
}
