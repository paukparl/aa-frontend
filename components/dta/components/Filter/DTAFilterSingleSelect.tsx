"use client";

import * as Collapsible from "@radix-ui/react-collapsible";
import React, { useState } from "react";
import { cn } from "@/lib/cn";
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
            clearFilter={clearFilter}
          >
            All Collections
          </DTAFilterButton>
        </button>
      </Collapsible.Trigger>
      <Collapsible.Content>
        <div
          className={cn(
            activeIndex === null
              ? "700:mt-[20px] 700:p-[15px] mt-[10px] w-full border border-dashed bg-white px-[15px] py-[10px]"
              : "hidden",
          )}
        >
          <ul role="listbox" className={cn("700:gap-[15px] gap-[10px]")}>
            {filterData.map((filter, index) => (
              <li key={filter.title}>
                <button
                  type="button"
                  role="option"
                  onClick={() => setFilter(index)}
                  className="cursor-pointer hover:underline hover:decoration-dotted hover:underline-offset-3"
                >
                  <span className="mono">{filter.title}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
        {activeIndex !== null && (
          <div className="700:mt-[20px] 700:p-[15px] 1280:grid-cols-[3fr_2fr] mt-[10px] grid w-full grid-cols-1 gap-[20px] border border-dashed bg-white px-[15px] py-[10px] xl:grid-cols-[1fr_1fr]">
            <div>
              <div className="700:mb-[20px] mb-[10px] flex">
                <button
                  onClick={() => {
                    clearFilter();
                    setOpen(false);
                  }}
                >
                  <svg
                    className="700:h-[18px] 700:w-[18px] h-[15px] w-[15px]"
                    viewBox="0 0 23 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="stroke-dta-collections-foreground"
                      d="M4.05273 3.55276L18.9999 18.5"
                      strokeWidth="5"
                      strokeLinecap="square"
                      strokeLinejoin="round"
                    />
                    <path
                      className="stroke-dta-collections-foreground"
                      d="M19 3.55276L4.05279 18.5"
                      strokeWidth="5"
                      strokeLinecap="square"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <span className="mono text-dta-collections-foreground ml-[10px]">
                  {filterData[activeIndex].title}
                </span>
              </div>
              <span className="mono text-dta-collections-foreground">
                {filterData[activeIndex].description}
              </span>
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
