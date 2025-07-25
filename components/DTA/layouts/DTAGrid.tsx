// TODO :
// update padding / gap classes to custom spacing utilities that are consistent across site
// update prop definition + parsing for "items" array based on strapi
import clsx from "clsx";
import React from "react";
import { DTAGridItem } from "@/components/dta/components/DTAGridItem";

type GridType =
  | "people"
  | "practicesgrid"
  | "practicestable"
  | "collections"
  | "institutions";

export type GridItem = {
  title: string;
  imgSrc?: string;
  imgAlt?: string;
  uid?: string;
  date?: string;
  country?: string;
};

type DTAGridProps = {
  items: GridItem[];
  type: GridType;
  className?: string;
  gridItemClassName?: string;
};

export const DTAGrid = ({
  items,
  type,
  className,
  gridItemClassName,
}: DTAGridProps) => {
  const gridTypeDict = {
    practicesgrid: "grid-cols-2 lg:grid-cols-3 gap-5 md:gap-5 lg:gap-5",
    practicestable: "grid-cols-1",
    people:
      "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-5 gap-y-[35px] md:gap-y-10 md:gap-x-5 lg:gap-y-20 lg:gap-x-5",
    collections:
      "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-5 gap-y-8 md:gap-y-10 md:gap-x-5 lg:gap-y-20 lg:gap-x-5",
    institutions:
      "grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-8 md:gap-y-10 md:gap-x-5 lg:gap-y-20 lg:gap-x-5",
  };
  return (
    <div className={clsx(className, gridTypeDict[type], "grid w-full")}>
      {type === "people" &&
        items.map((item: GridItem, index: number) => (
          <DTAGridItem
            key={index}
            type={type}
            imgSrc={item.imgSrc}
            imgAlt={item.imgAlt}
            title={item.title}
            className={className}
            date={item.date}
            uid={item.uid}
            country={item.country}
            gridItemClassName={gridItemClassName}
          />
        ))}
    </div>
  );
};
