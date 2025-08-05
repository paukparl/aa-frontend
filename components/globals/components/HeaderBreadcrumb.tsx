import React from "react";
import { cn } from "@/lib/cn";

type colorTheme =
  | "dta-people"
  | "dta-practices"
  | "dta-institutions"
  | "dta-collections"
  | "dta-about"
  | "dta-search";
type BreadcrumbLink = {
  title: string;
  href?: string;
};
type HeaderBreadcrumbProps = {
  links: BreadcrumbLink[];
  pageTitle: string;
  className?: string;
  colorTheme: colorTheme;
};

export const HeaderBreadcrumb = ({
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
      className={cn(
        className,
        "flex flex-wrap items-center gap-[15px] 700:gap-[20px]",
      )}
    >
      {links.map((item, index) => (
        <span
          key={index}
          className={cn(
            colorThemeDict[colorTheme].bg,
            "px-[7px] py-[3px] mono text-white 700:px-[10px] 700:py-[5px]",
          )}
        >
          {item.title}
        </span>
      ))}
      <span className={cn("mono", colorThemeDict[colorTheme].text)}>
        {pageTitle}
      </span>
    </div>
  );
};
