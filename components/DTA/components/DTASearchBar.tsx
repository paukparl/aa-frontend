import clsx from "clsx";
import React, { useState } from "react";

type DTASearchBarProps = {
  className?: string;
};

export const DTASearchBar = ({ className }: DTASearchBarProps) => {
  return (
    <div className={clsx(className, "relative mb-[20px] w-[100%]")}>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Type keyword here"
        className="text-dta-about-foreground focus:border-dta-search-foreground border-dta-about-foreground w-[100%] border-[2px] border-dotted px-[15px] py-[10px] text-[20px] placeholder:opacity-70 focus:ring-0 focus:outline-none sm:px-[20px] sm:py-[15px] sm:text-[26px]"
        required
      />
      <img
        className="height-[auto] absolute top-[33%] right-[15px] w-[20px] sm:right-[20px] sm:w-[25px]"
        src="/icons/search-dta-green.svg"
      />
    </div>
  );
};
