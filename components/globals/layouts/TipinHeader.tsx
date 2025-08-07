import React from "react";
import { HeaderBreadcrumb } from "@/components/globals/components/HeaderBreadcrumb";
import { cn } from "@/lib/cn";

type DTATipinHeaderProps = {
  pageTitle: string;
  className?: string;
  colorTheme: BreadcrumbColorTheme;
  breadcrumbLinks: BreadcrumbLink[];
};

export const TipinHeader = ({
  className,
  pageTitle,
  breadcrumbLinks,
  colorTheme,
}: DTATipinHeaderProps) => {
  const colorThemeDict = {
    "dta-people": {
      fill: "fill-dta-people-foreground",
    },
    "dta-practices": {
      fill: "fill-dta-practices-foreground",
    },
    "dta-institutions": {
      fill: "fill-dta-institutions-foreground",
    },
    "dta-collections": {
      fill: "fill-dta-collections-foreground",
    },
    "dta-about": {
      fill: "fill-dta-about-foreground",
    },
    "dta-search": {
      fill: "fill-dta-search-foreground",
    },
    "school-programmes": {
      fill: "fill-black",
    },
  };
  return (
    <div
      className={cn(
        className,
        "700:mb-[40px] mb-[20px] flex h-fit items-start justify-between",
      )}
    >
      <div className="flex items-start gap-[20px]">
        <svg
          className="700:mt-[3px] 700:h-[30px] 700:w-[30px] mt-[2px] h-[20px] w-[20px] shrink-0"
          viewBox="0 0 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className={colorThemeDict[colorTheme].fill}
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M34 34H0V28H34V34Z"
          />
          <path
            className={colorThemeDict[colorTheme].fill}
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M34 20H0V14H34V20Z"
          />
          <path
            className={colorThemeDict[colorTheme].fill}
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M34 6H0V0H34V6Z"
          />
        </svg>
        <HeaderBreadcrumb
          links={breadcrumbLinks}
          pageTitle={pageTitle}
          colorTheme={colorTheme}
        />
      </div>
      <div>
        <svg
          className="700:mt-[6px] 700:h-[26px] 700:w-[26px] mt-[3px] h-[18px] w-[18px]"
          viewBox="0 0 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className={colorThemeDict[colorTheme].fill}
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M29.2838 33.5269L0.999547 5.24264L5.24219 1L33.5265 29.2843L29.2838 33.5269Z"
          />
          <path
            className={colorThemeDict[colorTheme].fill}
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M33.2496 5.13564L4.9653 33.4199L0.722656 29.1773L29.0069 0.893003L33.2496 5.13564Z"
          />
        </svg>
      </div>
    </div>
  );
};
