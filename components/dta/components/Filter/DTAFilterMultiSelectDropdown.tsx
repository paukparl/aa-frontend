import React from "react";
import { cn } from "@/lib/cn";

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
  const filterTypeDict = {
    alphabet: {
      className: "grid grid-cols-5 700:flex flex-wrap",
    },
    country: {
      className:
        "grid grid-cols-1 700:grid-cols-2 1024:grid-cols-3 1280:grid-cols-4",
    },
    birthPlace: {
      className:
        "grid grid-cols-1 700:grid-cols-2 1024:grid-cols-3 1280:grid-cols-4",
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
      className={cn(
        className,
        "mt-[10px] w-full border border-dashed bg-white px-[15px] py-[10px] 700:mt-[20px] 700:p-[15px]",
      )}
    >
      <ul
        role="listbox"
        className={cn(
          "gap-[10px] 700:gap-[15px]",
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
              className={cn(
                "cursor-pointer",
                activeFilters[groupIndex].includes(filter)
                  ? "underline decoration-dotted underline-offset-3"
                  : "hover:underline hover:decoration-dotted hover:underline-offset-3",
              )}
            >
              <span className="mono">{filter}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
