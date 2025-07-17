import clsx from "clsx";
import * as React from "react";
import DTARelatedContent from "@/components/DTA/components/DTARelatedContent";
import DTATipinMap from "@/components/DTA/components/DTATipinMap";
import DTAContentDoubleCol from "@/components/DTA/layouts/DTAContentDoubleCol";
import { H1 } from "@/components/Typography/H1";
import TipinHeader from "@/components/globals/layouts/TipinHeader";

type DTAInstitutionProps = {
  className?: string;
  title: string;
  imgSrc: string;
  info: string;
  relatedCollections: Array<Record<string, any>>;
};

export default ({ className, title, info }: DTAInstitutionProps) => {
  return (
    <div
      className={clsx(
        className,
        "text-dta-institutions-foreground g:w-[75%] flex min-h-[100vh] w-full flex-col bg-[rgba(255,255,255,.95)] p-[10px] backdrop-blur-lg sm:p-[30px]",
      )}
    >
      <TipinHeader
        pageTitle={title}
        breadcrumbLinks={[{ title: "DTA Archive" }, { title: "Institutions" }]}
        colorTheme="dta-institutions"
      />
      <div className="flex flex-col gap-[20px] sm:gap-[30px]">
        <H1 tipIn children={title} />
        <DTAContentDoubleCol
          imgSrc="/storybook/DTA/components/2colContent/jamaica-col.jpg"
          textContent={info}
          colorTheme="institutions"
          contentType="image"
        />
        <div className="flex flex-col gap-[30px] pb-[50px] lg:gap-[50px]">
          <DTATipinMap colorTheme="institutions" />
          <DTARelatedContent gridType="people" colorTheme="institutions" />
          <DTARelatedContent gridType="collections" colorTheme="institutions" />
          <DTARelatedContent gridType="practices" colorTheme="institutions" />
        </div>
      </div>
    </div>
  );
};
