"use client";

import { usePathname } from "next/navigation";
import ViewTransitionPanelPage from "@/components/ViewTransitionPanelPage";
import { cn } from "@/lib/cn";
import { parsePanel } from "@/lib/layoutUtils";

export default function NotFoundPage() {
  const pathname = usePathname();
  const panel = parsePanel(pathname);

  return (
    <ViewTransitionPanelPage panel={panel}>
      <NotFoundPageContent />
    </ViewTransitionPanelPage>
  );
}

function NotFoundPageContent() {
  return (
    <div
      className={cn(
        "font-500 font-nhg-display text-(length:--nav-btn-font-size)/1.1 flex h-[calc(100dvh-var(--header-h)*2)] flex-col items-center justify-center",
      )}
    >
      NOT FOUND
    </div>
  );
}
