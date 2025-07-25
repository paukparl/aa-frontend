import TempLink from "@/components/TempLink";
import ViewTransitionGroundPage from "@/components/ViewTransitionGroundPage";
import { cn } from "@/lib/cn";
import { routes } from "@/lib/routes";

export async function RoamPage() {
  return (
    <ViewTransitionGroundPage panel="public" microsite="roam">
      <div className={cn("flex flex-col items-start gap-2")}>
        <h1>ROAM</h1>
        <TempLink href={routes.ground("hooke-park")} scroll={false}>
          Hooke Park
        </TempLink>
        <TempLink href={routes.ground("dta")} scroll={false}>
          DTA
        </TempLink>
        <TempLink href={routes.ground("roam")} scroll={false}>
          ROAM
        </TempLink>
      </div>
    </ViewTransitionGroundPage>
  );
}
