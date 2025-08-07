import { GridNavLink, GridNavRoot } from "@/components/GridNav";
import { routes } from "@/lib/routes";

export default function SchoolPanelPageGridNav() {
  return (
    <GridNavRoot theme="page" className="mb-[calc(var(--padding)*2)]">
      <GridNavLink href={routes.ground("school")}>Programmes</GridNavLink>
      <GridNavLink href={routes.ground("school")}>Apply</GridNavLink>
      <GridNavLink href={routes.ground("school")}>Facilities</GridNavLink>
      <GridNavLink href={routes.ground("school")}>Calendar</GridNavLink>
      <GridNavLink href={routes.ground("school")}>Locations</GridNavLink>
      <GridNavLink href={routes.ground("school")}>People</GridNavLink>
      <GridNavLink href={routes.ground("school")}>About</GridNavLink>
    </GridNavRoot>
  );
}
