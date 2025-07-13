import clsx from "clsx";
import * as React from "react";
import DTAHeader from "@/components/DTA/components/DTAHeader";
import DTATipinMap from "@/components/DTA/components/DTATipinMap";
import DTARelatedCollections from "@/components/DTA/layouts/DTARelatedCollections";
import DTARelatedPeople from "@/components/DTA/layouts/DTARelatedPeople";
import DTARelatedPractices from "@/components/DTA/layouts/DTARelatedPractices";
import { Body } from "@/components/Typography/Body";
import { H1 } from "@/components/Typography/H1";
import TipinHeader from "@/components/globals/layouts/TipinHeader";

type DTAInstitutionProps = {
  className?: string;
  title: string;
  imgSrc: string;
  info: string;
  relatedCollections: Array<Record<string, any>>;
};

// const mockInstitutionData = {
//   title: "Jamaica College",
//   imgSrc: "",
//   info: "Jamaica College first opened its doors in 1795, as The Drax Free School in the vestry of the St. Ann’s Bay Courthouse in the parish of St. Ann. It was named for Charles Drax, a St. Ann planter who had left an endowment of over 5,000 pounds sterling for the establishment of a free school in his will, some years before. In 1806, Walton Pen in St. Ann was purchased to house the school, and it was renamed The Jamaica Free School.",
//   relatedCollections: [
//     {
//       title: "Name of Collection",
//       image: true,
//       imgSrc: "/storybook/DTA/components/Grid/dta_grid_collections_1.jpg",
//     },
//     {
//       title: "Name of Collection",
//       image: true,
//       imgSrc: "/storybook/DTA/components/Grid/dta_grid_collections_2.jpg",
//     },
//     {
//       title: "Name of Collection",
//       image: true,
//       imgSrc: "/storybook/DTA/components/Grid/dta_grid_collections_3.jpg",
//     },
//   ],
// };

// const DTAInstitutionProps = { mockInstitutionData };

export default ({ className, title, info }: DTAInstitutionProps) => {
  return (
    <div
      className={clsx(
        className,
        "text-dta-institutions-foreground flex min-h-[100vh] w-full flex-col bg-[rgba(255,255,255,.95)] py-[30px] backdrop-blur-lg lg:w-[75%]",
      )}
    >
      <TipinHeader
        className="px-[30px]"
        pageTitle={title}
        breadcrumbLinks={[{ title: "DTA Archive" }, { title: "Institutions" }]}
        colorTheme="dta-institutions"
      />
      <H1 tipIn className="px-[30px] pt-[40px]" children={title} />
      <Body className="px-[30px] pt-[30px]" children={info} />
      <div className="mt-[30px] px-[30px]">
        <DTAHeader children="Related People" />
        <DTATipinMap colorTheme="institutions" />
      </div>
      <div className="mt-[30px] px-[30px]">
        <DTAHeader children="Related Practices" />
      </div>
      <div className="mt-[30px] px-[30px]">
        <DTAHeader children="Related Collections" />
      </div>
    </div>
  );
};
