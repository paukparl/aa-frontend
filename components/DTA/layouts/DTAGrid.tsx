// TODO :
// update padding / gap classes to custom spacing utilities that are consistent across site
// update prop definition + parsing for "items" array based on strapi
import clsx from "clsx";
import React from "react";
import DTAGridItem from "@/components/DTA/components/DTAGridItem";

type GridType =
  | "people"
  | "practicesgrid"
  | "practicestable"
  | "collections"
  | "institutions";

type DTAGridProps = {
  items: Array<Record<string, any>>; // array of items with imgSrc, imgAlt, title, etc.
  type: GridType;
  context?: string; // for text color; grids on search + related pages will have different text color
  className?: string;
  gridItemClassName?: string;
};

export default ({
  items,
  type,
  className,
  context,
  gridItemClassName,
}: DTAGridProps) => {
  let gridTypeDict = {
    practicesgrid:
      "grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-5 lg:gap-5 p-5",
    practicestable: "grid-cols-1",
    people:
      "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-5 gap-y-[35px] md:gap-y-10 md:gap-x-5 lg:gap-y-20 lg:gap-x-5 p-5",
    collections:
      "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-5 gap-y-8 md:gap-y-10 md:gap-x-5 lg:gap-y-20 lg:gap-x-5 p-5",
    institutions:
      "grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-8 md:gap-y-10 md:gap-x-5 lg:gap-y-20 lg:gap-x-5 p-5",
  };
  return (
    <div className={clsx(className, gridTypeDict[type], "grid w-full")}>
      {items.map((item: any, index: number) => (
        <DTAGridItem
          key={index}
          type={type}
          context={context}
          image={item.image}
          imgSrc={item.imgSrc}
          imgAlt={item.imgAlt}
          title={item.title}
          className={item.className}
          date={item.date}
          uid={item.uid}
          country={item.country}
          gridItemClassName={gridItemClassName}
        />
      ))}
    </div>
  );
};
