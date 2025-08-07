import TempLink from "@/components/TempLink";
import ViewTransitionGroundPage from "@/components/ViewTransitionGroundPage";
import { routes } from "@/lib/routes";

export async function HookeParkPage() {
  return (
    <ViewTransitionGroundPage panel="school" microsite="hooke-park">
      <div className="flex flex-col items-start gap-2 px-24">
        <h1>Hooke Park</h1>
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
