import clsx from "clsx";
import * as React from "react";
import { DTARelatedContent } from "@/components/DTA/components/DTARelatedContent";
import { DTASearchBar } from "@/components/DTA/components/DTASearchBar";
import { H1 } from "@/components/Typography/H1";
import { TipinHeader } from "@/components/globals/layouts/TipinHeader";

type PageDTASearchProps = {
  className?: string;
};

export const PageDTASearch = ({ className }: PageDTASearchProps) => {
  return (
    <div
      className={clsx(
        className,
        "text-dta-about-foreground flex min-h-[100vh] w-full flex-col bg-[rgba(255,255,255,.9)] pb-[50px] backdrop-blur-lg sm:pb-[75px] lg:w-[90%]",
      )}
    >
      <div className="flex flex-col p-[10px] sm:p-[30px]">
        <TipinHeader
          pageTitle="Search"
          breadcrumbLinks={[{ title: "DTA Archive" }]}
          colorTheme="dta-search"
        />
        <DTASearchBar />
        <H1 children="Search" />
      </div>
      <div className="flex flex-col gap-[20px] p-[10px] sm:gap-[70px] sm:p-[30px]">
        <DTARelatedContent colorTheme="people" gridType="people" />
        <DTARelatedContent colorTheme="people" gridType="practices" />
        <DTARelatedContent colorTheme="people" gridType="institutions" />
        <DTARelatedContent colorTheme="people" gridType="collections" />
      </div>
    </div>
  );
};
