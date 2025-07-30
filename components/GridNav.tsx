"use client";

import { usePathname } from "next/navigation";
import { Slot } from "radix-ui";
import { createContext, useContext } from "react";
import LoadingLink from "@/components/LoadingLink";
import { cn } from "@/lib/cn";

const GridNavContext = createContext<
  | {
      theme: "page" | "menu";
    }
  | undefined
>(undefined);

export function GridNavRoot({
  theme,
  className,
  ...props
}: React.ComponentProps<"div"> & {
  theme: "page" | "menu";
}) {
  return (
    <GridNavContext value={{ theme }}>
      <div
        className={cn(
          "font-diatype 1024:grid-cols-3 grid w-full grid-cols-2",
          className,
        )}
        {...props}
      />
    </GridNavContext>
  );
}

export function GridNavLink({
  className,
  asChild,
  ...props
}: React.ComponentProps<typeof LoadingLink> & {
  asChild?: boolean;
}) {
  const context = useContext(GridNavContext);
  if (!context)
    throw new Error("GridNav.Link must be used within a GridNav.Root");
  const { theme } = context;
  const Comp = asChild ? Slot.Root : LoadingLink;
  const pathname = usePathname();
  return (
    <Comp
      className={cn(
        "text-18/1.2 700:h-64 700:text-24/1.2 flex h-40 items-center justify-start truncate p-(--padding) delay-[10ms] hover:bg-white",
        "max-1024:not-nth-[2n+1]:-ml-px max-1024:nth-[n+3]:-mt-px 1024:not-nth-[3n+1]:-ml-px 1024:nth-[n+4]:-mt-px",
        theme === "page" && "border border-white",
        theme === "menu" && "border border-dotted border-black",
        pathname.startsWith(`${props.href}`) && "bg-white",
        className,
      )}
      scroll={!asChild ? true : undefined}
      {...props}
    />
  );
}
