// TODO
// prop validation that all items passed into items have the same type
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import DTAGrid from "../components/DTA/layouts/DTAGrid";

const peopleItems = [
  {
    title: "Ronald Arthur Diss",
    image: true,
    imgSrc: "/storybook/DTA/components/Grid/dta_grid_people_1.jpg",
    date: "3 Sep 1984",
  },
  {
    title: "George Bernard Finch",
    image: true,
    imgSrc: "/storybook/DTA/components/Grid/dta_grid_people_2.jpg",
    date: "1 Oct 1974",
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
  {
    title: "I. Gusti Gede Ngurah",
    image: true,
    imgSrc: "/storybook/DTA/components/Grid/dta_grid_people_6.jpg",
    date: "14 Dec 1990",
  },
  {
    title: "John Owusu Addo",
    image: true,
    imgSrc: "/storybook/DTA/components/Grid/dta_grid_people_7.jpg",
    date: "8 Aug 1985",
  },
  {
    title: "Sau Yan Sonny Chan",
    image: true,
    imgSrc: "/storybook/DTA/components/Grid/dta_grid_people_8.jpg",
    date: "19 Jun 1992",
  },
  {
    title: "Syamal De Sarkar",
    image: true,
    imgSrc: "/storybook/DTA/components/Grid/dta_grid_people_9.jpg",
    date: "30 Jun 1980",
  },
  {
    title: "Kingsley Oliver Robotham",
    image: true,
    imgSrc: "/storybook/DTA/components/Grid/dta_grid_people_10.jpg",
    date: "28 Feb 1988",
  },
  {
    title: "Joel Ghivelder",
    image: true,
    imgSrc: "/storybook/DTA/components/Grid/dta_grid_people_11.jpg",
    date: "17 Apr 1905",
  },
  {
    title: "Lorem Ipsum Dolor Sit",
    image: true,
    imgSrc: "/storybook/DTA/components/Grid/dta_grid_people_12.jpg",
    date: "21 Sep 1937",
  },
];
const collectionsItems = [
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
];
const institutionsItems = [
  {
    title: "Name of Institution",
    image: true,
    imgSrc: "/storybook/DTA/components/Grid/dta_grid_institutions_1.jpg",
  },
  {
    title: "Lorem Ipsum",
  },
  {
    title: "Institute XYZ",
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
];
const practicesItems = [
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
  {
    title: "Lyles, Bissett, Carlyle and Wolff",
    country: "USA",
  },
  {
    title: "Public Works Department",
    country: "Malaysia",
  },
  {
    title: "Ghana Architectural and Civil Engineering Company",
    country: "Ghana",
  },
  {
    title: "Quine and Newberry, London",
    country: "United Kingdom",
  },
  {
    title: "Chartered surveyors",
    country: "United Kingdom",
  },
];

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "DTA/02 Layouts/Grid",
  component: DTAGrid,
  parameters: {
    docs: {
      description: {
        component:
          'Dynamically renders a grid based on type (people, collections, etc.). Choose an option from the "type" field below.',
      },
    },
  },
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  args: {
    type: "people",
  },
  argTypes: {
    type: {
      control: "select",
      options: [
        "people",
        "institutions",
        "practicesgrid",
        "practicestable",
        "collections",
      ],
    },
    items: {
      table: { disable: true }, // hidden since we're setting it based on type
    },
  },
  render: (args: { type: string; [key: string]: any }) => {
    const { type, ...rest } = args;

    const itemsMap = {
      people: peopleItems,
      institutions: institutionsItems,
      practicesgrid: practicesItems,
      practicestable: practicesItems,
      collections: collectionsItems,
    };

    return <DTAGrid {...rest} type={type} items={itemsMap[type]} />;
  },
} satisfies Meta<typeof DTAGrid>;

export default meta;

// Optional: single story for interaction
export const Interactive: StoryObj<typeof meta> = {
  args: {
    type: "people", // initial value
  },
};
