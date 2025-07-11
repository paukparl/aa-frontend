import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import DTAPractices from "@/components/DTA/pages/DTAPractices";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "DTA/01 Pages/Practices",
  component: DTAPractices,
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
  },
} satisfies Meta<typeof DTAPractices>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    className: "",
  },
  globals: {
    backgrounds: { value: "dark" },
  },
};
