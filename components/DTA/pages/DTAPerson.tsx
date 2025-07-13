import clsx from "clsx";
import * as React from "react";
import DTAHeader from "@/components/DTA/components/DTAHeader";
import { Body } from "@/components/Typography/Body";
import { H1 } from "@/components/Typography/H1";
import TipinHeader from "@/components/globals/layouts/TipinHeader";

type DTAPersonProps = {
  className?: string;
};

const mockObjectData = [
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

const DTAPersonProps = [
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

export default ({ className }: DTAPersonProps) => {
  return (
    <div
      className={clsx(
        className,
        "text-dta-people-foreground flex min-h-[100vh] w-full flex-col bg-[rgba(255,255,255,.9)] py-[30px] backdrop-blur-lg lg:w-[75%]",
      )}
    >
      <TipinHeader
        className="px-[30px]"
        pageTitle="Person Name"
        breadcrumbLinks={[{ title: "DTA Archive" }, { title: "People" }]}
        colorTheme="dta-people"
      />
      <H1 tipIn className="px-[30px]" children="Object Title, Year" />
      <Body
        className="px-[30px] pt-[30px]"
        children="Brief sentence describing what person means in the context of DTA. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <div className="mt-[30px] px-[30px]">
        <DTAHeader children="Related Collections" />
      </div>
      <div className="mt-[30px] px-[30px]">
        <DTAHeader children="Related Practices" />
      </div>
      <div className="mt-[30px] px-[30px]">
        <DTAHeader children="Related Institutions" />
      </div>
    </div>
  );
};
