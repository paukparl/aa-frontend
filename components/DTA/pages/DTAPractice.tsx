import clsx from "clsx";
import * as React from "react";
import { DTARelatedContent } from "@/components/DTA/components/DTARelatedContent";
import { DTATipinMap } from "@/components/DTA/components/DTATipinMap";
import { Body } from "@/components/Typography/Body";
import { H1 } from "@/components/Typography/H1";
import { TipinHeader } from "@/components/globals/layouts/TipinHeader";

type DTAPracticeProps = {
  className?: string;
};

const mockObjectData = [
  {
    title: "Name of Object",
    image: true,
    imgSrc: "/storybook/DTA/components/Grid/dta_grid_collections_1.jpg",
  },
  {
    title: "Name of Object",
    image: true,
    imgSrc: "/storybook/DTA/components/Grid/dta_grid_collections_2.jpg",
  },
  {
    title: "Name of Object",
    image: true,
    imgSrc: "/storybook/DTA/components/Grid/dta_grid_collections_3.jpg",
  },
];

const DTAPracticeProps = [
  {
    title: "Name of Object",
    image: true,
    imgSrc: "/storybook/DTA/components/Grid/dta_grid_collections_1.jpg",
  },
  {
    title: "Name of Object",
    image: true,
    imgSrc: "/storybook/DTA/components/Grid/dta_grid_collections_2.jpg",
  },
  {
    title: "Name of Object",
    image: true,
    imgSrc: "/storybook/DTA/components/Grid/dta_grid_collections_3.jpg",
  },
];

export const DTAPractice = ({ className }: DTAPracticeProps) => {
  return (
    <div
      className={clsx(
        className,
        "text-dta-practices-foreground flex min-h-[100vh] w-full flex-col bg-[rgba(255,255,255,.9)] p-[10px] backdrop-blur-lg sm:p-[30px] lg:w-[75%]",
      )}
    >
      <TipinHeader
        pageTitle="Practice Name"
        breadcrumbLinks={[{ title: "DTA Archive" }, { title: "Practices" }]}
        colorTheme="dta-practices"
      />
      <div className="flex flex-col gap-[20px] sm:gap-[30px]">
        <H1 tipIn children="Ministry of Works" />
        <Body children="Abell House, John Islip Street, London, UK" />
        <div className="flex flex-col gap-[30px] pb-[20px] lg:gap-[50px]">
          <DTATipinMap colorTheme="practices" />
          <DTARelatedContent gridType="people" colorTheme="practices" />
          <DTARelatedContent gridType="collections" colorTheme="practices" />
          <DTARelatedContent gridType="practices" colorTheme="practices" />
        </div>
      </div>
    </div>
  );
};
