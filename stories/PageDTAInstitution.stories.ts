import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { PageDTAInstitution } from "@/components/dta/pages/PageDTAInstitution";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "DTA/01 Pages/02 Tip-In/Institution",
  component: PageDTAInstitution,
  parameters: {
    docs: {
      description: {
        component: " ",
      },
    },
    backgrounds: {
      options: {
        light: { name: "Light", value: "#ffffff" },
        dark: { name: "Dark", value: "#1d453f" },
      },
    },
  },
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    className: {
      table: { disable: true },
    },
    title: {
      table: { disable: true },
    },
    imgSrc: {
      table: { disable: true },
    },
    info: {
      table: { disable: true },
    },
    relatedCollections: {
      table: { disable: true },
    },
  },
} satisfies Meta<typeof PageDTAInstitution>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    title: "Jamaica College",
    imgSrc: "",
    info: "Jamaica College first opened its doors in 1795, as The Drax Free School in the vestry of the St. Ann’s Bay Courthouse in the parish of St. Ann. It was named for Charles Drax, a St. Ann planter who had left an endowment of over 5,000 pounds sterling for the establishment of a free school in his will, some years before. In 1806, Walton Pen in St. Ann was purchased to house the school, and it was renamed The Jamaica Free School.",
    relatedCollections: [
      {
        title: "Name of Collection",
        image: true,
        imgSrc: "/storybook/dta/components/Grid/dta_grid_collections_1.jpg",
      },
      {
        title: "Name of Collection",
        image: true,
        imgSrc: "/storybook/dta/components/Grid/dta_grid_collections_2.jpg",
      },
      {
        title: "Name of Collection",
        image: true,
        imgSrc: "/storybook/dta/components/Grid/dta_grid_collections_3.jpg",
      },
    ],
  },
  globals: {
    backgrounds: { value: "dark" },
  },
};
