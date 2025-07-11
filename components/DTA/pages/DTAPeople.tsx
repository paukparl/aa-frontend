import clsx from "clsx";
import * as React from "react";
import DTAContentSingleCol from "@/components/DTA/layouts/DTAContentSingleCol";
import DTAGrid from "@/components/DTA/layouts/DTAGrid";
import { H1 } from "@/components/Typography/H1";
import { Mono } from "@/components/Typography/Mono";
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
        "text-dta-people-foreground flex min-h-[100vh] w-full flex-col bg-[rgba(255,255,255,.9)] py-[30px] backdrop-blur-lg lg:w-[90%]",
      )}
    >
      <TipinHeader
        className="px-[30px]"
        pageTitle="People"
        breadcrumbLinks={[{ title: "DTA Archive" }]}
        colorTheme="dta-people"
      />
      <H1 className="px-[30px] pb-[30px]" children="People" />
      <DTAContentSingleCol
        className="px-[30px]"
        children="Brief sentence describing what people means in the context of DTA. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <Mono children="All 570 records" className="px-[30px] pt-[40px]" />
      <DTAGrid
        type="people"
        items={mockPeopleSlides}
        className="text-dta-people-foreground px-[30px] pt-[30px]"
      />
      {/* pagination footer */}
    </div>
  );
};
