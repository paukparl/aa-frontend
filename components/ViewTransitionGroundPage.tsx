"use client";

import { ReactNode, unstable_ViewTransition as ViewTransition } from "react";
import PageHeader from "@/components/PageHeader";
import { usePrevRoute } from "@/contexts/PrevRouteContext";
import { cn } from "@/lib/cn";
import { parseMicrosite, parsePanel } from "@/lib/layoutUtils";

type ViewTransitionGroundPageProps = {
  panel: "home" | "school" | "public";
  microsite?: "hooke-park" | "dta" | "roam";
  children?: ReactNode;
  className?: string;
};

export default function ViewTransitionGroundPage({
  panel,
  microsite,
  children,
  className,
}: ViewTransitionGroundPageProps) {
  const prev = usePrevRoute();
  const prevPanel = prev.pathname ? parsePanel(prev.pathname) : undefined;
  const prevMicrosite = prev.pathname
    ? parseMicrosite(prev.pathname)
    : undefined;

  return (
    <ViewTransition
      key={`${panel}${microsite ? `-${microsite}` : ""}`}
      enter={
        prevPanel != panel
          ? `${panel}-page-enter-from-${prevPanel}`
          : prevMicrosite != microsite
            ? "page-enter"
            : "none"
      }
      update="none"
      share="none"
      exit="page-exit"
    >
      <div
        className={cn(
          className,
          "relative z-10",
          // "h-full overflow-auto",
          panel === "home"
            ? "pr-(--header-h) pb-(--header-h)"
            : panel === "school"
              ? "bg-school-background pb-(--header-h) pl-(--header-h)"
              : // public
                "pt-(--header-h)",
          microsite === "dta" && "text-white",
        )}
      >
        {panel === "home" && <PageHeader className="from-transparent" />}
        {panel === "school" && (
          <PageHeader
            className={
              cn("mb-20 700:mb-50")
              // "from-school",
              // microsite === "hooke-park" && "from-white",
            }
          />
        )}
        {panel === "public" && (
          <PageHeader
            className={
              cn("!p-20 700:!p-38")
              // "from-public",
              // microsite === "dta" && "from-[#1d453f]",
              // microsite === "roam" && "from-[#fdfff0]",
            }
          />
        )}
        {children}
      </div>
    </ViewTransition>
  );
}
