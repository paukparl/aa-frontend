import TempLink from "@/components/TempLink";
import ViewTransitionGroundPage from "@/components/ViewTransitionGroundPage";
import { routes } from "@/lib/routes";

export async function HookeParkPage() {
  return (
    <ViewTransitionGroundPage panel="school" microsite="hookePark">
      <div className="flex flex-col items-start gap-2 px-24">
        <h1 className="h1">Hooke Park</h1>
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
