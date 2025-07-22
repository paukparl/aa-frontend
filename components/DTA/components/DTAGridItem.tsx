// TODO :
// add the h-[--px] and x-[--px] utilitity classes used to Tailwind safelist to display individual grid items on storybook
// remove "image" bool prop and use imgsrc to validate if image should be displayed
// add "see more" buttons (from figma component tab, not main mockup)
import clsx from "clsx";
import React from "react";
import { Mono } from "@/components/Typography/Mono";

type DTAGridItemProps = {
  image: boolean;
  imgSrc?: string;
  imgAlt?: string;
  className?: string;
  title: string;
  type: string;
  uid?: string;
  date?: string;
  country?: string;
  gridItemClassName?: string;
};

// Prop + component definitions for each type of grid item:

type DTAGridItemPeopleProps = {
  title: string;
  image: boolean;
  imgSrc?: string;
  imgAlt?: string;
  className?: string;
  uid?: string;
  date?: string;
  gridItemClassName?: string;
};

export const DTAGridItemPeople = ({
  image,
  imgSrc,
  imgAlt,
  title,
  className,
  date,
  gridItemClassName,
}: DTAGridItemPeopleProps) => {
  return (
    <div className={clsx(className, gridItemClassName, "leading-[0px]")}>
      {image ? (
        <img
          src={imgSrc}
          alt={imgAlt}
          className="mb-2 aspect-[4/5] h-auto w-full object-cover lg:mb-3"
        />
      ) : (
        <div className="dta_griditem_bg mb-2 aspect-[4/5] h-auto w-full lg:mb-3"></div>
      )}
      {title != null && <Mono children={title} />}
      {date != null && (
        <div className="mt-2">
          <Mono children={date} />
        </div>
      )}
    </div>
  );
};

type DTAGridItemInstitutionsProps = {
  title: string;
  image: boolean;
  imgSrc?: string;
  imgAlt?: string;
  className?: string;
  uid?: string;
  gridItemClassName?: string;
};

export const DTAGridItemInstitutions = ({
  image,
  imgSrc,
  imgAlt,
  title,
  className,
  gridItemClassName,
}: DTAGridItemInstitutionsProps) => {
  return (
    <div className={clsx(className, gridItemClassName, "")}>
      {image ? (
        <img
          src={imgSrc}
          alt={imgAlt}
          className="mb-1 aspect-[4/3] h-auto w-full object-cover"
        />
      ) : (
        <div className="dta_griditem_bg mb-1 aspect-[4/3] h-auto w-full object-cover"></div>
      )}
      {title != null && <Mono children={title} />}
    </div>
  );
};

type DTAGridItemCollectionsProps = {
  title: string;
  image: boolean;
  imgSrc?: string;
  imgAlt?: string;
  className?: string;
  uid?: string;
  gridItemClassName?: string;
};

export const DTAGridItemCollections = ({
  image,
  imgSrc,
  imgAlt,
  title,
  className,
  gridItemClassName,
}: DTAGridItemCollectionsProps) => {
  return (
    <div className={clsx(className, gridItemClassName)}>
      {image ? (
        <img src={imgSrc} alt={imgAlt} className="mb-1 h-auto" />
      ) : (
        <div className="dta_griditem_bg mb-1 aspect-square"></div>
      )}
      {title != null && <Mono children={title} />}
    </div>
  );
};

type DTAGridItemPracticesProps = {
  title: string;
  className?: string;
  country: string;
  uid?: string;
  gridItemClassName?: string;
};

export const DTAGridItemPracticesGrid = ({
  title,
  className,
  country,
  gridItemClassName,
}: DTAGridItemPracticesProps) => {
  return (
    <div
      className={clsx(
        className,
        gridItemClassName,
        "aspect-[3/2] border border-dashed px-3 py-2 leading-none sm:aspect-[5/2] lg:aspect-[5/2]",
      )}
    >
      {title != null && <Mono children={title} />}
      {country != null && (
        <>
          <br />
          <Mono children={country} className="block pt-[10px]" />
        </>
      )}
    </div>
  );
};

export const DTAGridItemPracticesTable = ({
  title,
  className,
  country,
  gridItemClassName,
}: DTAGridItemPracticesProps) => {
  return (
    <div
      className={clsx(
        className,
        gridItemClassName,
        "mb-[-1px] grid grid-cols-[75%_25%]",
      )}
    >
      <div className="border border-dashed px-[15px] py-[11px] leading-0 md:px-[20px] md:py-[12px]">
        <Mono children={title} />
      </div>
      <div className="ml-[-1px] border border-dashed px-[15px] py-[11px] leading-0 md:px-[20px] md:py-[12px]">
        <Mono children={country} className="" />
      </div>
    </div>
  );
};

export const DTAGridItem = ({
  type,
  imgSrc,
  imgAlt,
  title,
  className,
  date,
  uid,
  country,
  image,
  gridItemClassName,
}: DTAGridItemProps) => {
  switch (type) {
    case "people":
      return DTAGridItemPeople({
        image,
        imgSrc,
        imgAlt,
        title,
        className,
        date,
        uid,
      });
      break;
    case "institutions":
      return DTAGridItemInstitutions({
        imgSrc,
        imgAlt,
        title,
        className,
        uid,
        country,
        image,
      });
      break;
    case "collections":
      return DTAGridItemCollections({
        imgSrc,
        imgAlt,
        title,
        className,
        uid,
        image,
      });
      break;
    case "practicesgrid":
      return DTAGridItemPracticesGrid({
        title,
        className,
        uid,
        country,
        gridItemClassName,
      });
      break;
    case "practicestable":
      return DTAGridItemPracticesTable({
        title,
        className,
        uid,
        country,
      });
      break;
    default:
      console.warn(`Unknown type: ${type}`);
      return null;
  }
};
