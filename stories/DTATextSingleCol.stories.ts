import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import DTAContentSingleCol from "@/components/DTA/layouts/DTAContentSingleCol";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "DTA/02 Layouts/Single Column Content",
  component: DTAContentSingleCol,
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
    children: { control: "text" },
    className: {
      table: { disable: true },
    },
  },
} satisfies Meta<typeof DTAContentSingleCol>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    children:
      "The Department of Tropical Architecture Archive provides an online digital platform to make the work held by the Architectural Association (AA) Archive and the dispersed work of the graduates of the Department of Tropical Architecture (DTA) available to the next generation of researchers eager to examine the network of global relationships and challenge the orthodoxy of the DTA program.",
  },
  globals: {
    backgrounds: { value: "light" },
  },
};
