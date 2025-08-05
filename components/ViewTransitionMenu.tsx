"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Dialog } from "radix-ui";
import { unstable_ViewTransition as ViewTransition, useRef } from "react";
import Button from "@/components/Button";
import { GridNavLink, GridNavRoot } from "@/components/GridNav";
import LoadingLink from "@/components/LoadingLink";
import PageHeader from "@/components/PageHeader";
import MenuSvg from "@/components/svgs/MenuSvg";
import {
  getAnimations,
  popAnimation,
  pushAnimation,
} from "@/hooks/useViewTransitionsStore";
import { cn } from "@/lib/cn";
import { parseMenuOpen } from "@/lib/layoutUtils";
import {
  addSearchParamsEntries,
  composeUrl,
  removeSearchParamsEntries,
} from "@/lib/urlUtils";

export function MenuButton({
  mode = "menu",
  ...props
}: React.ComponentProps<"button"> & {
  mode?: "menu" | "close";
}) {
  const path = usePathname();
  const searchParams = useSearchParams();
  const menuParams = addSearchParamsEntries(
    searchParams,
    { open: "menu" },
    "appendUnique",
  );
  const closeParams = removeSearchParamsEntries(searchParams, { open: "menu" });
  const router = useRouter();
  const hash = typeof window !== "undefined" ? window.location.hash : "";

  return (
    <button
      onClick={() => {
        router.push(
          composeUrl({
            path,
            params: mode === "menu" ? menuParams : closeParams,
            hash,
          }),
          { scroll: false },
        );
      }}
      {...props}
    />
  );
}

export function ViewTransitionMenu() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isMenuOpen = parseMenuOpen(searchParams);
  // const isMenuOpen = true;
  // console.log("isMenuOpen", isMenuOpen);
  const params = removeSearchParamsEntries(searchParams, { open: "menu" });
  const exitUrl = composeUrl({ path: pathname, params });
  // const exitUrl = "/";
  return isMenuOpen && <Menu exitUrl={exitUrl} />;
}

function Menu({ exitUrl }: { exitUrl: string }) {
  const router = useRouter();
  const overlayRef = useRef<HTMLDivElement>(null);

  return (
    <ViewTransition
      // Update is always triggered if menu is open at site load,
      // so set it to none to avoid animation
      update="none"
      default="menu"
      onEnter={(tran) => {
        const anim = tran.new.getAnimations()[0] as Animation | undefined;
        if (anim) {
          pushAnimation(anim);
          anim.onfinish = () => {
            popAnimation(anim);
          };
        }
      }}
      onExit={(tran) => {
        const anim = tran.old.getAnimations()[0] as Animation | undefined;
        if (anim) {
          pushAnimation(anim);
          anim.onfinish = () => {
            popAnimation(anim);
          };
        }
      }}
    >
      <Dialog.Root
        open
        onOpenChange={(open) => {
          if (!open && getAnimations().length === 0) {
            overlayRef.current?.style.setProperty("overflow", "hidden");
            router.push(exitUrl, { scroll: false });
          }
        }}
      >
        <Dialog.Overlay
          ref={overlayRef}
          className={cn(
            "fixed inset-0 top-0 left-0 z-60 size-full overflow-auto",
          )}
        >
          <Dialog.Content className={cn("bg-menu min-h-full outline-none")}>
            <Dialog.Title className={cn("sr-only")} />
            <Dialog.Description className={cn("sr-only")} />

            <PageHeader
              className={cn("from-bg-menu mb-[calc(var(--padding)*2)]")}
            >
              <Button
                theme="minimal"
                className={cn(
                  "mr-(--padding) text-(length:--menu-svg-font-size)",
                )}
                asChild
              >
                <MenuButton mode="close">
                  <MenuSvg mode="close" />
                </MenuButton>
              </Button>
              <div
                className={cn(
                  "font-nhg-display text-(length:--nav-btn-font-size)/1.1 font-500 pt-[0.075em]",
                )}
              >
                Architectural Association
              </div>
            </PageHeader>

            <div className={cn("px-(--padding) pb-(--padding)")}>
              <LoadingLink
                href="/public"
                className={cn(
                  "font-nhg-display text-(length:--nav-btn-font-size)/1.1 font-500 mb-(--padding) inline-flex h-[1.25em] items-center rounded-full px-[0.5em] pt-[0.075em] outline outline-black outline-dotted hover:bg-white",
                )}
              >
                Public
              </LoadingLink>
              <GridNavRoot
                theme="menu"
                className={cn("mb-[calc(var(--padding)*2)]")}
              >
                <GridNavLink href="/public/whats-on">
                  What&apos;s on
                </GridNavLink>
                <GridNavLink href="/public/news">News</GridNavLink>
                <GridNavLink href="/public/gallery">Gallery</GridNavLink>
                <GridNavLink href="/public/publications">
                  Publications
                </GridNavLink>
                <GridNavLink href="/public/bar">Bar</GridNavLink>
                <GridNavLink href="/public/aa-bookshop">
                  AA Bookshop
                </GridNavLink>
                <GridNavLink href="/public/collections">
                  Collections
                </GridNavLink>
                <GridNavLink href="/public/membership">Membership</GridNavLink>
                <GridNavLink href="/public/support">Support</GridNavLink>
              </GridNavRoot>
              <LoadingLink
                href="/school"
                className={cn(
                  "font-nhg-display text-(length:--nav-btn-font-size)/1.1 font-500 mb-(--padding) inline-flex h-[1.25em] items-center rounded-full px-[0.5em] pt-[0.075em] outline outline-black outline-dotted hover:bg-white",
                )}
              >
                School
              </LoadingLink>
              <GridNavRoot theme="menu">
                <GridNavLink href="/school/programmes">Programmes</GridNavLink>
                <GridNavLink href="/school/apply">Apply</GridNavLink>
                <GridNavLink href="/school/facilities">Facilities</GridNavLink>
                <GridNavLink href="/school/calendar">Calendar</GridNavLink>
                <GridNavLink href="/school/locations">Locations</GridNavLink>
                <GridNavLink href="/school/people">People</GridNavLink>
                <GridNavLink href="/school/about">About</GridNavLink>
              </GridNavRoot>
            </div>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Root>
    </ViewTransition>
  );
}
