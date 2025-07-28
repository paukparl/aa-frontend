"use client";

import { animate } from "motion";
import { motion, useMotionValue } from "motion/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Dialog } from "radix-ui";
import {
  unstable_ViewTransition as ViewTransition,
  useEffect,
  useRef,
} from "react";
import Button from "@/components/Button";
import LoadingLink from "@/components/LoadingLink";
import PageHeader from "@/components/PageHeader";
import { MenuButton } from "@/components/ViewTransitionMenu";
import MenuSvg from "@/components/svgs/MenuSvg";
import { usePrevRoute } from "@/contexts/PrevRouteContext";
import {
  getAnimations,
  popAnimation,
  pushAnimation,
} from "@/hooks/useViewTransitionsStore";
import { cn } from "@/lib/cn";
import {
  parseMenuOpen,
  parsePanelPagePath,
  parseTipin1PagePath,
  parseTipin2PagePath,
} from "@/lib/layoutUtils";

type TipinType = "1" | "2";

type Ancestor = {
  title: string;
  href: string;
};

export type Ancestors<T extends TipinType> = T extends "1"
  ? [Ancestor]
  : [Ancestor, Ancestor];

const closeFadeDuration = 0.2; // in seconds
const closeFadeDelay = 0.4; // in seconds

export default function ViewTransitionTipinPage<T extends TipinType>({
  type,
  children,
  bg,
  fg,
  title,
  ancestors,
}: {
  type: T;
  children?: React.ReactNode;
  bg: string;
  fg: string;
  title: React.ReactNode;
  ancestors: Ancestors<T>;
}) {
  const router = useRouter();

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const prev = usePrevRoute();
  const isMenuOpen = parseMenuOpen(searchParams);
  const panelPagePath = parsePanelPagePath(pathname);
  const tipin1PagePath = parseTipin1PagePath(pathname);
  const tipin2PagePath = parseTipin2PagePath(pathname);
  const prevTipin1PagePath = prev.pathname
    ? parseTipin1PagePath(prev.pathname)
    : undefined;
  const prevTipin2PagePath = prev.pathname
    ? parseTipin2PagePath(prev.pathname)
    : undefined;

  const overlayRef = useRef<HTMLDivElement>(null);

  const closeBtnOpacity = isMenuOpen
    ? 0
    : type === "2"
      ? 1
      : tipin2PagePath === null
        ? 1
        : 0;
  const closeBtnOpacityMV = useMotionValue(closeBtnOpacity);

  useEffect(() => {
    animate(closeBtnOpacityMV, closeBtnOpacity, {
      duration: closeFadeDuration,
      delay: closeBtnOpacity ? closeFadeDelay : 0,
    });
  }, [closeBtnOpacity, closeBtnOpacityMV]);

  const parentHref = ancestors[ancestors.length - 1].href;

  const removeScrollBar = () => {
    overlayRef.current?.style.setProperty("overflow", "hidden");
  };

  return (
    <ViewTransition
      update="none"
      default={
        type === "1"
          ? !prevTipin1PagePath
            ? "first-tipin"
            : "first-tipin-with-delay"
          : prevTipin1PagePath === tipin1PagePath && !prevTipin2PagePath
            ? "second-tipin"
            : "second-tipin-with-delay"
      }
      exit={type === "1" ? "first-tipin" : "second-tipin"}
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
        console.log("exiting");
        // overlayRef.current?.style.setProperty("overflow", "hidden");
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
            removeScrollBar();
            router.push(parentHref, { scroll: false });
          }
        }}
      >
        <Dialog.Overlay
          ref={overlayRef}
          className={cn(
            "fixed inset-0 top-0 left-0 z-40 w-full overflow-y-auto text-(--tipin-fg)",
          )}
          style={
            {
              "--tipin-bg": bg,
              "--tipin-fg": fg,
            } as React.CSSProperties
          }
        >
          {/* Backdrop for panel */}
          {panelPagePath && (
            <div
              className={cn(
                "700:block 700:w-1/12 absolute top-0 right-0 hidden h-full",
              )}
              onClick={() => {
                removeScrollBar();
                router.push(panelPagePath, { scroll: false });
              }}
            />
          )}
          {/* Backdrop for tipin1 */}
          {tipin1PagePath && (
            <div
              className={cn(
                "700:block 700:w-2/12 absolute top-0 right-1/12 hidden h-full",
              )}
              onClick={() => {
                removeScrollBar();
                router.push(tipin1PagePath!, { scroll: false });
              }}
            />
          )}
          <Dialog.Content
            className={cn(
              "w-full outline-none",
              type === "1" ? "700:w-11/12" : "700:w-9/12",
            )}
            onPointerDownOutside={(e) => {
              e.preventDefault();
            }}
            onInteractOutside={(e) => {
              e.preventDefault();
            }}
          >
            <Dialog.Title className={cn("sr-only")}></Dialog.Title>
            <Dialog.Description className={cn("sr-only")}></Dialog.Description>
            <div className={cn("relative min-h-dvh w-full bg-(--tipin-bg)")}>
              <PageHeader className={cn("from-(--tipin-bg) px-(--padding)")}>
                <Button theme="minimal" asChild>
                  <MenuButton
                    className={cn(
                      "mr-(--padding) text-(length:--menu-svg-font-size)",
                    )}
                  >
                    <MenuSvg />
                  </MenuButton>
                </Button>
                <div className={cn("mr-(--padding) flex items-center gap-12")}>
                  {ancestors.map((ancestor, idx) => (
                    <LoadingLink
                      key={idx}
                      href={ancestor.href}
                      className={cn(
                        "font-diatype text-15/1.2 inline-flex h-28 items-center px-8",
                        "bg-(--tipin-fg) text-(--tipin-bg) hover:bg-(--tipin-fg)/60",
                      )}
                      scroll={false}
                    >
                      {ancestor.title}
                    </LoadingLink>
                  ))}
                </div>
                <div className={cn("text-12/1.2 700:text-15/1.2 font-diatype")}>
                  {title}
                </div>

                <motion.div
                  className={cn("ml-auto")}
                  style={{ opacity: closeBtnOpacityMV }}
                >
                  <Button
                    theme="minimal"
                    className={cn("text-(length:--menu-svg-font-size)")}
                    asChild
                  >
                    <LoadingLink href={parentHref} scroll={false}>
                      <MenuSvg mode="close" />
                    </LoadingLink>
                  </Button>
                </motion.div>
              </PageHeader>
              {children}
            </div>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Root>
    </ViewTransition>
  );
}
