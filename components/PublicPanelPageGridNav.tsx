import { GridNavLink, GridNavRoot } from "@/components/GridNav";
import { cn } from "@/lib/cn";
import { routes } from "@/lib/routes";

export default function PublicPanelPageGridNav() {
  return (
    <GridNavRoot theme="page" className={cn("mb-[calc(var(--padding)*2)]")}>
      <GridNavLink href={routes.ground("dta")}>What&apos;s on</GridNavLink>
      <GridNavLink href={routes.ground("dta")}>News</GridNavLink>
      <GridNavLink href={routes.ground("dta")}>Gallery</GridNavLink>
      <GridNavLink href={routes.ground("dta")}>Publications</GridNavLink>
      <GridNavLink href={routes.ground("dta")}>Bar</GridNavLink>
      <GridNavLink href={routes.ground("dta")}>AA Bookshop</GridNavLink>
      <GridNavLink href={routes.ground("dta")}>Collections</GridNavLink>
      <GridNavLink href={routes.ground("dta")}>Membership</GridNavLink>
      <GridNavLink href={routes.ground("dta")}>Support</GridNavLink>
    </GridNavRoot>
  );
}
