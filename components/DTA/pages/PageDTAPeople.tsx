import clsx from "clsx";
import React, { useState } from "react";
import { DTAFilterMultiSelectRow } from "@/components/DTA/components/Filter/DTAFilterMultiSelectRow";
import { DTAContentSingleCol } from "@/components/DTA/layouts/DTAContentSingleCol";
import { DTAGrid } from "@/components/DTA/layouts/DTAGrid";
import { H1 } from "@/components/Typography/H1";
import { Mono } from "@/components/Typography/Mono";
import { FooterPagination } from "@/components/globals/components/FooterPagination";
import { TipinHeader } from "@/components/globals/layouts/TipinHeader";

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
const mockAlphabetFilters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const mockBirthPlaceFilters = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Angola",
  "Argentina",
  "Armenia",
  "Azerbaijan",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belize",
  "Bhutan",
  "Bolivia",
  "Botswana",
  "Brazil",
  "Bulgaria",
  "Cambodia",
  "Chile",
  "China",
  "Colombia",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Czech Republic",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Eritrea",
  "Estonia",
  "Ethiopia",
  "Fiji",
  "Georgia",
  "Ghana",
  "Guatemala",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Jamaica",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Laos",
  "Latvia",
  "Lebanon",
  "Liberia",
  "Libya",
  "Lithuania",
  "Malaysia",
  "Maldives",
  "Mexico",
  "Micronesia",
  "Mongolia",
  "Myanmar",
  "Namibia",
  "Nepal",
  "Nicaragua",
  "Oman",
  "Pakistan",
  "Palestine",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Romania",
  "Rwanda",
  "Samoa",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Somalia",
  "South Africa",
  "South Korea",
  "South Sudan",
  "Sri Lanka",
  "Sudan",
  "Syria",
  "Taiwan",
  "Tanzania",
  "Thailand",
  "Tunisia",
  "Turkey",
  "Uganda",
  "Ukraine",
  "United Kingdom",
  "Uruguay",
  "Uzbekistan",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];
const mockYearOfStudyFilters = [
  "1950",
  "1951",
  "1952",
  "1953",
  "1954",
  "1955",
  "1956",
  "1957",
  "1978",
  "1959",
  "1960",
  "1961",
  "1962",
  "1963",
  "1964",
  "1965",
  "1966",
  "1967",
  "1968",
  "1969",
  "1970",
  "1971",
  "1972",
  "1973",
  "1974",
  "1975",
  "Unknown",
];
export const PageDTAPeople = ({ className }: DTAPeopleProps) => {
  const [activeFilters, setActiveFilters] = useState<string[][]>([[], [], []]);
  const toggleFilter = (groupIndex: number, filter: string) => {
    setActiveFilters((prev) => {
      const updated = [...prev];
      const group = new Set(updated[groupIndex] ?? []);
      if (group.has(filter)) {
        group.delete(filter);
      } else {
        group.add(filter);
      }
      updated[groupIndex] = Array.from(group);
      return updated;
    });
  };
  const clearFilters = (groupIndex: number) => {
    setActiveFilters((prev) => {
      const updated = [...prev];
      updated[groupIndex] = [];
      return updated;
    });
  };
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
        <H1>People</H1>
        <DTAContentSingleCol>
          Brief sentence describing what people means in the context of DTA.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </DTAContentSingleCol>
        <DTAFilterMultiSelectRow
          clearFilters={clearFilters}
          activeFilters={activeFilters}
          toggleFilter={toggleFilter}
          colorTheme="people"
          filtersInfo={[
            { filters: mockAlphabetFilters, multiFilterType: "alphabet" },
            {
              filters: mockBirthPlaceFilters,
              multiFilterType: "birthPlace",
            },
            { filters: mockYearOfStudyFilters, multiFilterType: "yearOfStudy" },
          ]}
        />
        <Mono className="mt-[10px]">All 570 records</Mono>
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
