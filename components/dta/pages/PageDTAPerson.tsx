import clsx from "clsx";
import * as React from "react";
import { H1 } from "@/components/Typography/H1";
import { DTARelatedContent } from "@/components/dta/components/DTARelatedContent";
import { DTATablePeople } from "@/components/dta/components/DTATablePeople";
import { DTATipinMap } from "@/components/dta/components/DTATipinMap";
import { DTAContentDoubleCol } from "@/components/dta/layouts/DTAContentDoubleCol";
import { TipinHeader } from "@/components/globals/layouts/TipinHeader";

type DTAPersonProps = {
  className?: string;
};

const DTAPersonProps = [
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
];

export const PageDTAPerson = ({ className }: DTAPersonProps) => {
  return (
    <div
      className={clsx(
        className,
        "text-dta-people-foreground flex min-h-[100vh] w-full flex-col bg-[rgba(255,255,255,.9)] p-[10px] backdrop-blur-lg sm:p-[30px] lg:w-[75%]",
      )}
    >
      <TipinHeader
        pageTitle="Handel Kitchiner (Hal) Lawson"
        breadcrumbLinks={[{ title: "DTA Archive" }, { title: "People" }]}
        colorTheme="dta-people"
      />
      <div className="flex flex-col gap-[20px] sm:gap-[30px]">
        <H1 tipIn>Handel Kitchiner (Hal) Lawson</H1>
        <H1 tipIn className="block">
          1928-1985
        </H1>
        <DTAContentDoubleCol
          colorTheme="people"
          contentType="image"
          imgSrc="/storybook/dta/components/2colContent/hal-portrait.jpg"
          textContent="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante,"
        />
        <div className="grid grid-cols-1 gap-[30px] md:grid-cols-2">
          <DTATablePeople
            type="education"
            content={[
              { info: "Course, Institution, Country", year: "Year" },
              { info: "Course, Institution, Country", year: "Year" },
              { info: "Course, Institution, Country", year: "Year" },
              { info: "Course, Institution, Country", year: "Year" },
              { info: "Course, Institution, Country", year: "Year" },
              { info: "Course, Institution, Country", year: "Year" },
            ]}
          />
          <DTATablePeople
            type="career"
            content={[
              { info: "Role, Institution, Country", year: "Year" },
              { info: "Role, Institution, Country", year: "Year" },
              { info: "Role, Institution, Country", year: "Year" },
              { info: "Role, Institution, Country", year: "Year" },
              { info: "Role, Institution, Country", year: "Year" },
              { info: "Role, Institution, Country", year: "Year" },
            ]}
          />
        </div>
        <div className="flex flex-col gap-[30px] pb-[20px] lg:gap-[50px]">
          <DTATipinMap colorTheme="people" />
          <DTARelatedContent gridType="people" colorTheme="people" />
          <DTARelatedContent gridType="collections" colorTheme="people" />
          <DTARelatedContent gridType="practices" colorTheme="people" />
        </div>
      </div>
    </div>
  );
};
