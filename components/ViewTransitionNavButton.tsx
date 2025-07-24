"use client";

import { usePathname } from "next/navigation";
import { ReactNode, unstable_ViewTransition as ViewTransition } from "react";
import Button from "@/components/Button";
import { usePrevRoute } from "@/contexts/PrevRouteContext";
import { cn } from "@/lib/cn";
import { parseMicrosite, parsePanel } from "@/lib/layoutUtils";

export default function ViewTransitionNavButton({
  type,
  children,
  headerHidden,
}: {
  type: "home" | "school" | "public" | "menu";
  children: ReactNode;
  headerHidden?: boolean;
}) {
  const pathname = usePathname();
  const prev = usePrevRoute();
  const panel = parsePanel(pathname);
  const microsite = parseMicrosite(pathname);
  const prevPanel = prev.pathname ? parsePanel(prev.pathname) : undefined;
  const prevMicrosite = prev.pathname
    ? parseMicrosite(prev.pathname)
    : undefined;

  return (
    <ViewTransition
      update={
        panel !== prevPanel || prevMicrosite !== microsite
          ? `${type}-nav-btn`
          : "none"
      }
    >
      <div
        className={cn(
          "font-500 font-nhg-display",
          type !== "menu" &&
            "text-(length:--nav-btn-font-size)/1.1 pt-[0.075em]",
          microsite === "dta" ? "text-white" : "text-black",
          // Menu
          type === "menu"
            ? "fixed top-[calc(var(--header-h)*0.5)] left-[calc(var(--header-h)*0.5)] z-30 -translate-1/2 text-(length:--menu-svg-font-size)"
            : // Home
              type === "home"
              ? [
                  "fixed z-30",
                  panel === "home"
                    ? "top-[calc(var(--header-h)*0.5)] left-(--header-h) -translate-y-1/2"
                    : panel === "school"
                      ? "top-(--header-h) left-[calc(var(--header-h)*0.5)] -translate-x-1/2 -rotate-90"
                      : // "public"
                        "top-[calc(var(--header-h)*0.5)] left-(--header-h) -translate-y-1/2",
                ]
              : // School
                type === "school"
                ? [
                    "fixed z-30",
                    panel === "home"
                      ? "top-(--padding) right-[calc(var(--header-h)*0.5)] origin-left translate-x-full -translate-y-1/2 rotate-90"
                      : panel === "school"
                        ? "top-[calc(var(--header-h)*0.5)] left-[calc(var(--header-h)+var(--padding))] -translate-y-1/2"
                        : // "public"
                          "top-[calc(var(--header-h)*0.5)] right-(--padding) -translate-y-1/2",
                  ]
                : // Public
                  [
                    "fixed z-30",
                    panel === "home"
                      ? "bottom-[calc(var(--header-h)*0.5)] left-(--padding) translate-y-1/2"
                      : panel === "school"
                        ? "bottom-[calc(var(--header-h)*0.5)] left-(--padding) translate-y-1/2"
                        : // "public"
                          "top-[calc(var(--header-h)*1.5)] left-(--padding) -translate-y-1/2",
                  ],
        )}
        data-pathname={pathname} // trigger update whenever pathname changes
      >
        <Button
          theme="minimal"
          className={cn(
            "block transition-transform duration-300",
            headerHidden && "translate-y-[calc(var(--header-h)*-1)]",
          )}
          asChild
        >
          {children}
        </Button>
      </div>
    </ViewTransition>
  );
}
