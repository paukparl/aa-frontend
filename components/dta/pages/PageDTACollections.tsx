import React, { useState } from "react";
import { DTAFilterSingleSelect } from "@/components/dta/components/Filter/DTAFilterSingleSelect";
import { DTAContentSingleCol } from "@/components/dta/layouts/DTAContentSingleCol";
import { DTAGrid } from "@/components/dta/layouts/DTAGrid";
import { FooterPagination } from "@/components/globals/components/FooterPagination";
import { TipinHeader } from "@/components/globals/layouts/TipinHeader";
import { cn } from "@/lib/cn";

type DTACollectionsProps = {
  className?: string;
};

const mockCollectionsData = [
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
  {
    title: "Name of Object",
    image: true,
    imgSrc: "/storybook/dta/components/Grid/dta_grid_collections_1.jpg",
  },
  {
    title: "Name of Object",
    image: true,
    imgSrc: "/storybook/dta/components/Grid/dta_grid_collections_1.jpg",
  },
  {
    title: "Name of Object",
    image: true,
    imgSrc: "/storybook/dta/components/Grid/dta_grid_collections_3.jpg",
  },
  {
    title: "Name of Object",
    image: true,
    imgSrc: "/storybook/dta/components/Grid/dta_grid_collections_3.jpg",
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
  {
    title: "Name of Object",
    image: true,
    imgSrc: "/storybook/dta/components/Grid/dta_grid_collections_1.jpg",
  },
  {
    title: "Name of Object",
    image: true,
    imgSrc: "/storybook/dta/components/Grid/dta_grid_collections_1.jpg",
  },
  {
    title: "Name of Object",
    image: true,
    imgSrc: "/storybook/dta/components/Grid/dta_grid_collections_1.jpg",
  },
  {
    title: "Name of Object",
    image: true,
    imgSrc: "/storybook/dta/components/Grid/dta_grid_collections_3.jpg",
  },
  {
    title: "Name of Object",
    image: true,
    imgSrc: "/storybook/dta/components/Grid/dta_grid_collections_2.jpg",
  },
];
const mockCollectionFilters = [
  {
    title: "Otto Koenigsberger Collection",
    imgSrc: "/storybook/dta/components/SingleFilter/singlefilter.jpg",
    imgAlt:
      "A black and white exterior shot of a building designed by Otto Koenigsberger, with two trees framing the image.",
    description:
      "Donated by Koenigsberger's late wife, Renate, this hugely important archive contains a wealth of material relating to one of the most influential figures in modern urban development planning, and includes 5 portfolios of drawings, alongside 61 boxes of research notes, unpublished mss, teaching materials and other documentation. The contents of the archive range from Otto’s student work of the 1920s and early 30s, through his work in India in the 1940s and 50s, to his subsequent leadership of the AA Department of Tropical Architecture, UCL’s Development Planning Unit and his advisory work for the UN.",
  },
  {
    title: "Student Work",
    imgSrc: "/storybook/dta/components/SingleFilter/singlefilter.jpg",
    imgAlt:
      "A black and white exterior shot of a building designed by Otto Koenigsberger, with two trees framing the image.",
    description:
      "Donated by Koenigsberger's late wife, Renate, this hugely important archive contains a wealth of material relating to one of the most influential figures in modern urban development planning, and includes 5 portfolios of drawings, alongside 61 boxes of research notes, unpublished mss, teaching materials and other documentation. The contents of the archive range from Otto’s student work of the 1920s and early 30s, through his work in India in the 1940s and 50s, to his subsequent leadership of the AA Department of Tropical Architecture, UCL’s Development Planning Unit and his advisory work for the UN.",
  },
  {
    title: "Slide Library",
    imgSrc: "/storybook/dta/components/SingleFilter/singlefilter.jpg",
    imgAlt:
      "A black and white exterior shot of a building designed by Otto Koenigsberger, with two trees framing the image.",
    description:
      "Donated by Koenigsberger's late wife, Renate, this hugely important archive contains a wealth of material relating to one of the most influential figures in modern urban development planning, and includes 5 portfolios of drawings, alongside 61 boxes of research notes, unpublished mss, teaching materials and other documentation. The contents of the archive range from Otto’s student work of the 1920s and early 30s, through his work in India in the 1940s and 50s, to his subsequent leadership of the AA Department of Tropical Architecture, UCL’s Development Planning Unit and his advisory work for the UN.",
  },
  {
    title: "DTA Publications and Documents",
    imgSrc: "/storybook/dta/components/SingleFilter/singlefilter.jpg",
    imgAlt:
      "A black and white exterior shot of a building designed by Otto Koenigsberger, with two trees framing the image.",
    description:
      "Donated by Koenigsberger's late wife, Renate, this hugely important archive contains a wealth of material relating to one of the most influential figures in modern urban development planning, and includes 5 portfolios of drawings, alongside 61 boxes of research notes, unpublished mss, teaching materials and other documentation. The contents of the archive range from Otto’s student work of the 1920s and early 30s, through his work in India in the 1940s and 50s, to his subsequent leadership of the AA Department of Tropical Architecture, UCL’s Development Planning Unit and his advisory work for the UN.",
  },
  {
    title: "External Collections",
    imgSrc: "/storybook/dta/components/SingleFilter/singlefilter.jpg",
    imgAlt:
      "A black and white exterior shot of a building designed by Otto Koenigsberger, with two trees framing the image.",
    description:
      "Donated by Koenigsberger's late wife, Renate, this hugely important archive contains a wealth of material relating to one of the most influential figures in modern urban development planning, and includes 5 portfolios of drawings, alongside 61 boxes of research notes, unpublished mss, teaching materials and other documentation. The contents of the archive range from Otto’s student work of the 1920s and early 30s, through his work in India in the 1940s and 50s, to his subsequent leadership of the AA Department of Tropical Architecture, UCL’s Development Planning Unit and his advisory work for the UN.",
  },
];

export const PageDTACollections = ({ className }: DTACollectionsProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const setFilter = (index: number) => {
    setActiveIndex(index);
  };
  const clearFilter = () => {
    setActiveIndex(null);
  };
  return (
    <div
      className={cn(
        className,
        "text-dta-collections-foreground 700:p-[30px] 1280:w-[90%] flex min-h-[100vh] w-full flex-col bg-[rgba(255,255,255,.9)] p-[10px] backdrop-blur-lg",
      )}
    >
      <TipinHeader
        pageTitle="Collections"
        breadcrumbLinks={[{ title: "DTA Archive" }]}
        colorTheme="dta-collections"
      />
      <div className="700:gap-[30px] flex flex-col gap-[20px]">
        <h1>Collections</h1>
        <DTAContentSingleCol>
          Brief sentence describing what collections means in the context of
          DTA. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </DTAContentSingleCol>
        <DTAFilterSingleSelect
          activeIndex={activeIndex}
          filterData={mockCollectionFilters}
          setFilter={setFilter}
          clearFilter={clearFilter}
        />
        <span className="mono mt-[10px]">All 570 records</span>
        <DTAGrid
          type="collections"
          items={mockCollectionsData}
          className="text-dta-collections-foreground"
        />
        <FooterPagination
          totalPages={10}
          className="text-dta-collections-foreground"
        />
      </div>
    </div>
  );
};
