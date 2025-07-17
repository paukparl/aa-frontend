import clsx from "clsx";
import * as React from "react";
import DTAFilterButton from "@/components/DTA/components/Filter/DTAFilterButton";
import DTAContentSingleCol from "@/components/DTA/layouts/DTAContentSingleCol";
import DTAGrid from "@/components/DTA/layouts/DTAGrid";
import { H1 } from "@/components/Typography/H1";
import { Mono } from "@/components/Typography/Mono";
import FooterPagination from "@/components/globals/components/FooterPagination";
import TipinHeader from "@/components/globals/layouts/TipinHeader";

type DTAPeopleProps = {
  className?: string;
};

const mockPeopleSlides = [
  {
    title: "Ronald Arthur Diss",
    image: true,
    imgSrc: "/storybook/DTA/components/Grid/dta_grid_people_1.jpg",
    date: "3 Sep 1984",
  },
  {
    title: "George Bernard Finch",
    image: true,
    imgSrc: "/storybook/DTA/components/Grid/dta_grid_people_2.jpg",
    date: "1 Oct 1974",
  },
  {
    title: "Person's Name",
    date: "13 May 1995",
  },
  {
    title: "Kenneth Brian Frampton",
    image: true,
    imgSrc: "/storybook/DTA/components/Grid/dta_grid_people_3.jpg",
    date: "18 Feb 1959",
  },
  {
    title: "Besim Selim Hakim",
    image: true,
    imgSrc: "/storybook/DTA/components/Grid/dta_grid_people_4.jpg",
    date: "7 Jul 1970",
  },
  {
    title: "Sepala Wimaladharma Molligoda",
    image: true,
    imgSrc: "/storybook/DTA/components/Grid/dta_grid_people_5.jpg",
    date: "3 Jan 1897",
  },
  {
    title: "I. Gusti Gede Ngurah",
    image: true,
    imgSrc: "/storybook/DTA/components/Grid/dta_grid_people_6.jpg",
    date: "14 Dec 1990",
  },
  {
    title: "John Owusu Addo",
    image: true,
    imgSrc: "/storybook/DTA/components/Grid/dta_grid_people_7.jpg",
    date: "8 Aug 1985",
  },
  {
    title: "Sau Yan Sonny Chan",
    image: true,
    imgSrc: "/storybook/DTA/components/Grid/dta_grid_people_8.jpg",
    date: "19 Jun 1992",
  },
  {
    title: "Syamal De Sarkar",
    image: true,
    imgSrc: "/storybook/DTA/components/Grid/dta_grid_people_9.jpg",
    date: "30 Jun 1980",
  },
  {
    title: "Kingsley Oliver Robotham",
    image: true,
    imgSrc: "/storybook/DTA/components/Grid/dta_grid_people_10.jpg",
    date: "28 Feb 1988",
  },
  {
    title: "Joel Ghivelder",
    image: true,
    imgSrc: "/storybook/DTA/components/Grid/dta_grid_people_11.jpg",
    date: "17 Apr 1905",
  },
  {
    title: "Lorem Ipsum Dolor Sit",
    image: true,
    imgSrc: "/storybook/DTA/components/Grid/dta_grid_people_12.jpg",
    date: "21 Sep 1937",
  },
];

export default ({ className }: DTAPeopleProps) => {
  return (
    <div
      className={clsx(
        className,
        "text-dta-people-foreground flex min-h-[100vh] w-full flex-col bg-[rgba(255,255,255,.9)] p-[10px] backdrop-blur-lg sm:p-[30px] lg:w-[90%]",
      )}
    >
      <TipinHeader
        pageTitle="People"
        breadcrumbLinks={[{ title: "DTA Archive" }]}
        colorTheme="dta-people"
      />
      <div className="flex flex-col gap-[20px] sm:gap-[30px]">
        <H1 children="People" />
        <DTAContentSingleCol children="Brief sentence describing what people means in the context of DTA. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
        <div className="grid gap-[10px] lg:grid-cols-3 lg:gap-[20px]">
          <DTAFilterButton
            filterState="minimized"
            children="Filter by alphabet"
            colorTheme="people"
          />
          <DTAFilterButton
            filterState="minimized"
            children="Place of Birth"
            colorTheme="people"
          />
          <DTAFilterButton
            filterState="minimized"
            children="Year of Study"
            colorTheme="people"
          />
        </div>
        <Mono children="All 570 records" className="mt-[10px]" />
        <DTAGrid
          type="people"
          items={mockPeopleSlides}
          className="text-dta-people-foreground"
        />
        <FooterPagination
          totalPages={32}
          className="text-dta-people-foreground"
        />
      </div>
    </div>
  );
};
