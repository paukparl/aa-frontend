// TODO
// add width cutoff for caption
import clsx from "clsx";
import React from "react";
import { Mono } from "@/components/Typography/Mono";

type filterState = "minimized" | "expanded" | "applied";
type colorTheme = "people" | "practices" | "institutions" | "collections";
type DTAFilterButtonProps = {
  singleSelect?: boolean;
  children: string;
  filterState: filterState;
  colorTheme: colorTheme;
  className?: string;
  clearFilters: (groupIndex: number | undefined) => void;
  index?: number;
};

export const DTAFilterButton = ({
  children,
  className,
  filterState,
  colorTheme,
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
      className={clsx(
        className,
        (filterState === "expanded" || filterState === "applied") &&
          `${colorThemeDict[colorTheme].bg} text-white`,
        "grid h-[45px] w-[100%] cursor-pointer grid-cols-[35px_1fr] items-center border border-dashed px-[20px] sm:h-[50px] sm:h-[55px] sm:grid-cols-[40px_1fr] sm:px-[25px]",
      )}
    >
      {filterState === "minimized" && (
        <svg
          className="h-[15px] w-[15px] sm:h-[18px] sm:w-[18px]"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className={colorThemeDict[colorTheme].stroke}
            d="M0.0263672 10.5263L20.0264 10.5263"
            stroke-width="5"
            stroke-linejoin="round"
          />
          <path
            className={colorThemeDict[colorTheme].stroke}
            d="M10 0.526306L10 20.5263"
            stroke-width="5"
            stroke-linejoin="round"
          />
        </svg>
      )}
      {filterState === "expanded" && (
        <svg
          className="h-[auto] w-[14px] sm:w-[17px]"
          viewBox="0 0 20 5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="stroke-white"
            d="M0 2.5H20"
            stroke-width="5"
            stroke-linejoin="round"
          />
        </svg>
      )}
      {filterState === "applied" && (
        <svg
          className="h-[15px] w-[15px] sm:h-[18px] sm:w-[18px]"
          viewBox="0 0 23 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() =>
            singleSelect ? clearFilters(undefined) : clearFilters(index)
          }
        >
          <path
            className="stroke-white"
            d="M4.05273 3.55276L18.9999 18.5"
            stroke-width="5"
            stroke-linecap="square"
            stroke-linejoin="round"
          />
          <path
            className="stroke-white"
            d="M19 3.55276L4.05279 18.5"
            stroke-width="5"
            stroke-linecap="square"
            stroke-linejoin="round"
          />
        </svg>
      )}
      <Mono
        children={children}
        className="flex w-full justify-start leading-0"
      />
    </div>
  );
};
