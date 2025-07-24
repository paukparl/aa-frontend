import { GridNavLink, GridNavRoot } from "@/components/GridNav";
import { cn } from "@/lib/cn";
import { routes } from "@/lib/routes";

export default function PublicPanelPageGridNav() {
  return (
    <GridNavRoot theme="page" className={cn("mb-[calc(var(--padding)*2)]")}>
      <GridNavLink href={routes.panel("public", "whats-on")}>
        What&apos;s on
      </GridNavLink>
      <GridNavLink href={routes.panel("public", "news")}>News</GridNavLink>
      <GridNavLink href={routes.panel("public", "gallery")}>
        Gallery
      </GridNavLink>
      <GridNavLink href={routes.panel("public", "publications")}>
        Publications
      </GridNavLink>
      <GridNavLink href={routes.panel("public", "bar")}>Bar</GridNavLink>
      <GridNavLink href={routes.panel("public", "aa-bookshop")}>
        AA Bookshop
      </GridNavLink>
      <GridNavLink href={routes.panel("public", "collections")}>
        Collections
      </GridNavLink>
      <GridNavLink href={routes.panel("public", "membership")}>
        Membership
      </GridNavLink>
      <GridNavLink href={routes.panel("public", "support")}>
        Support
      </GridNavLink>
    </GridNavRoot>
  );
}
