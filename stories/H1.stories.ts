import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { H1 } from "../components/Typography/H1";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Typography/H1",
  component: H1,
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
    tipIn: {
      table: {
        disable: true,
      },
    },
    className: {
      table: { disable: true },
    },
  },
} satisfies Meta<typeof H1>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    children: "Practices",
    tipIn: false,
  },
  globals: {
    backgrounds: { value: "light" },
  },
};

export const TipIn: Story = {
  args: {
    children: "Ministry of Work",
    tipIn: true,
  },
  globals: {
    backgrounds: { value: "light" },
  },
};
