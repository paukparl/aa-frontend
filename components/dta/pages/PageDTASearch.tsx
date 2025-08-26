import * as React from "react";
// import { DTARelatedContent } from "@/components/dta/components/DTARelatedContent";
import { DTASearchBar } from "@/components/dta/components/DTASearchBar";
// import { TipinHeader } from "@/components/globals/layouts/TipinHeader";
import { cn } from "@/lib/cn";

type PageDTASearchProps = {
  className?: string;
};

export const PageDTASearch = ({ className }: PageDTASearchProps) => {
  return (
    <div
      className={cn(
        className,
        "flex min-h-[100vh] w-full flex-col bg-[rgba(255,255,255,.9)] pb-[50px] text-dta-about-foreground backdrop-blur-lg 700:pb-[75px] 1280:w-[90%]",
      )}
    >
      <div className="flex flex-col p-(--padding)">
        {/* <TipinHeader
          pageTitle="Search"
          breadcrumbLinks={[{ title: "DTA Archive" }]}
          colorTheme="dta-search"
        /> */}
        <DTASearchBar />
        <h1 className="h1">Search</h1>
      </div>
      <div className="flex flex-col gap-(--padding) p-(--padding)">
        {/* <DTARelatedContent colorTheme="people" gridType="people" />
        <DTARelatedContent colorTheme="people" gridType="practices" />
        <DTARelatedContent colorTheme="people" gridType="institutions" />
        <DTARelatedContent colorTheme="people" gridType="collections" /> */}
      </div>
    </div>
  );
};
