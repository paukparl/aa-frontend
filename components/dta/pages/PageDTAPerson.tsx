import clsx from "clsx";
import * as React from "react";
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
        "text-dta-people-foreground 700:p-[30px] 1280:w-[75%] flex min-h-[100vh] w-full flex-col bg-[rgba(255,255,255,.9)] p-[10px] backdrop-blur-lg",
      )}
    >
      <TipinHeader
        pageTitle="Handel Kitchiner (Hal) Lawson"
        breadcrumbLinks={[{ title: "DTA Archive" }, { title: "People" }]}
        colorTheme="dta-people"
      />
      <div className="700:gap-[30px] flex flex-col gap-[20px]">
        <h1 className="tipin">Handel Kitchiner (Hal) Lawson</h1>
        <h1 className="tipin block">1928-1985</h1>
        <DTAContentDoubleCol
          colorTheme="people"
          contentType="image"
          imgSrc="/storybook/dta/components/2colContent/hal-portrait.jpg"
          textContent="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante,"
        />
        <div className="1024:grid-cols-2 grid grid-cols-1 gap-[30px]">
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
        <div className="1280:gap-[50px] flex flex-col gap-[30px] pb-[20px]">
          <DTATipinMap colorTheme="people" />
          <DTARelatedContent gridType="people" colorTheme="people" />
          <DTARelatedContent gridType="collections" colorTheme="people" />
          <DTARelatedContent gridType="practices" colorTheme="people" />
        </div>
      </div>
    </div>
  );
};
