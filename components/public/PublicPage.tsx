import TempLink from "@/components/TempLink";
import ViewTransitionGroundPage from "@/components/ViewTransitionGroundPage";
import { cn } from "@/lib/cn";
import { routes } from "@/lib/routes";

export default function PublicPage() {
  return (
    <ViewTransitionGroundPage panel="public">
      <div className={cn("flex flex-col items-start gap-2")}>
        <TempLink href={routes.ground("hooke-park")} scroll={false}>
          Hooke Park
        </TempLink>
        <TempLink href={routes.ground("dta")} scroll={false}>
          DTA
        </TempLink>
        <TempLink href={routes.ground("roam")} scroll={false}>
          Roam
        </TempLink>
      </div>
    </ViewTransitionGroundPage>
  );
}
