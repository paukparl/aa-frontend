import TempLink from "@/components/TempLink";
import ViewTransitionGroundPage from "@/components/ViewTransitionGroundPage";
import { routes } from "@/lib/routes";

export async function RoamPage() {
  return (
    <ViewTransitionGroundPage panel="public" microsite="roam">
      <div className="flex flex-col items-start gap-2 px-24">
        <h1 className="h1">ROAM</h1>
        <TempLink href={routes.hookePark} scroll={false}>
          Hooke Park
        </TempLink>
        <TempLink href={routes.dta} scroll={false}>
          DTA
        </TempLink>
        <TempLink href={routes.roam} scroll={false}>
          ROAM
        </TempLink>
      </div>
    </ViewTransitionGroundPage>
  );
}
