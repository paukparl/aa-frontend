import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import DTATipinMap from "../components/DTA/components/DTATipinMap";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "DTA/02 Layouts/Tip-in Map",
  component: DTATipinMap,
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
    colorTheme: {
      control: "select",
      options: ["people", "practices", "institutions", "collections"],
    },
  },
} satisfies Meta<typeof DTATipinMap>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    colorTheme: "people",
  },
  globals: {
    backgrounds: { value: "light" },
  },
};
