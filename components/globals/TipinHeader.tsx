import clsx from "clsx";
import React from "react";
import HeaderBreadcrumb from "@/components/globals/HeaderBreadcrumb";

type colorTheme =
  | "dta-people"
  | "dta-practices"
  | "dta-institutions"
  | "dta-collections"
  | "dta-about"
  | "dta-search";
type DTATipinHeaderProps = {
  pageTitle: string;
  className?: string;
  colorTheme: colorTheme;
  breadcrumbLinks: Array<Record<string, any>>;
};

export default ({
  className,
  pageTitle,
  breadcrumbLinks,
}: DTATipinHeaderProps) => {
  <div className={clsx(className, "flex h-[75px] w-[100%] justify-between")}>
    <div>
      menu,
      <HeaderBreadcrumb
        links={[{ title: "DTA Archive" }]}
        pageTitle={pageTitle}
      />
    </div>
    <div>exit</div>
  </div>;
};
