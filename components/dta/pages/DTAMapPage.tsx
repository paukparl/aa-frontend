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
      <DTAMapNav className="700:mb-(--padding) px-(--padding)" />
      <DTAMapComponent className="p-(--padding)" />
      {description && (
        <DTAContentSingleCol className="p-(--padding)">
          {description}
        </DTAContentSingleCol>
      )}
      <DTAMapFooter />
    </ViewTransitionGroundPage>
  );
}
