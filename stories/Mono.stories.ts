import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Mono } from "../components/Typography/Mono";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Typography/Mono",
  component: Mono,
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
} satisfies Meta<typeof Mono>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    children: "Collection: Otto Koenigsberger Collection",
  },
  globals: {
    backgrounds: { value: "light" },
  },
};
