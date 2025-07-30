import clsx from "clsx";
import * as React from "react";
import { DTARelatedContent } from "@/components/dta/components/DTARelatedContent";
import { DTATipinMap } from "@/components/dta/components/DTATipinMap";
import { DTAContentDoubleCol } from "@/components/dta/layouts/DTAContentDoubleCol";
import { TipinHeader } from "@/components/globals/layouts/TipinHeader";

type relatedCollection = {
  title: string;
  image: boolean;
  imgSrc?: string;
};
type DTAInstitutionProps = {
  className?: string;
  title: string;
  imgSrc: string;
  info: string;
  relatedCollections: relatedCollection[];
};

export const PageDTAInstitution = ({
  className,
  title,
  info,
}: DTAInstitutionProps) => {
  return (
    <div
      className={clsx(
        className,
        "text-dta-institutions-foreground g:w-[75%] 700:p-[30px] flex min-h-[100vh] w-full flex-col bg-[rgba(255,255,255,.95)] p-[10px] backdrop-blur-lg",
      )}
    >
      <TipinHeader
        pageTitle={title}
        breadcrumbLinks={[{ title: "DTA Archive" }, { title: "Institutions" }]}
        colorTheme="dta-institutions"
      />
      <div className="700:gap-[30px] flex flex-col gap-[20px]">
        <h1 className="tipin">{title}</h1>
        <DTAContentDoubleCol
          imgSrc="/storybook/dta/components/2colContent/jamaica-col.jpg"
          textContent={info}
          colorTheme="institutions"
          contentType="image"
        />
        <div className="1280:gap-[50px] flex flex-col gap-[30px] pb-[50px]">
          <DTATipinMap colorTheme="institutions" />
          <DTARelatedContent gridType="people" colorTheme="institutions" />
          <DTARelatedContent gridType="collections" colorTheme="institutions" />
          <DTARelatedContent gridType="practices" colorTheme="institutions" />
        </div>
      </div>
    </div>
  );
};
