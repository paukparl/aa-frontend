import clsx from "clsx";
import * as React from "react";
import { DTARelatedContent } from "@/components/dta/components/DTARelatedContent";
import { DTATipinMap } from "@/components/dta/components/DTATipinMap";
import { TipinHeader } from "@/components/globals/layouts/TipinHeader";

type DTAPracticeProps = {
  className?: string;
};

const DTAPracticeProps = [
  {
    title: "Name of Object",
    image: true,
    imgSrc: "/storybook/dta/components/Grid/dta_grid_collections_1.jpg",
  },
  {
    title: "Name of Object",
    image: true,
    imgSrc: "/storybook/dta/components/Grid/dta_grid_collections_2.jpg",
  },
  {
    title: "Name of Object",
    image: true,
    imgSrc: "/storybook/dta/components/Grid/dta_grid_collections_3.jpg",
  },
];

export const PageDTAPractice = ({ className }: DTAPracticeProps) => {
  return (
    <div
      className={clsx(
        className,
        "text-dta-practices-foreground 700:p-[30px] 1280:w-[75%] flex min-h-[100vh] w-full flex-col bg-[rgba(255,255,255,.9)] p-[10px] backdrop-blur-lg",
      )}
    >
      <TipinHeader
        pageTitle="Practice Name"
        breadcrumbLinks={[{ title: "DTA Archive" }, { title: "Practices" }]}
        colorTheme="dta-practices"
      />
      <div className="700:gap-[30px] flex flex-col gap-[20px]">
        <h1 className="tipin">Ministry of Works</h1>
        <span className="body">Abell House, John Islip Street, London, UK</span>
        <div className="1280:gap-[50px] flex flex-col gap-[30px] pb-[20px]">
          <DTATipinMap colorTheme="practices" />
          <DTARelatedContent gridType="people" colorTheme="practices" />
          <DTARelatedContent gridType="collections" colorTheme="practices" />
          <DTARelatedContent gridType="practices" colorTheme="practices" />
        </div>
      </div>
    </div>
  );
};
