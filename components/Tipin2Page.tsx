import { notFound } from "next/navigation";
import ViewTransitionTipinPage, {
  Ancestors,
} from "@/components/ViewTransitionTipinPage";
import { cn } from "@/lib/cn";
import { RouteParsed, routes } from "@/lib/routes";

export default async function Tipin2Page({
  routeParsed,
}: {
  routeParsed: Exclude<RouteParsed["tipin2"], null>;
}) {
  if (routeParsed.panel === "school") {
    if (routeParsed.subpanel === "programmes") {
      if (routeParsed.tipin1 === "programme-1") {
        if (routeParsed.tipin2 === "unit-1") {
          // TODO: fetch data
          const title = "Title";
          const ancestors = [
            {
              title: "Grandparent",
              href: routes.panel(routeParsed.panel, routeParsed.subpanel),
            },
            {
              title: "Parent",
              href: routes.tipin1(
                routeParsed.panel,
                routeParsed.subpanel,
                routeParsed.tipin1,
              ),
            },
          ] satisfies Ancestors<"2">;
          return (
            <ViewTransitionTipinPage
              type="2"
              tipinBg="#000"
              textIsWhite
              className={cn(
                "flex flex-col items-start gap-4 pt-[calc(var(--padding)*2)]",
              )}
              title={title}
              ancestors={ancestors}
            >
              <div className={cn("h-dvh")} />
            </ViewTransitionTipinPage>
          );
        }
      }
    }
  }

  notFound();
}
