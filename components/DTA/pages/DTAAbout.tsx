import clsx from "clsx";
import * as React from "react";
import DTACarousel from "@/components/DTA/components/DTACarousel";
import DTAContentDoubleCol from "@/components/DTA/layouts/DTAContentDoubleCol";
import { DTAContentSingleCol } from "@/components/DTA/layouts/DTAContentSingleCol";
import { H1 } from "@/components/Typography/H1";
import { H2 } from "@/components/Typography/H2";
import TipinHeader from "@/components/globals/layouts/TipinHeader";

type DTAAboutProps = {
  className?: string;
};

const mockCarouselSlides = [
  {
    imgSrc: "/storybook/DTA/components/Carousel/dta_carousel_1.png",
    imgAlt: "Image of a person",
    caption:
      "Caption Lorem Ipsum Dolor Caption Lorem Ipsum Dolor Caption Lorem m Dolor",
  },
  {
    imgSrc: "/storybook/DTA/components/Carousel/dta_carousel_2.png",
    imgAlt: "Image of a person",
    caption: "Caption Lorem Ipsum Dolor ",
  },
  {
    imgSrc: "/storybook/DTA/components/Carousel/dta_carousel_3.jpg",
    imgAlt: "Image of a person",
    caption:
      "Caption Lorem Ipsum Dolor Caption Lorem Ipsum Dolor Caption Lorem Ipsum Dolor Caption Lorem Ipsum Dolor Caption Lorem Ipsum Dolor Caption Lorem Ipsum Dolor",
  },
  {
    imgSrc: "/storybook/DTA/components/Carousel/dta_carousel_4.jpg",
    imgAlt: "Image of a person",
    caption: "Caption Lorem Ipsum Caption Lorem Ipsum Dolor",
  },
  {
    imgSrc: "/storybook/DTA/components/Carousel/dta_carousel_5.jpg",
    imgAlt: "Image of a person",
    caption:
      "Caption Lorem Ipsum Dolor Caption Lorem Ipsum Dolor Caption Lorem Ipsum Dolor Caption Lorem Ipsum Dolor Caption Lorem Ipsum Dolor Caption Lorem Ipsum Dolor",
  },
  {
    imgSrc: "/storybook/DTA/components/Carousel/dta_carousel_6.jpg",
    imgAlt: "Image of a person",
    caption:
      "Caption Lorem Ipsum Dolor Caption Lorem Ipsum Dolor Caption Lorem Ipsum Dolor Caption Lorem Ipsum Dolor Caption Lorem Ipsum Dolor Caption Lorem Ipsum Dolor",
  },
];

export default ({ className }: DTAAboutProps) => {
  return (
    <div
      className={clsx(
        className,
        "text-dta-about-foreground flex min-h-[100vh] w-full flex-col bg-[rgba(255,255,255,.9)] pb-[50px] backdrop-blur-lg sm:pb-[75px] lg:w-[90%]",
      )}
    >
      <div className="flex flex-col gap-[20px] p-[10px] sm:gap-[30px] sm:p-[30px]">
        <TipinHeader
          pageTitle="About the Archive"
          breadcrumbLinks={[{ title: "DTA Archive" }]}
          colorTheme="dta-about"
        />
        <H1 children="About the Archive" />
        <DTAContentSingleCol children="The Archive Lab examines alternative organisational approaches to history and artefacts, as means of challenging received narratives and examining the role of the AA in the perpetuation of abiding Western European-centered readings of history and culture in architectural education. The Lab brings together individual and unit- and programme-wide initiatives that explore strategies for decolonisation and the diasporic experience, and investigate their impact on the built environment and cultural production." />
      </div>
      <DTACarousel carouselSlides={mockCarouselSlides} />
      <div className="flex flex-col gap-[20px] p-[10px] sm:gap-[30px] sm:p-[30px]">
        <DTAContentSingleCol children="The first embodiment of this work is the Entangled Archive, a Graham Foundation-funded project to digitise material from the AA Department of Tropical Architecture (DTA, 1950-1972) and provide an online platform for researchers eager to examine the network of global relationships entangled with the DTA, and challenge the orthodoxy of its programme. The project will catalogue existing DTA material held by the AA Archives; make this work available through digitisation and publication in an online database; and contact living alumni to trace the legacy of the DTA discover and preserve missing documents, and to record the experiences of this dispersed international cohort. This resource and the online exhibition of the collated work will act as a springboard for discussion of the role of education in colonial and decolonial projects." />
        <H2 children="Who Are Godwin and Hopwood?" />
        <DTAContentDoubleCol
          contentType="publication"
          textContent="After studying at the Architectural Association in London, John Godwin and Gillian Hopwood moved to Nigeria, where they significantly shaped the country's architectural landscape for more than sixty years. When Nigeria became independent in 1960 following British dominance since the 19th century, the couple worked to create architecture that was site-specific, modern, and adapted to the climate relevant to Nigeria's aspirational political and economic policies. In this richly illustrated monograph, organised by typology, Ben Tosland examines Godwin and Hopwood's form of tropical modernism and illuminates its contemporary meanings and concluding with its relevance in times of the climate crisis."
          colorTheme="about"
        />
        <H2 children="Sponsors" />
        <DTAContentSingleCol children="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
      </div>
    </div>
  );
};
