import { routeParsers } from "@/lib/routes";

export function parsePanel(pathname: string) {
  const panelRouteParsed = routeParsers.panel(pathname);
  if (panelRouteParsed) return panelRouteParsed.panel;
  const tipin1RouteParsed = routeParsers.tipin1(pathname);
  if (tipin1RouteParsed) return tipin1RouteParsed.panel;
  const tipin2RouteParsed = routeParsers.tipin2(pathname);
  if (tipin2RouteParsed) return tipin2RouteParsed.panel;
  return "home";
}

export function parseMicrosite(pathname: string) {
  const panelRouteParsed = routeParsers.panel(pathname);
  if (panelRouteParsed && "microsite" in panelRouteParsed)
    return panelRouteParsed.microsite ?? null;
  const tipin1RouteParsed = routeParsers.tipin1(pathname);
  if (tipin1RouteParsed && "microsite" in tipin1RouteParsed)
    return tipin1RouteParsed.microsite ?? null;
  const tipin2RouteParsed = routeParsers.tipin2(pathname);
  if (tipin2RouteParsed && "microsite" in tipin2RouteParsed)
    return tipin2RouteParsed.microsite ?? null;
  return null;
}

export function parseMenuOpen(searchParams: URLSearchParams) {
  return searchParams.getAll("open").includes("menu");
}

export function parsePanelPagePath(pathname: string) {
  const panelPathnames = [
    pathname.split("/").slice(0, 3).join("/"),
    pathname.split("/").slice(0, 4).join("/"),
  ];
  for (const panelPathname of panelPathnames) {
    const panelRouteParsed = routeParsers.panel(panelPathname);
    if (panelRouteParsed) return panelPathname;
  }
  return null;
}

export function parseTipin1PagePath(pathname: string) {
  const tipin1Pathnames = [
    pathname.split("/").slice(0, 3).join("/"),
    pathname.split("/").slice(0, 4).join("/"),
    pathname.split("/").slice(0, 5).join("/"),
  ];
  for (const tipin1Pathname of tipin1Pathnames) {
    const tipin1RouteParsed = routeParsers.tipin1(tipin1Pathname);
    if (tipin1RouteParsed) return tipin1Pathname;
  }
  return null;
}

export function parseTipin2PagePath(pathname: string) {
  const tipin2Pathnames = [
    pathname.split("/").slice(0, 4).join("/"),
    pathname.split("/").slice(0, 5).join("/"),
  ];
  for (const tipin2Pathname of tipin2Pathnames) {
    const tipin2RouteParsed = routeParsers.tipin2(tipin2Pathname);
    if (tipin2RouteParsed) return tipin2Pathname;
  }
  return null;
}
