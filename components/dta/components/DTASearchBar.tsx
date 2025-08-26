import React from "react";
import { cn } from "@/lib/cn";

type DTASearchBarProps = {
  className?: string;
};

export const DTASearchBar = ({ className }: DTASearchBarProps) => {
  return (
    <div className={cn("mb-[20px] w-[100%]", className)}>
      <div className="relative w-[100%]">
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Type keyword here"
          className="w-[100%] border-[2px] border-dotted border-dta-about-foreground px-[15px] py-[10px] text-20 text-dta-about-foreground placeholder:opacity-70 focus:border-dta-search-foreground focus:ring-0 focus:outline-none 700:px-[20px] 700:py-[15px] 700:text-26"
          required
        />
        <img
          alt="search icon"
          className="height-[auto] absolute top-[33%] right-[15px] w-[20px] 700:right-[20px] 700:w-[25px]"
          src="/icons/search-dta-green.svg"
        />
      </div>
    </div>
  );
};
