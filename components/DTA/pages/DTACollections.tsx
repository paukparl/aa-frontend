import clsx from "clsx";
import * as React from "react";
import DTAContentSingleCol from "@/components/DTA/layouts/DTAContentSingleCol";
import DTAGrid from "@/components/DTA/layouts/DTAGrid";
import { H1 } from "@/components/Typography/H1";
import { Mono } from "@/components/Typography/Mono";
import TipinHeader from "@/components/globals/layouts/TipinHeader";

type DTACollectionsProps = {
  className?: string;
};

const mockCollectionsData = [
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

export default ({ className }: DTACollectionsProps) => {
  return (
    <div
      className={clsx(
        className,
        "text-dta-collections-foreground flex min-h-[100vh] w-full flex-col bg-[rgba(255,255,255,.9)] py-[30px] backdrop-blur-lg lg:w-[90%]",
      )}
    >
      <TipinHeader
        className="px-[30px]"
        pageTitle="Collections"
        breadcrumbLinks={[{ title: "DTA Archive" }]}
        colorTheme="dta-collections"
      />
      <H1 className="px-[30px]" children="Collections" />
      <DTAContentSingleCol
        className="px-[30px] pt-[30px]"
        children="Brief sentence describing what collections means in the context of DTA. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <Mono children="All 570 records" className="px-[30px] pt-[40px]" />
      <DTAGrid
        type="collections"
        items={mockCollectionsData}
        className="text-dta-collections-foreground px-[30px] pt-[30px]"
      />
      {/* pagination footer */}
    </div>
  );
};
