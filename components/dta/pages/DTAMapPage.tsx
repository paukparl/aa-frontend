import * as React from "react";
import { getDTAMap } from "@/api/getDTAMap";
import { getDTASnippets } from "@/api/getDTASnippet";
import { tempGetDTAEvents } from "@/api/tempGetDTAEvents";
import ViewTransitionGroundPage from "@/components/ViewTransitionGroundPage";
import { DTAMapFooter } from "@/components/dta/components/DTAMapFooter";
import { DTAMapNav } from "@/components/dta/components/DTAMapNav";
import { DTAMap } from "@/components/dta/components/Map/DTAMap";
import { DTAContentSingleCol } from "@/components/dta/layouts/DTAContentSingleCol";

export async function DTAMapPage() {
  const [snippets, map, { data: events }] = await Promise.all([
    getDTASnippets(),
    getDTAMap(),
    tempGetDTAEvents(),
  ]);
  const description = snippets?.dtaHomepageDescription;

  return (
    <ViewTransitionGroundPage panel="public" microsite="dta">
      <DTAMapNav className="px-10 700:mb-30 700:px-30" />
      <div className="p-10 700:p-30">
        <DTAMap map={map ?? undefined} events={events ?? undefined} />
      </div>
      {description && (
        <DTAContentSingleCol className="p-10 700:p-30">
          {description}
        </DTAContentSingleCol>
      )}
      <DTAMapFooter />
    </ViewTransitionGroundPage>
  );
}
