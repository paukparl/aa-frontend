import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Body } from "../components/Typography/Body";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Typography/Body",
  component: Body,
  parameters: {
    docs: {
      description: {
        component: " ",
      },
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    children: { control: "text" },
  },
} satisfies Meta<typeof Body>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    children:
      "The Department of Tropical Architecture Archive provides an online digital platform to make the work held by the Architectural Association (AA) Archive and the dispersed work of the graduates of the Department of Tropical Architecture (DTA) available to the next generation of researchers eager to examine the network of global relationships and challenge the orthodoxy of the DTA program.",
  },
};
