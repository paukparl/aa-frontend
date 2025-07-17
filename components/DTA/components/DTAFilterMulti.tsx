"use client";

import * as Collapsible from "@radix-ui/react-collapsible";
import clsx from "clsx";
import * as React from "react";
import { Mono } from "@/components/Typography/Mono";
import DTAFilterButton from "./DTAFilterButton";

type multiFilterType =
  | "alphabet"
  | "country"
  | "birthPlace"
  | "institutionType"
  | "year"
  | "yearOfStudy";

type DTAFilterMultiProps = {
  colorTheme: "people" | "practices" | "institutions";
  className?: string;
  multiFilterType: multiFilterType;
  filters: Array<string>;
};

export const DTAFilterMulti = ({
  colorTheme,
  className,
  multiFilterType,
  filters,
}: DTAFilterMultiProps) => {
  const [open, setOpen] = React.useState(false);
  const [activeFilters, setActiveFilters] = React.useState<Array<string>>([]);
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
  // Determine filterState: expanded if open, applied if any letters selected, else minimized
  const filterState = open
    ? "expanded"
    : activeFilters.length > 0
      ? "applied"
      : "minimized";

  // Toggle filter selection
  const handleToggle = (filter: string) => {
    setActiveFilters((current) => {
      if (current.includes(filter)) {
        return current.filter((f) => f !== filter);
      } else {
        return [...current, filter];
      }
    });
  };

  // Render button label
  const buttonLabel =
    activeFilters.length === 0
      ? filterTypeDict[multiFilterType].emptyLabel
      : activeFilters.length <= filterTypeDict[multiFilterType].maxFilters
        ? `${filterTypeDict[multiFilterType].filterLabel}${activeFilters.join(", ")}`
        : `${filterTypeDict[multiFilterType].filterLabel}${activeFilters.length} selected`;

  return (
    <Collapsible.Root open={open} onOpenChange={setOpen} className={className}>
      <Collapsible.Trigger asChild>
        <button
          aria-expanded={open}
          aria-controls="multi-select-filter-button"
          type="button"
          className="w-full"
        >
          <DTAFilterButton
            filterState={filterState}
            colorTheme={colorTheme}
            children={buttonLabel}
          />
        </button>
      </Collapsible.Trigger>

      <Collapsible.Content
        id="multi-select-filter-content"
        className="absolute left-[0px] mt-[20px] w-fit border border-dashed border-gray-400 bg-white p-2 sm:mt-[30px]"
      >
        <ul
          role="listbox"
          aria-label="Multi-Select filter"
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
                <Mono children={filter} />
              </button>
            </li>
          ))}
        </ul>
      </Collapsible.Content>
    </Collapsible.Root>
  );
};
