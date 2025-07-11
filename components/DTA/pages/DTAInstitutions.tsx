import clsx from "clsx";
import * as React from "react";
import DTAContentSingleCol from "@/components/DTA/layouts/DTAContentSingleCol";
import DTAGrid from "@/components/DTA/layouts/DTAGrid";
import { H1 } from "@/components/Typography/H1";
import { Mono } from "@/components/Typography/Mono";
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
        "text-dta-institutions-foreground flex min-h-[100vh] w-full flex-col bg-[rgba(255,255,255,.9)] py-[30px] backdrop-blur-lg lg:w-[90%]",
      )}
    >
      <TipinHeader
        className="px-[30px]"
        pageTitle="Institutions"
        breadcrumbLinks={[{ title: "DTA Archive" }]}
        colorTheme="dta-institutions"
      />
      <H1 className="px-[30px] pb-[30px]" children="Institutions" />
      <DTAContentSingleCol
        className="px-[30px]"
        children="Brief sentence describing what institutions means in the context of DTA. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <Mono children="All 570 records" className="px-[30px] pt-[40px]" />
      <DTAGrid
        type="institutions"
        items={mockInstitutionsSlides}
        className="text-dta-institutions-foreground px-[30px] pt-[30px]"
      />
      {/* pagination footer */}
    </div>
  );
};
