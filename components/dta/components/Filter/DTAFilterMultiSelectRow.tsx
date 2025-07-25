"use client";

import clsx from "clsx";
import React, { useState } from "react";
import { DTAFilterMultiSelect } from "@/components/dta/components/Filter/DTAFilterMultiSelect";
import { DTAFilterMultiSelectDropdown } from "@/components/dta/components/Filter/DTAFilterMultiSelectDropdown";

type multiFilterType =
  | "alphabet"
  | "country"
  | "birthPlace"
  | "institutionType"
  | "year"
  | "yearOfStudy";

type MultiFilterArrayProps = {
  multiFilterType: multiFilterType;
  filters: Array<string>;
};

type DTAFilterMultiRowProps = {
  activeFilters: string[][];
  toggleFilter: (groupIndex: number, filterValue: string) => void;
  clearFilters: (groupIndex: number) => void;
  colorTheme: "people" | "practices" | "institutions";
  filtersInfo: Array<MultiFilterArrayProps>;
};

export const DTAFilterMultiSelectRow = ({
  colorTheme,
  filtersInfo,
  activeFilters,
  toggleFilter,
  clearFilters,
}: DTAFilterMultiRowProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  return (
    <div className="w-full">
      {/* Filter buttons in a row */}
      <div
        className={clsx(
          "grid w-full gap-[10px] lg:gap-[20px]",
          colorTheme === "practices" ? "lg:grid-cols-2" : "lg:grid-cols-3",
        )}
      >
        {filtersInfo.map((item, i) => (
          <DTAFilterMultiSelect
            setActiveIndex={setActiveIndex}
            key={i}
            index={i}
            activeFilters={activeFilters}
            activeIndex={activeIndex}
            toggleFilter={toggleFilter}
            clearFilters={clearFilters}
            multiFilterType={item.multiFilterType}
            filters={item.filters}
            colorTheme={colorTheme}
          />
        ))}
      </div>

      {/* Dropdowns in a stacked block that spans full width */}
      {/* Only visible on desktop, mobile dropdowns are in each multi select component */}
      <div className="mt-[10px] hidden sm:block">
        {filtersInfo.map((item, i) => (
          <div key={i} className={activeIndex === i ? "block" : "hidden"}>
            <DTAFilterMultiSelectDropdown
              groupIndex={i}
              toggleFilter={toggleFilter}
              activeFilters={activeFilters}
              multiFilterType={item.multiFilterType}
              filters={item.filters}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
