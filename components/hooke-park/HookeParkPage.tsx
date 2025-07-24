import TempLink from "@/components/TempLink";
import ViewTransitionPanelPage from "@/components/ViewTransitionPanelPage";
import { cn } from "@/lib/cn";
import { routes } from "@/lib/routes";

export async function HookeParkPage() {
  return (
    <ViewTransitionPanelPage panel="public" microsite="hooke-park">
      <div className={cn("flex flex-col items-start gap-2")}>
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
    </ViewTransitionPanelPage>
  );
}
