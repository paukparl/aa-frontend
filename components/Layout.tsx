"use client";

import { useIsomorphicLayoutEffect } from "motion/react";
import { usePathname } from "next/navigation";
import { ReactNode, Suspense, useEffect, useRef, useState } from "react";
import CollapsingText, {
  CollapsingTextMethods,
} from "@/components/CollapsingText";
import LoadingLink from "@/components/LoadingLink";
import {
  MenuButton,
  ViewTransitionMenu,
} from "@/components/ViewTransitionMenu";
import ViewTransitionNavButton from "@/components/ViewTransitionNavButton";
import ViewTransitionPanel from "@/components/ViewTransitionPanel";
import MenuSvg from "@/components/svgs/MenuSvg";
import useEventHandler from "@/hooks/useEventHandler";
import useInitial from "@/hooks/useInitial";
import { cn } from "@/lib/cn";
import { parsePanel } from "@/lib/layoutUtils";
import { routes } from "@/lib/routes";

export default function Layout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const panel = parsePanel(pathname);

  const homeMethodsRef = useRef<CollapsingTextMethods>(undefined);
  const schoolMethodsRef = useRef<CollapsingTextMethods>(undefined);
  const publicMethodsRef = useRef<CollapsingTextMethods>(undefined);

  const initialPanel = useInitial(panel);
  const initialCollapsed = useInitial(panel !== "home");

  // Collapse texts on initial render
  useEffect(() => {
    if (initialPanel === "home") {
      homeMethodsRef.current?.collapse();
      schoolMethodsRef.current?.collapse();
      publicMethodsRef.current?.collapse();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [headerHidden, setHeaderHidden] = useState(false);
  const lastScrollY = useRef<number | null>(null);
  const upStartScrollY = useRef<number | null>(null);
  useEventHandler({
    event: "scroll",
    target: "window",
    handler: () => {
      if (lastScrollY.current !== null) {
        if (panel === "public") {
          if (window.scrollY <= 20) setHeaderHidden(false);
          else {
            // Scrolling down
            if (window.scrollY > lastScrollY.current) {
              upStartScrollY.current = null;
              setHeaderHidden(true);
            }
            // Scrolling up
            else {
              if (headerHidden) {
                if (upStartScrollY.current === null)
                  upStartScrollY.current = window.scrollY;
                if (upStartScrollY.current - window.scrollY >= 20)
                  setHeaderHidden(false);
              }
            }
          }
        } else {
          setHeaderHidden(false);
        }
      }
      lastScrollY.current = window.scrollY;
    },
    options: {
      throttle: { wait: 50, leading: true, trailing: true },
    },
  });

  useIsomorphicLayoutEffect(() => {
    setHeaderHidden(false);
  }, [panel]);

  return (
    <>
      {/* Wrapped in div to let Dialog access siblings without Suspense interference. Also, minimize number of elements receiving `aria-hidden` */}
      <div>
        {/* Menu Button */}
        <Suspense>
          <ViewTransitionNavButton type="menu" headerHidden={headerHidden}>
            <MenuButton>
              <MenuSvg />
            </MenuButton>
          </ViewTransitionNavButton>
        </Suspense>

        {/* Home Nav Button */}
        <ViewTransitionNavButton type="home" headerHidden={headerHidden}>
          <LoadingLink href="/">
            <CollapsingText.Root
              initialCollapsed={initialCollapsed}
              methodsRef={homeMethodsRef}
            >
              {(expanded) => (
                <>
                  {"Architectural".split("").map((letter, i) => (
                    <CollapsingText.Unit
                      key={`a1-${i}`}
                      transformer={() =>
                        expanded.get() * ("Architectural".length - 1) >= i
                          ? "inline"
                          : "none"
                      }
                    >
                      {letter}
                    </CollapsingText.Unit>
                  ))}
                  <CollapsingText.Unit
                    className={cn("whitespace-pre")}
                    transformer={() => (expanded.get() > 0 ? "inline" : "none")}
                  >
                    {" "}
                  </CollapsingText.Unit>
                  {"Association".split("").map((letter, i) => (
                    <CollapsingText.Unit
                      key={`a2-${i}`}
                      transformer={() =>
                        expanded.get() * ("Association".length - 1) >= i
                          ? "inline"
                          : "none"
                      }
                    >
                      {letter}
                    </CollapsingText.Unit>
                  ))}
                </>
              )}
            </CollapsingText.Root>
          </LoadingLink>
        </ViewTransitionNavButton>

        {/* School nav button */}
        <ViewTransitionNavButton type="school" headerHidden={headerHidden}>
          <LoadingLink href={routes.panel("school")}>
            School
            <CollapsingText.Root
              initialCollapsed={initialCollapsed}
              methodsRef={schoolMethodsRef}
              onCollapse={() => {}}
            >
              {(expanded) => (
                <>
                  {" of Architecture".split("").map((letter, i) => (
                    <CollapsingText.Unit
                      key={i}
                      className={cn("whitespace-pre")}
                      transformer={() =>
                        expanded.get() * " of Architecture".length >= i + 1
                          ? "inline"
                          : "none"
                      }
                    >
                      {letter}
                    </CollapsingText.Unit>
                  ))}
                </>
              )}
            </CollapsingText.Root>
          </LoadingLink>
        </ViewTransitionNavButton>

        {/* Public nav button */}
        <ViewTransitionNavButton type="public" headerHidden={headerHidden}>
          <LoadingLink href={routes.panel("public")}>
            <CollapsingText.Root
              initialCollapsed={initialCollapsed}
              methodsRef={publicMethodsRef}
              onCollapse={() => {}}
            >
              {(expanded) => (
                <>
                  {"Open to the ".split("").map((letter, i) => (
                    <CollapsingText.Unit
                      key={i}
                      className={cn("whitespace-pre")}
                      transformer={() =>
                        expanded.get() * ("Open to the".length + 1) >=
                        "Open to the ".length - i
                          ? "inline"
                          : "none"
                      }
                    >
                      {letter}
                    </CollapsingText.Unit>
                  ))}
                </>
              )}
            </CollapsingText.Root>
            Public
          </LoadingLink>
        </ViewTransitionNavButton>
      </div>

      {children}

      {/* Menu */}
      <ViewTransitionMenu />

      {/* Panels */}
      <div>
        <ViewTransitionPanel type="home" headerHidden={headerHidden} />
        <ViewTransitionPanel type="school" headerHidden={headerHidden} />
        <ViewTransitionPanel type="public" headerHidden={headerHidden} />
      </div>
    </>
  );
}
