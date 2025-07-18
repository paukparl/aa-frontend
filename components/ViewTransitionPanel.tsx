import { usePathname } from "next/navigation";
import { unstable_ViewTransition as ViewTransition } from "react";
import { usePrevRoute } from "@/contexts/PrevRouteContext";
import { cn } from "@/lib/cn";
import { parseMicrosite, parsePanel } from "@/lib/layoutUtils";

export default function ViewTransitionPanel({
  type,
  headerHidden,
}: {
  type: "home" | "school" | "public";
  headerHidden?: boolean;
}) {
  const pathname = usePathname();
  const panel = parsePanel(pathname);
  const microsite = parseMicrosite(pathname);
  const prev = usePrevRoute();
  const prevPanel = prev.pathname ? parsePanel(prev.pathname) : undefined;

  return (
    <>
      {/* This can be used to overlay exiting (fading out) page */}

      {/* <ViewTransition
        key={`${type}-panel-${panel}`}
        exit={panel !== type ? "panel-exit" : "none"}
      >
        <Panel type={type} panel={panel} microsite={microsite} />
      </ViewTransition> */}

      <ViewTransition
        update={
          panel !== prevPanel
            ? type === panel
              ? `panel-update-from-other-to-this`
              : type === prevPanel
                ? `panel-update-from-this-to-other`
                : `panel-update-from-other-to-other`
            : `panel-update-from-this-to-this`
        }
      >
        <Panel
          type={type}
          panel={panel}
          microsite={microsite}
          headerHidden={headerHidden}
        />
      </ViewTransition>
    </>
  );
}

function Panel({
  type,
  panel,
  microsite,
  headerHidden,
}: {
  type: "home" | "school" | "public";
  panel: "home" | "school" | "public";
  microsite: "hooke-park" | "dta" | "roam" | null;
  headerHidden?: boolean;
}) {
  return (
    <div
      className={cn("fixed top-0 left-0 h-dvh w-dvw", panel !== type && "z-20")}
      style={{
        transform:
          type === "home"
            ? panel === "home"
              ? "translate(var(--home-panel-x-at-home), var(--home-panel-y-at-home))"
              : panel === "school"
                ? "translate(var(--home-panel-x-at-school), var(--home-panel-y-at-school))"
                : panel === "public"
                  ? "translate(var(--home-panel-x-at-public), var(--home-panel-y-at-public))"
                  : panel === "hooke-park"
                    ? "translate(var(--home-panel-x-at-hooke-park), var(--home-panel-y-at-hooke-park))"
                    : panel === "dta"
                      ? "translate(var(--home-panel-x-at-dta), var(--home-panel-y-at-dta))"
                      : "translate(var(--home-panel-x-at-roam), var(--home-panel-y-at-roam))"
            : type === "school"
              ? panel === "home"
                ? "translate(var(--school-panel-x-at-home), var(--school-panel-y-at-home))"
                : panel === "school"
                  ? "translate(var(--school-panel-x-at-school), var(--school-panel-y-at-school))"
                  : panel === "public"
                    ? "translate(var(--school-panel-x-at-public), var(--school-panel-y-at-public))"
                    : panel === "hooke-park"
                      ? "translate(var(--school-panel-x-at-hooke-park), var(--school-panel-y-at-hooke-park))"
                      : panel === "dta"
                        ? "translate(var(--school-panel-x-at-dta), var(--school-panel-y-at-dta))"
                        : "translate(var(--school-panel-x-at-roam), var(--school-panel-y-at-roam))"
              : panel === "home"
                ? "translate(var(--public-panel-x-at-home), var(--public-panel-y-at-home))"
                : panel === "school"
                  ? "translate(var(--public-panel-x-at-school), var(--public-panel-y-at-school))"
                  : panel === "public"
                    ? "translate(var(--public-panel-x-at-public), var(--public-panel-y-at-public))"
                    : panel === "hooke-park"
                      ? "translate(var(--public-panel-x-at-hooke-park), var(--public-panel-y-at-hooke-park))"
                      : panel === "dta"
                        ? "translate(var(--public-panel-x-at-dta), var(--public-panel-y-at-dta))"
                        : "translate(var(--public-panel-x-at-roam), var(--public-panel-y-at-roam))",
      }}
    >
      <div
        className={cn(
          "absolute top-0 left-0 size-full transition-transform duration-300",
          headerHidden && "translate-y-[calc(var(--header-h)*-1)]",
          type === "home"
            ? "bg-(--color-home)"
            : type === "school"
              ? "bg-main-school"
              : "bg-main-public",
          microsite === "hooke-park" && "bg-white shadow-[0_0_0_1px_#000]",
          microsite === "dta" && "bg-[#1d453f] shadow-[0_0_0_1px_#fff]",
          microsite === "roam" && "bg-[#fdfff0] shadow-[0_0_0_1px_#000]",
        )}
      ></div>
    </div>
  );
}
