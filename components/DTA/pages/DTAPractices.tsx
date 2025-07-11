import clsx from "clsx";
import * as React from "react";
import DTAContentSingleCol from "@/components/DTA/layouts/DTAContentSingleCol";
import DTAGrid from "@/components/DTA/layouts/DTAGrid";
import { H1 } from "@/components/Typography/H1";
import { Mono } from "@/components/Typography/Mono";
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
      <Mono children="All 570 records" className="px-[30px] pt-[40px]" />
      <DTAGrid
        type="practicestable"
        items={mockPracticesSlides}
        className="text-dta-practices-foreground px-[30px] pt-[30px]"
      />
      {/* pagination footer */}
    </div>
  );
};
