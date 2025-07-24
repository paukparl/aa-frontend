import { notFound } from "next/navigation";
import TempLink from "@/components/TempLink";
import ViewTransitionTipinPage, {
  Ancestors,
} from "@/components/ViewTransitionTipinPage";
import { cn } from "@/lib/cn";
import { RouteParsed, routes } from "@/lib/routes";

export default async function Tipin1Page({
  routeParsed,
}: {
  routeParsed: Exclude<RouteParsed["tipin1"], null>;
}) {
  if (routeParsed.panel === "school") {
    if (routeParsed.subpanel === "programmes") {
      if (routeParsed.tipin1 === "programme-1") {
        // TODO: fetch data
        const title = "Title";
        const ancestors = [
          {
            title: "Parent",
            href: routes.panel(routeParsed.panel, routeParsed.subpanel),
          },
        ] satisfies Ancestors<"1">;
        return (
          <ViewTransitionTipinPage
            type="1"
            tipinBg="#fff"
            className={cn(
              "flex flex-col items-start gap-4 pt-[calc(var(--padding)*2)]",
            )}
            title={title}
            ancestors={ancestors}
          >
            <TempLink
              href={routes.tipin2(
                routeParsed.panel,
                routeParsed.subpanel,
                routeParsed.tipin1,
                "unit-1",
              )}
            >
              Unit 1
            </TempLink>
            <div className={cn("h-dvh")} />
          </ViewTransitionTipinPage>
        );
      }
    }
  }

  notFound();
}
