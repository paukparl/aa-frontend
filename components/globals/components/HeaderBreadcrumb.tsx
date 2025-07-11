import clsx from "clsx";
import React from "react";
import { Mono } from "@/components/Typography/Mono";

type colorTheme =
  | "dta-people"
  | "dta-practices"
  | "dta-institutions"
  | "dta-collections"
  | "dta-about"
  | "dta-search";
type HeaderBreadcrumbProps = {
  links: Array<Record<string, any>>;
  pageTitle: string;
  className?: string;
  colorTheme: colorTheme;
};

export default ({
  links,
  className,
  pageTitle,
  colorTheme,
}: HeaderBreadcrumbProps) => {
  const colorThemeDict = {
    "dta-people": {
      bg: "bg-dta-people-foreground",
      text: "text-dta-people-foreground",
    },
    "dta-practices": {
      bg: "bg-dta-practices-foreground",
      text: "text-dta-practices-foreground",
    },
    "dta-institutions": {
      bg: "bg-dta-institutions-foreground",
      text: "text-dta-institutions-foreground",
    },
    "dta-collections": {
      bg: "bg-dta-collections-foreground",
      text: "text-dta-collections-foreground",
    },
    "dta-about": {
      bg: "bg-dta-about-foreground",
      text: "text-dta-about-foreground",
    },
    "dta-search": {
      bg: "bg-dta-search-foreground",
      text: "text-dta-search-foreground",
    },
  };
  return (
    <div
      className={clsx(
        className,
        "flex flex-wrap items-center gap-[15px] sm:gap-[20px]",
      )}
    >
      {links.map((item) => (
        <Mono
          className={clsx(
            colorThemeDict[colorTheme].bg,
            "px-[10px] py-[5px] text-white",
          )}
          children={item.title}
        />
      ))}
      <Mono className={colorThemeDict[colorTheme].text} children={pageTitle} />
    </div>
  );
};
