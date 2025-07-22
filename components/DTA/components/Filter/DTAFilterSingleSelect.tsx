"use client";

import * as Collapsible from "@radix-ui/react-collapsible";
import clsx from "clsx";
import React, { useState } from "react";
import { Mono } from "@/components/Typography/Mono";
import { DTAFilterButton } from "./DTAFilterButton";

type filterDataType = {
  title: string;
  description: string;
  imgSrc: string;
  imgAlt: string;
};
type DTAFilterSingleSelectProps = {
  activeIndex: number | null;
  clearFilter: () => void;
  setFilter: (index: number) => void;
  filterData: Array<filterDataType>;
};

export const DTAFilterSingleSelect = ({
  filterData,
  activeIndex,
  setFilter,
  clearFilter,
}: DTAFilterSingleSelectProps) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <Collapsible.Root open={open} onOpenChange={() => setOpen(!open)}>
      <Collapsible.Trigger asChild>
        <button aria-expanded={open} type="button" className="w-full">
          <DTAFilterButton
            filterState={
              !open && activeIndex === null
                ? "minimized"
                : open && activeIndex === null
                  ? "expanded"
                  : "applied"
            }
            colorTheme={"collections"}
            children={"All Collections"}
            clearFilters={clearFilter}
          />
        </button>
      </Collapsible.Trigger>
      <Collapsible.Content>
        <div
          className={clsx(
            activeIndex === null
              ? "mt-[10px] w-full border border-dashed bg-white px-[15px] py-[10px] sm:mt-[20px] sm:p-[15px]"
              : "hidden",
          )}
        >
          <ul role="listbox" className={clsx("gap-[10px] sm:gap-[15px]")}>
            {filterData.map((filter, index) => (
              <li key={filter.title}>
                <button
                  type="button"
                  role="option"
                  onClick={() => setFilter(index)}
                  className="cursor-pointer hover:underline hover:decoration-dotted hover:underline-offset-3"
                >
                  <Mono children={filter.title} />
                </button>
              </li>
            ))}
          </ul>
        </div>
        {activeIndex !== null && (
          <div className="mt-[10px] grid w-full grid-cols-1 gap-[20px] border border-dashed bg-white px-[15px] py-[10px] sm:mt-[20px] sm:p-[15px] lg:grid-cols-[3fr_2fr] xl:grid-cols-[1fr_1fr]">
            <div>
              <div className="mb-[10px] flex sm:mb-[20px]">
                <button
                  onClick={() => {
                    clearFilter();
                    setOpen(false);
                  }}
                >
                  <svg
                    className="h-[15px] w-[15px] sm:h-[18px] sm:w-[18px]"
                    viewBox="0 0 23 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="stroke-dta-collections-foreground"
                      d="M4.05273 3.55276L18.9999 18.5"
                      stroke-width="5"
                      stroke-linecap="square"
                      stroke-linejoin="round"
                    />
                    <path
                      className="stroke-dta-collections-foreground"
                      d="M19 3.55276L4.05279 18.5"
                      stroke-width="5"
                      stroke-linecap="square"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
                <Mono
                  className="text-dta-collections-foreground ml-[10px]"
                  children={filterData[activeIndex].title}
                />
              </div>
              <Mono
                className="text-dta-collections-foreground"
                children={filterData[activeIndex].description}
              />
            </div>
            <img
              src={activeIndex !== null ? filterData[activeIndex].imgSrc : ""}
            />
          </div>
        )}
      </Collapsible.Content>
    </Collapsible.Root>
  );
};
