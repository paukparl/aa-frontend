import React from "react";
import { cn } from "@/lib/cn";

type filterState = "minimized" | "expanded" | "applied";
type colorTheme = "people" | "practices" | "institutions" | "collections";
type DTAFilterButtonProps = {
  singleSelect?: boolean;
  children: string;
  filterState: filterState;
  colorTheme: colorTheme;
  className?: string;
  clearFilters?: (groupIndex: number) => void;
  clearFilter?: () => void;
  index?: number;
};

export const DTAFilterButton = ({
  children,
  className,
  filterState,
  colorTheme,
  clearFilter,
  clearFilters,
  index,
  singleSelect,
}: DTAFilterButtonProps) => {
  const colorThemeDict = {
    people: {
      stroke: "stroke-dta-people-foreground",
      bg: "bg-dta-people-foreground",
    },
    practices: {
      stroke: "stroke-dta-practices-foreground",
      bg: "bg-dta-practices-foreground",
    },
    institutions: {
      stroke: "stroke-dta-institutions-foreground",
      bg: "bg-dta-institutions-foreground",
    },
    collections: {
      stroke: "stroke-dta-collections-foreground",
      bg: "bg-dta-collections-foreground",
    },
  };
  return (
    <div
      className={cn(
        className,
        (filterState === "expanded" || filterState === "applied") &&
          `${colorThemeDict[colorTheme].bg} text-white`,
        "grid h-[45px] w-[100%] cursor-pointer grid-cols-[35px_1fr] items-center border border-dashed px-[20px] 700:h-[50px] 700:h-[55px] 700:grid-cols-[40px_1fr] 700:px-[25px]",
      )}
    >
      {filterState === "minimized" && (
        <svg
          className="h-[15px] w-[15px] 700:h-[18px] 700:w-[18px]"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className={colorThemeDict[colorTheme].stroke}
            d="M0.0263672 10.5263L20.0264 10.5263"
            strokeWidth="5"
            strokeLinejoin="round"
          />
          <path
            className={colorThemeDict[colorTheme].stroke}
            d="M10 0.526306L10 20.5263"
            strokeWidth="5"
            strokeLinejoin="round"
          />
        </svg>
      )}
      {filterState === "expanded" && (
        <svg
          className="h-[auto] w-[14px] 700:w-[17px]"
          viewBox="0 0 20 5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="stroke-white"
            d="M0 2.5H20"
            strokeWidth="5"
            strokeLinejoin="round"
          />
        </svg>
      )}
      {filterState === "applied" && (
        <svg
          className="h-[15px] w-[15px] 700:h-[18px] 700:w-[18px]"
          viewBox="0 0 23 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() =>
            singleSelect && clearFilter
              ? clearFilter()
              : clearFilters && index && clearFilters(index)
          }
        >
          <path
            className="stroke-white"
            d="M4.05273 3.55276L18.9999 18.5"
            strokeWidth="5"
            strokeLinecap="square"
            strokeLinejoin="round"
          />
          <path
            className="stroke-white"
            d="M19 3.55276L4.05279 18.5"
            strokeWidth="5"
            strokeLinecap="square"
            strokeLinejoin="round"
          />
        </svg>
      )}
      <span className="flex w-full justify-start mono leading-0">
        {children}
      </span>
    </div>
  );
};
