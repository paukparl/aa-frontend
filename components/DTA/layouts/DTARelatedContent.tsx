import DTAHeader from "@/components/DTA/components/DTAHeader";
import DTAGrid from "@/components/DTA/layouts/DTAGrid";

type colorTheme = "people" | "practices" | "institutions" | "collections";
type gridType = "people" | "practices" | "institutions" | "collections";

type DTARelatedCollectionsProps = {
  colorTheme: colorTheme;
  gridType: gridType;
  className?: string;
};

export default ({
  className,
  gridType,
  colorTheme,
}: DTARelatedCollectionsProps) => {
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
  return (
    <div>
      <DTAHeader className="capitalize" children={`Related ${gridType}`} />
      <DTAGrid
        items={mockGridItems[gridType]}
        type={gridType === "practices" ? "practicesgrid" : gridType}
      />
    </div>
  );
};
