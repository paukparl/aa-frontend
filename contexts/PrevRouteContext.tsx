"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { ReactNode, Suspense, createContext, useContext } from "react";
import usePrevious from "@/hooks/usePrevious";

type PrevRoute = {
  pathname?: string;
  searchParams?: URLSearchParams;
};

const PrevRouteContext = createContext<PrevRoute | undefined>(undefined);

export function PrevRouteProvider({ children }: { children: ReactNode }) {
  return (
    // Wrapped in Suspense to opt out of client-side rendering
    <Suspense>
      <PrevRouteProviderDynamic>{children}</PrevRouteProviderDynamic>
    </Suspense>
  );
}

function PrevRouteProviderDynamic({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const prevPathname = usePrevious(pathname, [pathname]);
  const prevSearchParams = usePrevious(searchParams, [searchParams]);
  const prev = {
    pathname: prevPathname,
    searchParams: prevSearchParams,
  } satisfies PrevRoute;
  return <PrevRouteContext value={prev}>{children}</PrevRouteContext>;
}

export function usePrevRoute() {
  const context = useContext(PrevRouteContext);
  if (!context) {
    throw new Error("usePrev must be used within a PrevRouteProvider");
  }
  return context;
}
