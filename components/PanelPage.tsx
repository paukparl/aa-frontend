import { notFound } from "next/navigation";
import PublicPanelPageGridNav from "@/components/PublicPanelPageGridNav";
import SchoolPanelPageGridNav from "@/components/SchoolPanelPageGridNav";
import TempLink from "@/components/TempLink";
import ViewTransitionPanelPage from "@/components/ViewTransitionPanelPage";
import { cn } from "@/lib/cn";
import { RouteParsed, routes } from "@/lib/routes";

export default async function PanelPage({
  routeParsed,
}: {
  routeParsed: Exclude<RouteParsed["panel"], null>;
}) {
  if (routeParsed.panel === "school" && routeParsed.microsite === undefined) {
    const { subpanel } = routeParsed;
    // TODO: fetch data
    return (
      <ViewTransitionPanelPage
        panel="school"
        className={cn(
          "flex flex-col items-start gap-4 pt-[calc(var(--padding)*2)]",
        )}
      >
        <SchoolPanelPageGridNav />
        {!subpanel && (
          <>
            <TempLink href={routes.panel("hooke-park")}>Hooke Park</TempLink>
            <TempLink href={routes.panel("dta")}>DTA</TempLink>
            <TempLink href={routes.panel("roam")}>Roam</TempLink>
          </>
        )}
        {subpanel === "programmes" && (
          <>
            <TempLink
              href={routes.tipin1("school", "programmes", "programme-1")}
              scroll={false}
            >
              Programme 1
            </TempLink>
          </>
        )}
        <div className={cn("h-dvh")} />
      </ViewTransitionPanelPage>
    );
  }

  if (routeParsed.panel === "public" && routeParsed.microsite === undefined) {
    const { subpanel } = routeParsed;
    return (
      <ViewTransitionPanelPage
        panel="public"
        className={cn(
          "flex flex-col items-start gap-4 pt-[calc(var(--padding)*2)]",
        )}
      >
        <PublicPanelPageGridNav />
        {!subpanel && (
          <>
            <TempLink href={routes.panel("hooke-park")}>Hooke Park</TempLink>
            <TempLink href={routes.panel("dta")}>DTA</TempLink>
            <TempLink href={routes.panel("roam")}>Roam</TempLink>
          </>
        )}
        <div className={cn("h-dvh")} />
      </ViewTransitionPanelPage>
    );
  }

  if (routeParsed.microsite === "hooke-park") {
    return (
      <ViewTransitionPanelPage
        panel="school"
        microsite="hooke-park"
        className={cn(
          "flex flex-col items-start gap-4 pt-[calc(var(--padding)*2)]",
        )}
      >
        <TempLink href={routes.panel("hooke-park")}>Hooke Park</TempLink>
        <TempLink href={routes.panel("dta")}>DTA</TempLink>
        <TempLink href={routes.panel("roam")}>Roam</TempLink>
        <div className={cn("h-dvh")} />
      </ViewTransitionPanelPage>
    );
  }

  if (routeParsed.microsite === "dta") {
    return (
      <ViewTransitionPanelPage
        panel="public"
        microsite="dta"
        className={cn(
          "flex flex-col items-start gap-4 pt-[calc(var(--padding)*2)] text-white",
        )}
      >
        <TempLink href={routes.panel("hooke-park")}>Hooke Park</TempLink>
        <TempLink href={routes.panel("dta")}>DTA</TempLink>
        <TempLink href={routes.panel("roam")}>Roam</TempLink>
        <div className={cn("h-dvh")} />
      </ViewTransitionPanelPage>
    );
  }

  if (routeParsed.microsite === "roam") {
    return (
      <ViewTransitionPanelPage
        panel="public"
        microsite="roam"
        className={cn(
          "flex flex-col items-start gap-4 pt-[calc(var(--padding)*2)]",
        )}
      >
        <TempLink href={routes.panel("hooke-park")}>Hooke Park</TempLink>
        <TempLink href={routes.panel("dta")}>DTA</TempLink>
        <TempLink href={routes.panel("roam")}>Roam</TempLink>
        <div className={cn("h-dvh")} />
      </ViewTransitionPanelPage>
    );
  }

  notFound();
}
