import clsx from "clsx";
import React, { useState } from "react";
import { DTAFilterMultiRow } from "@/components/DTA/components/Filter/DTAFilterMultiSelectRow";
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
const mockCountryFilters = [
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
const mockInstitutionTypeFilters = [
  "Universities",
  "Governmental Bodies",
  "Non-Governmental Bodies",
  "Transnational Organizations",
];
export default ({ className }: DTAInstitutionsProps) => {
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
        <DTAFilterMultiRow
          activeFilters={activeFilters}
          toggleFilter={toggleFilter}
          colorTheme="institutions"
          filtersInfo={[
            { filters: mockAlphabetFilters, multiFilterType: "alphabet" },
            {
              filters: mockInstitutionTypeFilters,
              multiFilterType: "institutionType",
            },
            { filters: mockCountryFilters, multiFilterType: "country" },
          ]}
        />
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
