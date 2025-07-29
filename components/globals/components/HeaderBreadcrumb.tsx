import clsx from "clsx";
import React from "react";
import { Mono } from "@/components/Typography/Mono";

export type BreadcrumbColorTheme =
  | "dta-people"
  | "dta-practices"
  | "dta-institutions"
  | "dta-collections"
  | "dta-about"
  | "dta-search"
  | "school-programmes";
export type BreadcrumbLink = {
  title: string;
  href?: string;
};
type HeaderBreadcrumbProps = {
  links: BreadcrumbLink[];
  pageTitle: string;
  className?: string;
  colorTheme: BreadcrumbColorTheme;
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
    "school-programmes": {
      bg: "bg-black",
      text: "text-black",
    },
  };
  return (
    <div
      className={clsx(
        className,
        "flex flex-wrap items-center gap-[15px] sm:gap-[20px]",
      )}
    >
      {links.map((item, index) => (
        <Mono
          key={index}
          className={clsx(
            colorThemeDict[colorTheme].bg,
            "px-[7px] py-[3px] text-white sm:px-[10px] sm:py-[5px]",
          )}
        >
          {item.title}
        </Mono>
      ))}
      <Mono className={colorThemeDict[colorTheme].text}>{pageTitle}</Mono>
    </div>
  );
};
