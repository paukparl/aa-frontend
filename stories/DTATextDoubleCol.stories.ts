import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import DTAContentDoubleCol from "../components/DTA/layouts/DTAContentDoubleCol";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "DTA/02 Layouts/Double Column Content",
  component: DTAContentDoubleCol,
  parameters: {
    docs: {
      description: {
        component: " ",
      },
    },
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    colorTheme: {
      control: "select",
      options: ["people", "institutions", "collections", "about"],
    },
    textContent: {
      table: { disable: true },
    },
    className: {
      table: { disable: true },
    },
    imgSrc: {
      table: { disable: true },
    },
    contentType: {
      table: { disable: true },
    },
  },
} satisfies Meta<typeof DTAContentDoubleCol>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Image: Story = {
  args: {
    className: "p-[30px]",
    contentType: "image",
    imgSrc: "/storybook/DTA/components/2colContent/hal-portrait.jpg",
    textContent:
      "Jamaica College first opened its doors in 1795, as The Drax Free School in the vestry of the St. Ann’s Bay Courthouse in the parish of St. Ann. It was named for Charles Drax, a St. Ann planter who had left an endowment of over 5,000 pounds sterling for the establishment of a free school in his will, some years before. In 1806, Walton Pen in St. Ann was purchased to house the school, and it was renamed The Jamaica Free School.",
    colorTheme: "people",
  },
};
export const Publication: Story = {
  args: {
    contentType: "publication",
    textContent:
      "The Department of Tropical Architecture Archive provides an online digital platform to make the work held by the Architectural Association (AA) Archive and the dispersed work of the graduates of the Department of Tropical Architecture (DTA) available to the next generation of researchers eager to examine the network of global relationships and challenge the orthodoxy of the DTA program.",
    colorTheme: "collections",
  },
};
