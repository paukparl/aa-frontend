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
  index: number;
  activeIndex: number | null;
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
}: DTAFilterMultiProps) => {
  const open = activeIndex === index;
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

  const filterState = open
    ? "expanded"
    : activeFilters.length > 0
      ? "applied"
      : "minimized";

  const handleToggle = (filter: string) => {
    setActiveFilters((current) => {
      if (current.includes(filter)) {
        return current.filter((f) => f !== filter);
      } else {
        return [...current, filter];
      }
    });
  };

  const buttonLabel =
    activeFilters.length === 0
      ? filterTypeDict[multiFilterType].emptyLabel
      : activeFilters.length <= filterTypeDict[multiFilterType].maxFilters
        ? `${filterTypeDict[multiFilterType].filterLabel}${activeFilters.join(", ")}`
        : `${filterTypeDict[multiFilterType].filterLabel}${activeFilters.length} selected`;

  return (
    <Collapsible.Root
      open={open}
      onOpenChange={(o) => setActiveIndex(o ? index : null)}
    >
      <Collapsible.Trigger asChild>
        <button aria-expanded={open} type="button" className="w-full">
          <DTAFilterButton
            filterState={filterState}
            colorTheme={colorTheme}
            children={buttonLabel}
          />
        </button>
      </Collapsible.Trigger>

      {/* Dropdowns under each button */}
      {/* Only visible on mobile, full-width desktop dropdowns are in the parent row component */}
      <Collapsible.Content
        className={clsx(
          "relative mt-[10px] w-full border border-dashed border-gray-400 bg-white p-2 sm:mt-[30px] sm:hidden",
        )}
      >
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
      </Collapsible.Content>
    </Collapsible.Root>
  );
};
