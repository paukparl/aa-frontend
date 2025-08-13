import * as React from "react";
import { getDTAMap } from "@/api/getDTAMap";
import { getDTASnippet } from "@/api/getDTASnippet";
import ViewTransitionGroundPage from "@/components/ViewTransitionGroundPage";
import { DTAMapFooter } from "@/components/dta/components/DTAMapFooter";
import { DTAMapNav } from "@/components/dta/components/DTAMapNav";
import { DTAMap } from "@/components/dta/components/Map/DTAMap";
import { DTAContentSingleCol } from "@/components/dta/layouts/DTAContentSingleCol";

export async function DTAMapPage() {
  const [snippets, map] = await Promise.all([getDTASnippet(), getDTAMap()]);
  const description = snippets?.dtaHomepageDescription;

  return (
    <ViewTransitionGroundPage panel="public" microsite="dta">
      <DTAMapNav className="px-10 700:mb-30 700:px-30" />
      <div className="p-10 700:p-30">
        <DTAMap map={map ?? undefined} />
      </div>
      {description && (
        <DTAContentSingleCol className="p-(--padding)">
          {description}
        </DTAContentSingleCol>
      )}
      <DTAMapFooter />
    </ViewTransitionGroundPage>
  );
}
