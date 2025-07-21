import { GridNavLink, GridNavRoot } from "@/components/GridNav";
import { cn } from "@/lib/cn";
import { routes } from "@/lib/routes";

export default function SchoolPanelPageGridNav() {
  return (
    <GridNavRoot theme="page" className={cn("mb-[calc(var(--padding)*2)]")}>
      <GridNavLink href={routes.panel("school", "programmes")}>
        Programmes
      </GridNavLink>
      <GridNavLink href={routes.panel("school", "apply")}>Apply</GridNavLink>
      <GridNavLink href={routes.panel("school", "facilities")}>
        Facilities
      </GridNavLink>
      <GridNavLink href={routes.panel("school", "calendar")}>
        Calendar
      </GridNavLink>
      <GridNavLink href={routes.panel("school", "locations")}>
        Locations
      </GridNavLink>
      <GridNavLink href={routes.panel("school", "people")}>People</GridNavLink>
      <GridNavLink href={routes.panel("school", "about")}>About</GridNavLink>
    </GridNavRoot>
  );
}
