import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import DTARelatedPeople from "../components/DTA/layouts/DTARelatedPeople";

const gridItems = [
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
];
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "DTA/02 Layouts/Related Content Rows/People",
  component: DTARelatedPeople,
  parameters: {
    docs: {
      description: {
        component: "",
      },
    },
    layout: "centered",
  },
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    className: {
      table: { disable: true },
    },
    gridItems: {
      table: { disable: true },
    },
    colorTheme: {
      control: "select",
      options: ["people", "practices", "institutions", "collections"],
    },
  },
} satisfies Meta<typeof DTARelatedPeople>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    gridItems: gridItems,
    colorTheme: "people",
  },
};
