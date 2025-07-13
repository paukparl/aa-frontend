import clsx from "clsx";
import * as React from "react";
import DTATipinMap from "@/components/DTA/components/DTATipinMap";
import DTARelatedContent from "@/components/DTA/layouts/DTARelatedContent";
import { Body } from "@/components/Typography/Body";
import { H1 } from "@/components/Typography/H1";
import TipinHeader from "@/components/globals/layouts/TipinHeader";

type DTAPersonProps = {
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

const DTAPersonProps = [
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

export default ({ className }: DTAPersonProps) => {
  return (
    <div
      className={clsx(
        className,
        "text-dta-people-foreground flex min-h-[100vh] w-full flex-col bg-[rgba(255,255,255,.9)] px-[30px] py-[30px] pb-[50px] backdrop-blur-lg sm:pb-[70px] lg:w-[75%]",
      )}
    >
      <TipinHeader
        pageTitle="Person Name"
        breadcrumbLinks={[{ title: "DTA Archive" }, { title: "People" }]}
        colorTheme="dta-people"
      />
      <H1 tipIn className="pt-[30px]" children="Object Title, Year" />
      <Body
        className="pt-[30px]"
        children="Brief sentence describing what person means in the context of DTA. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <div className="mt-[30px] flex flex-col gap-[30px] lg:gap-[50px]">
        <DTATipinMap colorTheme="institutions" />
        <DTARelatedContent gridType="people" colorTheme="institutions" />
        <DTARelatedContent gridType="collections" colorTheme="institutions" />
        <DTARelatedContent gridType="practices" colorTheme="institutions" />
      </div>
    </div>
  );
};
