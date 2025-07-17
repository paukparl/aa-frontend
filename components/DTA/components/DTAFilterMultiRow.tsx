"use client";

// Split out dropdown content for full-width rendering
import clsx from "clsx";
import React, { useState } from "react";
import { DTAFilterMultiSelect } from "@/components/DTA/components/DTAFilterMultiSelect";
import { Mono } from "@/components/Typography/Mono";

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
  colorTheme: "people" | "practices" | "institutions";
  filtersInfo: Array<MultiFilterArrayProps>;
};

export const DTAFilterMultiRow = ({
  colorTheme,
  filtersInfo,
}: DTAFilterMultiRowProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="w-full">
      {/* Filter buttons in a row */}
      <div className="grid w-full gap-[10px] lg:grid-cols-3 lg:gap-[20px]">
        {filtersInfo.map((item, i) => (
          <DTAFilterMultiSelect
            key={i}
            index={i}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
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
            <DTAFilterDropdownContent
              multiFilterType={item.multiFilterType}
              filters={item.filters}
              colorTheme={colorTheme}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const filterTypeDict = {
  alphabet: {
    className: "grid grid-cols-5 sm:flex flex-wrap",
  },
  country: {
    className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
  },
  birthPlace: {
    className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
  },
  institutionType: {
    className: "grid",
  },
  year: {
    className: "grid grid-cols-4",
  },
  yearOfStudy: {
    className: "grid grid-cols-3",
  },
};

function DTAFilterDropdownContent({
  multiFilterType,
  filters,
  colorTheme,
}: {
  multiFilterType: multiFilterType;
  filters: Array<string>;
  colorTheme: "people" | "practices" | "institutions";
}) {
  const [activeFilters, setActiveFilters] = React.useState<string[]>([]);

  const handleToggle = (filter: string) => {
    setActiveFilters((prev) =>
      prev.includes(filter)
        ? prev.filter((f) => f !== filter)
        : [...prev, filter],
    );
  };

  return (
    <div className="w-full border border-dashed border-gray-400 bg-white p-2 sm:mt-[10px]">
      <ul
        role="listbox"
        className={clsx(
          "gap-[20px]",
          filterTypeDict[multiFilterType].className,
        )}
      >
        {filters.map((filter) => (
          <li key={filter}>
            <button
              type="button"
              role="option"
              aria-selected={activeFilters.includes(filter)}
              onClick={() => handleToggle(filter)}
              className={clsx(
                "cursor-pointer px-2 py-1",
                activeFilters.includes(filter)
                  ? "font-bold underline"
                  : "hover:underline",
              )}
            >
              <Mono children={filter.toUpperCase()} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
