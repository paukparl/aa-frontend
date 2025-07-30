import clsx from "clsx";
import * as React from "react";
import { DTARelatedContent } from "@/components/dta/components/DTARelatedContent";
import { MediaGallery } from "@/components/globals/components/MediaGallery";
import { TipinHeader } from "@/components/globals/layouts/TipinHeader";

type DTAObjectProps = {
  className?: string;
};
const DTAObjectProps = [
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

export const PageDTAObject = ({ className }: DTAObjectProps) => {
  const mockSlideData = [
    {
      src: "/storybook/Globals/components/mediagallery/slide1.jpg",
      caption:
        "Miller J Frampton K, Health Centre Iraq, 1955, Otto Koenigsberger Collection",
    },
    {
      src: "/storybook/Globals/components/mediagallery/slide2.jpg",
      caption:
        "Miller K Frampton, Health Centre Iraq, 1955, Otto Koenigsberger Collection",
    },
    {
      src: "/storybook/Globals/components/mediagallery/slide3.jpg",
      caption:
        "Hal J Lawson, Health Centre Iraq, 1955, Otto Koenigsberger Collection",
    },
    {
      src: "/storybook/Globals/components/mediagallery/slide4.jpg",
      caption:
        "Miller J Frampton K, Health Centre Iraq, 1955, Otto Koenigsberger Collection",
    },
    {
      src: "/storybook/Globals/components/mediagallery/slide5.jpg",
      caption:
        "Miller J Frampton K, Health Centre Iraq, 1955, Otto Koenigsberger Collection",
    },
  ];
  return (
    <div
      className={clsx(
        className,
        "text-dta-collections-foreground 700:p-[30px] 1280:w-[75%] flex min-h-[100vh] w-full flex-col bg-[rgba(255,255,255,.9)] p-[10px] backdrop-blur-lg",
      )}
    >
      <TipinHeader
        pageTitle="Object Title"
        breadcrumbLinks={[{ title: "DTA Archive" }, { title: "Collections" }]}
        colorTheme="dta-collections"
      />
      <div className="700:gap-[30px] flex flex-col gap-[20px]">
        <h1 className="tipin">Title, Year</h1>
        <span className="body">
          Brief sentence describing what collections means in the context of
          DTA. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </span>
        <MediaGallery slides={mockSlideData} colorTheme="dta-collections" />
        <div className="1280:gap-[50px] mt-[20px] flex flex-col gap-[30px] pb-[20px]">
          <DTARelatedContent gridType="people" colorTheme="collections" />
          <DTARelatedContent gridType="institutions" colorTheme="collections" />
          <DTARelatedContent gridType="practices" colorTheme="collections" />
        </div>
      </div>
    </div>
  );
};
