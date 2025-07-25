import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { DTAContentDoubleCol } from "../components/dta/layouts/DTAContentDoubleCol";

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
    imgSrc: "/storybook/dta/components/2colContent/hal-portrait.jpg",
    textContent:
      "Jamaica College first opened its doors in 1795, as The Drax Free School in the vestry of the St. Ann’s Bay Courthouse in the parish of St. Ann. It was named for Charles Drax, a St. Ann planter who had left an endowment of over 5,000 pounds sterling for the establishment of a free school in his will, some years before. In 1806, Walton Pen in St. Ann was purchased to house the school, and it was renamed The Jamaica Free School.",
    colorTheme: "people",
  },
  globals: {
    backgrounds: { value: "light" },
  },
};
export const Publication: Story = {
  args: {
    contentType: "publication",
    textContent:
      "After studying at the Architectural Association in London, John Godwin and Gillian Hopwood moved to Nigeria, where they significantly shaped the country's architectural landscape for more than sixty years. When Nigeria became independent in 1960 following British dominance since the 19th century, the couple worked to create architecture that was site-specific, modern, and adapted to the climate relevant to Nigeria's aspirational political and economic policies. In this richly illustrated monograph, organised by typology, Ben Tosland examines Godwin and Hopwood's form of tropical modernism and illuminates its contemporary meanings and concluding with its relevance in times of the climate crisis.",
    colorTheme: "about",
  },
  globals: {
    backgrounds: { value: "light" },
  },
};
