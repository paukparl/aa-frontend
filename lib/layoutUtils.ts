import { parseRoute } from "@/lib/routes";

export function parsePanel(pathname: string) {
  const routeParsed = parseRoute(pathname);
  if (!routeParsed) return "home";
  if (routeParsed.ground === "home") return "home";
  if (
    routeParsed.ground.startsWith("school") ||
    routeParsed.ground.startsWith("hookePark")
  )
    return "school";
  if (
    routeParsed.ground.startsWith("public") ||
    routeParsed.ground.startsWith("dta") ||
    routeParsed.ground.startsWith("roam")
  )
    return "public";
  return "home";
}

export function parseMicrosite(pathname: string) {
  const routeParsed = parseRoute(pathname);
  if (!routeParsed) return null;
  if (routeParsed.ground.startsWith("hookePark")) return "hookePark";
  if (routeParsed.ground.startsWith("dta")) return "dta";
  if (routeParsed.ground.startsWith("roam")) return "roam";
  return null;
}

export function parseMenuOpen(searchParams: URLSearchParams) {
  return searchParams.getAll("open").includes("menu");
}
