import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { CardPublication } from "../components/globals/components/CardPublication";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "globals/Components/Publication Card",
  component: CardPublication,
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
    title: {
      table: { disable: true },
    },
    author: {
      table: { disable: true },
    },
    imgSrc: {
      table: { disable: true },
    },
    className: {
      table: { disable: true },
    },
  },
} satisfies Meta<typeof CardPublication>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    title: "Who are Godwin and Hopwood?",
    author: "Ben Tosland",
    imgSrc: "/storybook/dta/components/2colContent/pub.png",
    className: "",
  },
  globals: {
    backgrounds: { value: "light" },
  },
};
