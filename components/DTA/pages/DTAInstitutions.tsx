import clsx from "clsx";
import * as React from "react";
import DTAFilterButton from "@/components/DTA/components/DTAFilterButton";
import DTAContentSingleCol from "@/components/DTA/layouts/DTAContentSingleCol";
import DTAGrid from "@/components/DTA/layouts/DTAGrid";
import { H1 } from "@/components/Typography/H1";
import { Mono } from "@/components/Typography/Mono";
import FooterPagination from "@/components/globals/components/FooterPagination";
import TipinHeader from "@/components/globals/layouts/TipinHeader";

type DTAInstitutionsProps = {
  className?: string;
};

const mockInstitutionsSlides = [
  {
    title: "Name of Institution",
    image: true,
    imgSrc: "/storybook/DTA/components/Grid/dta_grid_institutions_1.jpg",
  },
  {
    title: "Lorem Ipsum",
  },
  {
    title: "Institute XYZ",
  },
  {
    title: "Lorem Ipsum",
    image: true,
    imgSrc: "/storybook/DTA/components/Grid/dta_grid_institutions_1.jpg",
  },
  {
    title: "Lorem Ipsum",
    image: true,
    imgSrc: "/storybook/DTA/components/Grid/dta_grid_institutions_1.jpg",
  },
];

export default ({ className }: DTAInstitutionsProps) => {
  return (
    <div
      className={clsx(
        className,
        "text-dta-institutions-foreground flex min-h-[100vh] w-full flex-col bg-[rgba(255,255,255,.9)] p-[10px] backdrop-blur-lg sm:p-[30px] lg:w-[90%]",
      )}
    >
      <TipinHeader
        pageTitle="Institutions"
        breadcrumbLinks={[{ title: "DTA Archive" }]}
        colorTheme="dta-institutions"
      />
      <div className="flex flex-col gap-[20px] sm:gap-[30px]">
        <H1 children="Institutions" />
        <DTAContentSingleCol children="Brief sentence describing what institutions means in the context of DTA. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
        <div className="grid gap-[10px] lg:grid-cols-3 lg:gap-[20px]">
          <DTAFilterButton
            filterState="minimized"
            children="Filter by alphabet"
            colorTheme="institutions"
          />
          <DTAFilterButton
            filterState="minimized"
            children="Type"
            colorTheme="institutions"
          />
          <DTAFilterButton
            filterState="minimized"
            children="Country"
            colorTheme="institutions"
          />
        </div>
        <Mono children="All 570 records" className="mt-[10px]" />
        <DTAGrid
          type="institutions"
          items={mockInstitutionsSlides}
          className="text-dta-institutions-foreground"
        />
        <FooterPagination
          totalPages={13}
          className="text-dta-institutions-foreground"
        />
      </div>
    </div>
  );
};
