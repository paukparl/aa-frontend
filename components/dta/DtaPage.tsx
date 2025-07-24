import TempLink from "@/components/TempLink";
import ViewTransitionPanelPage from "@/components/ViewTransitionPanelPage";
import { DtaLayout } from "@/components/dta/DtaLayout";
import { cn } from "@/lib/cn";
import { routes } from "@/lib/routes";

export async function DtaPage() {
  return (
    <ViewTransitionPanelPage panel="public" microsite="dta">
      <DtaLayout>
        <div className={cn("flex items-center gap-8")}>
          <TempLink href={routes.ground("dta")} scroll={false}>
            Map
          </TempLink>
          <TempLink href={routes.tipin1("dta", "people")} scroll={false}>
            People
          </TempLink>
          <TempLink href={routes.tipin1("dta", "practices")} scroll={false}>
            Practices
          </TempLink>
          <TempLink href={routes.tipin1("dta", "institutions")} scroll={false}>
            Institutions
          </TempLink>
          <TempLink href={routes.tipin1("dta", "collections")} scroll={false}>
            Collections
          </TempLink>
          <TempLink href={routes.tipin1("dta", "about")} scroll={false}>
            About
          </TempLink>
          <TempLink href={routes.tipin1("dta", "search")} scroll={false}>
            Search
          </TempLink>
        </div>
        <div className={cn("h-svh")} />
      </DtaLayout>
    </ViewTransitionPanelPage>
  );
}
