import clsx from "clsx";
import * as React from "react";
import DTARelatedContent from "@/components/DTA/layouts/DTARelatedContent";
import { Body } from "@/components/Typography/Body";
import { H1 } from "@/components/Typography/H1";
import MediaGallery from "@/components/globals/components/MediaGallery";
import TipinHeader from "@/components/globals/layouts/TipinHeader";

type DTAObjectProps = {
  className?: string;
};
const DTAObjectProps = [
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

export default ({ className }: DTAObjectProps) => {
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
        "text-dta-collections-foreground flex min-h-[100vh] w-full flex-col bg-[rgba(255,255,255,.9)] px-[30px] py-[30px] pb-[50px] backdrop-blur-lg sm:pb-[70px] lg:w-[75%]",
      )}
    >
      <TipinHeader
        pageTitle="Object Title"
        breadcrumbLinks={[{ title: "DTA Archive" }, { title: "Collections" }]}
        colorTheme="dta-collections"
      />
      <H1 tipIn className="pt-[30px]" children="Title, Year" />
      <Body
        className="pt-[30px]"
        children="Brief sentence describing what collections means in the context of DTA. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <MediaGallery
        slides={mockSlideData}
        className="py-[10px]"
        colorTheme="dta-collections"
      />
      <div className="mt-[30px] flex flex-col gap-[30px] lg:gap-[50px]">
        <DTARelatedContent gridType="people" colorTheme="collections" />
        <DTARelatedContent gridType="institutions" colorTheme="collections" />
        <DTARelatedContent gridType="practices" colorTheme="collections" />
      </div>
    </div>
  );
};
