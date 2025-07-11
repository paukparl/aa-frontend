import clsx from "clsx";
import * as React from "react";
import DTACarousel from "@/components/DTA/layouts/DTACarousel";
import DTAContentSingleCol from "@/components/DTA/layouts/DTAContentSingleCol";
import { H1 } from "@/components/Typography/H1";
import TipinHeader from "@/components/globals/layouts/TipinHeader";

type DTAAboutProps = {
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

export default ({ className }: DTAAboutProps) => {
  return (
    <div
      className={clsx(
        className,
        "text-dta-about-foreground flex min-h-[100vh] w-full flex-col gap-[40px] bg-[rgba(255,255,255,.9)] py-[30px] backdrop-blur-lg lg:w-[90%]",
      )}
    >
      <TipinHeader
        className="px-[30px]"
        pageTitle="About the Archive"
        breadcrumbLinks={[{ title: "DTA Archive" }]}
        colorTheme="dta-about"
      />
      <H1 className="px-[30px]" children="About the Archive" />
      <DTAContentSingleCol
        className="px-[30px]"
        children="The Archive Lab examines alternative organisational approaches to history and artefacts, as means of challenging received narratives and examining the role of the AA in the perpetuation of abiding Western European-centered readings of history and culture in architectural education. The Lab brings together individual and unit- and programme-wide initiatives that explore strategies for decolonisation and the diasporic experience, and investigate their impact on the built environment and cultural production."
      />
      <DTACarousel carouselSlides={mockCarouselSlides} />
    </div>
  );
};
