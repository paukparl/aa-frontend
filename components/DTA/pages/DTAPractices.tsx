import clsx from "clsx";
import * as React from "react";
import DTAFilterButton from "@/components/DTA/components/DTAFilterButton";
import DTAContentSingleCol from "@/components/DTA/layouts/DTAContentSingleCol";
import DTAGrid from "@/components/DTA/layouts/DTAGrid";
import { H1 } from "@/components/Typography/H1";
import { Mono } from "@/components/Typography/Mono";
import FooterPagination from "@/components/globals/components/FooterPagination";
import TipinHeader from "@/components/globals/layouts/TipinHeader";

type DTAPracticesProps = {
  className?: string;
};

const mockPracticesSlides = [
  {
    title: "Ministry of Works",
    country: "Sierra Leone",
  },
  {
    title: "Federal Ministry of Works and Housing, Headquarters",
    country: "Lagos",
  },
  {
    title: "Associated Design Forum, Aspen, Colorado",
    country: "USA",
  },
  {
    title: "Norman Cherner, New York",
    country: "USA",
  },
  {
    title: "Durham County Council, Durham",
    country: "United Kingdom",
  },
  {
    title: "Architects Co-Partnership, Tema, Ghana",
    country: "USA",
  },
  {
    title: "Lyles, Bissett, Carlyle and Wolff",
    country: "USA",
  },
  {
    title: "Public Works Department",
    country: "Malaysia",
  },
  {
    title: "Ghana Architectural and Civil Engineering Company",
    country: "Ghana",
  },
  {
    title: "Quine and Newberry, London",
    country: "United Kingdom",
  },
  {
    title: "Chartered surveyors",
    country: "United Kingdom",
  },
];

export default ({ className }: DTAPracticesProps) => {
  return (
    <div
      className={clsx(
        className,
        "text-dta-practices-foreground flex min-h-[100vh] w-full flex-col bg-[rgba(255,255,255,.9)] p-[10px] backdrop-blur-lg sm:p-[30px] lg:w-[90%]",
      )}
    >
      <TipinHeader
        pageTitle="Practices"
        breadcrumbLinks={[{ title: "DTA Archive" }]}
        colorTheme="dta-practices"
      />
      <div className="flex flex-col gap-[20px] sm:gap-[30px]">
        <H1 children="Practices" />
        <DTAContentSingleCol children="Brief sentence describing what practices means in the context of DTA. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
        <div className="grid gap-[10px] lg:grid-cols-2 lg:gap-[20px]">
          <DTAFilterButton
            filterState="minimized"
            children="Filter by alphabet"
            colorTheme="practices"
          />
          <DTAFilterButton
            filterState="minimized"
            children="Country"
            colorTheme="practices"
          />
        </div>
        <Mono children="All 570 records" className="mt-[10px]" />
        <DTAGrid
          type="practicestable"
          items={mockPracticesSlides}
          className="text-dta-practices-foreground"
        />
        <FooterPagination
          totalPages={2}
          className="text-dta-practices-foreground"
        />
      </div>
    </div>
  );
};
