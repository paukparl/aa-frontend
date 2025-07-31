import * as React from "react";
import { getDTASnippets } from "@/api/getDTASnippet";
import ViewTransitionGroundPage from "@/components/ViewTransitionGroundPage";
import { DTAMapFooter } from "@/components/dta/components/DTAMapFooter";
import { DTAMapNav } from "@/components/dta/components/DTAMapNav";
import { DTAMapComponent } from "@/components/dta/components/Map/DTAMapComponent";
import { DTAContentSingleCol } from "@/components/dta/layouts/DTAContentSingleCol";

export async function DTAMapPage() {
  const { data: snippets } = await getDTASnippets();
  const description = snippets?.dtaHomepageDescription;

  return (
    <ViewTransitionGroundPage panel="public" microsite="dta">
      <DTAMapNav className="700:px-30 700:mb-30 px-10" />
      <DTAMapComponent className="700:p-30 p-10" />
      {description && (
        <DTAContentSingleCol className="700:p-30 p-10">
          {description}
        </DTAContentSingleCol>
      )}
      <DTAMapFooter />
    </ViewTransitionGroundPage>
  );
}
