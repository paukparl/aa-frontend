import {
  dtaGroundSlugs,
  hookeParkGroundSlugs,
  parseRoute,
  publicGroundSlugs,
  roamGroundSlugs,
  schoolGroundSlugs,
} from "@/lib/routes";

const schoolGroundSlugsAsStrings: readonly string[] = schoolGroundSlugs;
const publicGroundSlugsAsStrings: readonly string[] = publicGroundSlugs;
const hookeParkGroundSlugsAsStrings: readonly string[] = hookeParkGroundSlugs;
const dtaGroundSlugsAsStrings: readonly string[] = dtaGroundSlugs;
const roamGroundSlugsAsStrings: readonly string[] = roamGroundSlugs;

export function parsePanel(pathname: string) {
  const routeParsed = parseRoute(pathname);
  const ground = routeParsed?.ground;
  if (!ground) return "home";
  if (
    schoolGroundSlugsAsStrings.includes(ground) ||
    hookeParkGroundSlugsAsStrings.includes(ground)
  )
    return "school";
  if (
    publicGroundSlugsAsStrings.includes(ground) ||
    dtaGroundSlugsAsStrings.includes(ground) ||
    roamGroundSlugsAsStrings.includes(ground)
  )
    return "public";
  return "home";
}

export function parseMicrosite(pathname: string) {
  const routeParsed = parseRoute(pathname);
  const ground = routeParsed?.ground;
  if (!ground) return null;
  if (hookeParkGroundSlugsAsStrings.includes(ground)) return "hooke-park";
  if (dtaGroundSlugsAsStrings.includes(ground)) return "dta";
  if (roamGroundSlugsAsStrings.includes(ground)) return "roam";
  return null;
}

export function parseMenuOpen(searchParams: URLSearchParams) {
  return searchParams.getAll("open").includes("menu");
}

export function parsePanelPagePath(pathname: string) {
  const panelPathname = pathname.split("/").slice(0, 2).join("/");
  return panelPathname;
}

export function parseTipin1PagePath(pathname: string) {
  const tipin1Pathname = pathname.split("/").slice(0, 3).join("/");
  return tipin1Pathname;
}

export function parseTipin2PagePath(pathname: string) {
  const tipin2Pathname = pathname.split("/").slice(0, 4).join("/");
  return tipin2Pathname;
}
