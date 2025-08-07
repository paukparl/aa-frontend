"use client";

import { usePathname } from "next/navigation";
import ViewTransitionGroundPage from "@/components/ViewTransitionGroundPage";
import { cn } from "@/lib/cn";
import { parseMicrosite, parsePanel } from "@/lib/layoutUtils";

export default function NotFoundPage() {
  const pathname = usePathname();
  const panel = parsePanel(pathname);
  const microsite = parseMicrosite(pathname);

  return (
    <ViewTransitionGroundPage panel={panel} microsite={microsite ?? undefined}>
      <div
        className={cn(
          "flex h-[calc(100dvh-var(--header-h)*2)] flex-col items-center justify-center font-nhg-display text-(length:--nav-btn-font-size)/1.1 font-500",
        )}
      >
        NOT FOUND
      </div>
    </ViewTransitionGroundPage>
  );
}
