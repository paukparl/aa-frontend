"use client";

import * as Collapsible from "@radix-ui/react-collapsible";
import * as React from "react";
import { DTAFilterMultiSelectDropdown } from "@/components/dta/components/Filter/DTAFilterMultiSelectDropdown";
import { DTAFilterButton } from "./DTAFilterButton";

type multiFilterType =
  | "alphabet"
  | "country"
  | "birthPlace"
  | "institutionType"
  | "year"
  | "yearOfStudy";

type DTAFilterMultiSelectProps = {
  className?: string;
  activeFilters: string[][];
  index: number;
  activeIndex: number | null;
  toggleFilter: (dropdownIndex: number, filterValue: string) => void;
  clearFilters: (groupIndex: number) => void;
  setActiveIndex: (index: number | null) => void;
  colorTheme: "people" | "practices" | "institutions";
  multiFilterType: multiFilterType;
  filters: Array<string>;
};

export const DTAFilterMultiSelect = ({
  index,
  activeIndex,
  setActiveIndex,
  colorTheme,
  multiFilterType,
  filters,
  activeFilters,
  toggleFilter,
  clearFilters,
  className,
}: DTAFilterMultiSelectProps) => {
  const open = activeIndex === index;

  const filterTypeDict = {
    alphabet: {
      emptyLabel: "Filter by alphabet",
      filterLabel: "Filters: ",
      maxFilters: 4,
      className: "grid grid-cols-5 sm:flex flex-wrap",
    },
    country: {
      emptyLabel: "Country",
      filterLabel: "Country: ",
      maxFilters: 1,
      className:
        "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
    },
    birthPlace: {
      emptyLabel: "Birth Place",
      filterLabel: "Birth Place: ",
      maxFilters: 1,
      className:
        "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
    },
    institutionType: {
      emptyLabel: "Type",
      filterLabel: "Type: ",
      maxFilters: 1,
      className: "grid",
    },
    year: {
      emptyLabel: "Year",
      filterLabel: "Year: ",
      maxFilters: 2,
      className: "grid grid-cols-4",
    },
    yearOfStudy: {
      emptyLabel: "Year of Study",
      filterLabel: "Year: ",
      maxFilters: 2,
      className: "grid grid-cols-3",
    },
  };

  const filterState = open
    ? "expanded"
    : activeFilters[index].length > 0
      ? "applied"
      : "minimized";

  const buttonLabel =
    activeFilters[index].length === 0
      ? filterTypeDict[multiFilterType].emptyLabel
      : activeFilters[index].length <=
          filterTypeDict[multiFilterType].maxFilters
        ? `${filterTypeDict[multiFilterType].filterLabel}${activeFilters[index].join(", ")}`
        : `${filterTypeDict[multiFilterType].filterLabel}${activeFilters[index].length} selected`;

  return (
    <div className={className}>
      <Collapsible.Root
        open={open}
        onOpenChange={(o) => setActiveIndex(o ? index : null)}
      >
        <Collapsible.Trigger asChild>
          <button aria-expanded={open} type="button" className="w-full">
            <DTAFilterButton
              filterState={filterState}
              colorTheme={colorTheme}
              clearFilters={clearFilters}
              index={index}
            >
              {buttonLabel}
            </DTAFilterButton>
          </button>
        </Collapsible.Trigger>

        {/* Dropdowns under each button */}
        {/* Only visible on mobile, full-width desktop dropdowns are in the parent row component */}
        <Collapsible.Content>
          <DTAFilterMultiSelectDropdown
            groupIndex={index}
            multiFilterType={multiFilterType}
            filters={filters}
            className="sm:hidden"
            activeFilters={activeFilters}
            toggleFilter={toggleFilter}
          />
        </Collapsible.Content>
      </Collapsible.Root>
    </div>
  );
};
