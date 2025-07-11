import clsx from "clsx";
import * as React from "react";
import DTAContentSingleCol from "@/components/DTA/layouts/DTAContentSingleCol";
import { H1 } from "@/components/Typography/H1";
import TipinHeader from "@/components/globals/layouts/TipinHeader";

type DTAPracticesProps = {
  className?: string;
};

const mockCarouselSlides = [
  {
    imgSrc: "/storybook/DTA/components/Carousel/dta_carousel_1.png",
    imgAlt: "Image of a person",
    caption: "Caption Lorem Ipsum Dolor",
  },
  {
    imgSrc: "/storybook/DTA/components/Carousel/dta_carousel_2.png",
    imgAlt: "Image of a person",
    caption: "Caption Lorem Ipsum Dolor",
  },
  {
    imgSrc: "/storybook/DTA/components/Carousel/dta_carousel_3.jpg",
    imgAlt: "Image of a person",
    caption: "Caption Lorem Ipsum Dolor",
  },
  {
    imgSrc: "/storybook/DTA/components/Carousel/dta_carousel_4.jpg",
    imgAlt: "Image of a person",
    caption: "Caption Lorem Ipsum Dolor",
  },
  {
    imgSrc: "/storybook/DTA/components/Carousel/dta_carousel_5.jpg",
    imgAlt: "Image of a person",
    caption: "Caption Lorem Ipsum Dolor",
  },
  {
    imgSrc: "/storybook/DTA/components/Carousel/dta_carousel_6.jpg",
    imgAlt: "Image of a person",
    caption: "Caption Lorem Ipsum Dolor",
  },
];

export default ({ className }: DTAPracticesProps) => {
  return (
    <div
      className={clsx(
        className,
        "text-dta-practices-foreground flex min-h-[100vh] w-full flex-col bg-[rgba(255,255,255,.9)] py-[30px] backdrop-blur-lg lg:w-[90%]",
      )}
    >
      <TipinHeader
        className="px-[30px]"
        pageTitle="Practices"
        breadcrumbLinks={[{ title: "DTA Archive" }]}
        colorTheme="dta-practices"
      />
      <H1 className="px-[30px] pb-[30px]" children="Practices" />
      <DTAContentSingleCol
        className="px-[30px]"
        children="Brief sentence describing what practices means in the context of DTA. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      {/* # All 570 records */}
      {/* <DTAGrid
        className="px-[30px]"
        children="Brief sentence describing what people means in the context of DTA. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      /> */}
      {/* pagination footer */}
    </div>
  );
};
