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
  context?: string;
  uid?: string;
  date?: string;
  country?: string;
};

// Prop + component definitions for each type of grid item:

type DTAGridItemPeopleProps = {
  title: string;
  image: boolean;
  imgSrc?: string;
  imgAlt?: string;
  className?: string;
  context?: string;
  uid?: string;
  date?: string;
};

export const DTAGridItemPeople = ({
  image,
  imgSrc,
  imgAlt,
  title,
  className,
  date,
}: DTAGridItemPeopleProps) => {
  return (
    <div
      className={clsx(
        className,
        "text-color-dta-people-foreground leading-[0px]",
      )}
    >
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
  context?: string;
  uid?: string;
};

export const DTAGridItemInstitutions = ({
  image,
  imgSrc,
  imgAlt,
  title,
  className,
}: DTAGridItemInstitutionsProps) => {
  return (
    <div className={clsx(className, "text-color-dta-institutions-foreground")}>
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
  context?: string;
  uid?: string;
};

export const DTAGridItemCollections = ({
  image,
  imgSrc,
  imgAlt,
  title,
  className,
}: DTAGridItemCollectionsProps) => {
  return (
    <div className={clsx(className, "text-color-dta-collections-foreground")}>
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
  context?: string;
  country?: string;
  uid?: string;
};

export const DTAGridItemPractices = ({
  title,
  className,
  country,
}: DTAGridItemPracticesProps) => {
  return (
    <div
      className={clsx(
        className,
        "text-color-dta-search-foreground border-color-dta-search-foreground aspect-[5/2] border border-dashed px-3 py-2",
      )}
    >
      {title != null && <Mono children={title} />}
      {country != null && (
        <>
          <br />
          <Mono children={country} className="" />
        </>
      )}
    </div>
  );
};

export default ({
  type,
  imgSrc,
  imgAlt,
  title,
  className,
  date,
  context,
  uid,
  country,
  image,
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
        context,
        uid,
      });
      break;
    case "institutions":
      return DTAGridItemInstitutions({
        imgSrc,
        imgAlt,
        title,
        className,
        context,
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
        context,
        uid,
        image,
      });
      break;
    case "practices":
      return DTAGridItemPractices({ title, className, context, uid, country });
      break;
    default:
      console.warn(`Unknown type: ${type}`);
      return null;
  }
};
