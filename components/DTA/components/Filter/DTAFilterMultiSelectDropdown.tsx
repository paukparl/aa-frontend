import clsx from "clsx";
import React from "react";
import { Mono } from "@/components/Typography/Mono";

type multiFilterType =
  | "alphabet"
  | "country"
  | "birthPlace"
  | "institutionType"
  | "year"
  | "yearOfStudy";
type DTAFilterMultiSelectDropdownProps = {
  groupIndex: number;
  multiFilterType: multiFilterType;
  filters: Array<string>;
  className?: string;
  toggleFilter: (groupIndex: number, filterValue: string) => void;
  activeFilters: string[][];
};

export const DTAFilterMultiSelectDropdown = ({
  multiFilterType,
  filters,
  className,
  toggleFilter,
  activeFilters,
  groupIndex,
}: DTAFilterMultiSelectDropdownProps) => {
  console.log(activeFilters);
  const filterTypeDict = {
    alphabet: {
      className: "grid grid-cols-5 sm:flex flex-wrap",
    },
    country: {
      className:
        "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
    },
    birthPlace: {
      className:
        "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
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

  return (
    <div
      className={clsx(
        className,
        "mt-[10px] w-full border border-dashed bg-white px-[15px] py-[10px] sm:mt-[20px] sm:p-[15px]",
      )}
    >
      <ul
        role="listbox"
        className={clsx(
          "gap-[10px] sm:gap-[15px]",
          filterTypeDict[multiFilterType].className,
        )}
      >
        {filters.map((filter) => (
          <li key={filter}>
            <button
              type="button"
              role="option"
              aria-selected={activeFilters[groupIndex].includes(filter)}
              onClick={() => toggleFilter(groupIndex, filter)}
              className={clsx(
                "cursor-pointer",
                activeFilters[groupIndex].includes(filter)
                  ? "underline decoration-dotted underline-offset-3"
                  : "hover:underline hover:decoration-dotted hover:underline-offset-3",
              )}
            >
              <Mono>{filter}</Mono>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
