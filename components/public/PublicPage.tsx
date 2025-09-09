import TempLink from "@/components/TempLink";
import ViewTransitionGroundPage from "@/components/ViewTransitionGroundPage";
import { routes } from "@/lib/routes";

export default function PublicPage() {
  return (
    <ViewTransitionGroundPage panel="public">
      <div className="flex flex-col items-start gap-2 px-24">
        <TempLink href={routes.hookePark} scroll={false}>
          Hooke Park
        </TempLink>
        <TempLink href={routes.dta} scroll={false}>
          DTA
        </TempLink>
        <TempLink href={routes.roam} scroll={false}>
          Roam
        </TempLink>
      </div>
    </ViewTransitionGroundPage>
  );
}
