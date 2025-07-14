"use client";

import * as Collapsible from "@radix-ui/react-collapsible";
import clsx from "clsx";
import * as React from "react";
import { Mono } from "@/components/Typography/Mono";
import DTAFilterButton from "./DTAFilterButton";

type DTAFilterCollectionsProps = {
  className?: string;
};

export const DTAFilterCollections = ({
  className,
}: DTAFilterCollectionsProps) => {
  const mockCollectionsData = [
    "Otto Koenigsberger Collection",
    "Student Work",
    "Slide Library",
    "DTA Publications and Documents",
    "External Collections",
  ];
  const [open, setOpen] = React.useState(false);
  const [activeFilters, setactiveFilters] = React.useState<string[]>([]);

  // Determine filterState: expanded if open, applied if any letters selected, else minimized
  const filterState = open
    ? "expanded"
    : activeFilters.length > 0
      ? "applied"
      : "minimized";

  // Toggle letter selection
  const handleToggle = (letter: string) => {
    setactiveFilters((current) => {
      if (current.includes(letter)) {
        return current.filter((l) => l !== letter);
      } else {
        return [...current, letter];
      }
    });
  };

  // Render button label
  const buttonLabel =
    activeFilters.length === 0
      ? "Filter by collection"
      : activeFilters.length <= 3
        ? `Filter: ${activeFilters.map((l) => l.toUpperCase()).join(", ")}`
        : `Filter: ${activeFilters.length} selected`;

  return (
    <Collapsible.Root open={open} onOpenChange={setOpen} className={className}>
      <Collapsible.Trigger asChild>
        <button
          aria-expanded={open}
          aria-controls="collection-filter-content"
          type="button"
          className="w-fit"
        >
          <DTAFilterButton
            filterState={filterState}
            colorTheme="collections"
            children={buttonLabel}
            className="w-fit"
          />
        </button>
      </Collapsible.Trigger>

      <Collapsible.Content
        id="collection-filter-content"
        className="mt-1 w-fit border border-dashed border-gray-400 bg-white p-2"
      >
        <ul
          role="listbox"
          aria-label="collection filter"
          className="flex flex-wrap gap-2"
        >
          {mockCollectionsData.map((filter) => (
            <li key={filter}>
              <button
                type="button"
                role="option"
                aria-selected={activeFilters.includes(filter)}
                onClick={() => handleToggle(filter)}
                className={clsx(
                  "cursor-pointer px-2 py-1",
                  activeFilters.includes(filter)
                    ? "underline"
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
