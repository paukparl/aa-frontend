import clsx from "clsx";
import { DTAHeader } from "@/components/DTA/components/DTAHeader";
import { DTAGrid } from "@/components/DTA/layouts/DTAGrid";

type colorTheme = "people" | "practices" | "institutions" | "collections";
type gridType = "people" | "practices" | "institutions" | "collections";

type DTARelatedContentProps = {
  colorTheme: colorTheme;
  gridType: gridType;
  className?: string;
};

export const DTARelatedContent = ({
  className,
  gridType,
  colorTheme,
}: DTARelatedContentProps) => {
  const mockGridItems = {
    collections: [
      {
        title: "Name of Object",
        image: true,
        imgSrc: "/storybook/DTA/components/Grid/dta_grid_collections_1.jpg",
      },
      {
        title: "Name of Object",
        image: true,
        imgSrc: "/storybook/DTA/components/Grid/dta_grid_collections_2.jpg",
      },
      {
        title: "Name of Object",
        image: true,
        imgSrc: "/storybook/DTA/components/Grid/dta_grid_collections_3.jpg",
      },
    ],
    people: [
      {
        title: "John Owusu Addo",
        image: true,
        imgSrc: "/storybook/DTA/components/Grid/dta_grid_people_7.jpg",
        date: "8 Aug 1985",
      },
      {
        title: "Person's Name",
        date: "13 May 1995",
      },
      {
        title: "Kenneth Brian Frampton",
        image: true,
        imgSrc: "/storybook/DTA/components/Grid/dta_grid_people_3.jpg",
        date: "18 Feb 1959",
      },
      {
        title: "Besim Selim Hakim",
        image: true,
        imgSrc: "/storybook/DTA/components/Grid/dta_grid_people_4.jpg",
        date: "7 Jul 1970",
      },
      {
        title: "Sepala Wimaladharma Molligoda",
        image: true,
        imgSrc: "/storybook/DTA/components/Grid/dta_grid_people_5.jpg",
        date: "3 Jan 1897",
      },
    ],
    institutions: [
      {
        title: "Name of Institution",
        image: true,
        imgSrc: "/storybook/DTA/components/Grid/dta_grid_institutions_1.jpg",
      },
      {
        title: "Lorem Ipsum",
      },
      {
        title: "Lorem Ipsum",
        image: true,
        imgSrc: "/storybook/DTA/components/Grid/dta_grid_institutions_1.jpg",
      },
      {
        title: "Lorem Ipsum",
        image: true,
        imgSrc: "/storybook/DTA/components/Grid/dta_grid_institutions_1.jpg",
      },
    ],
    practices: [
      {
        title: "Ministry of Works",
        country: "Sierra Leone",
      },
      {
        title: "Federal Ministry of Works and Housing, Headquarters",
        country: "Lagos",
      },
      {
        title: "Associated Design Forum, Aspen, Colorado",
        country: "USA",
      },
      {
        title: "Norman Cherner, New York",
        country: "USA",
      },
      {
        title: "Durham County Council, Durham",
        country: "United Kingdom",
      },
      {
        title: "Architects Co-Partnership, Tema, Ghana",
        country: "USA",
      },
    ],
  };
  const colorThemeDict = {
    people: { className: "text-dta-people-foreground", gridItemClassName: "" },
    practices: {
      className: "text-dta-practices-foreground",
      gridItemClassName:
        "text-dta-practices-foreground border-dta-practices-foreground",
    },
    institutions: {
      className: "text-dta-institutions-foreground",
      gridItemClassName: "",
    },
    collections: {
      className: "text-dta-collections-foreground",
      gridItemClassName: "",
    },
  };
  return (
    <div className={className}>
      <DTAHeader
        className={(clsx("capitalize"), colorThemeDict[colorTheme].className)}
        children={`Related ${gridType}`}
      />
      <DTAGrid
        className={clsx(
          "pt-[10px] lg:pt-[20px]",
          colorThemeDict[colorTheme].className,
        )}
        gridItemClassName={colorThemeDict[colorTheme].gridItemClassName}
        items={mockGridItems[gridType]}
        type={gridType === "practices" ? "practicesgrid" : gridType}
      />
    </div>
  );
};
