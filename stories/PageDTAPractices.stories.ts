import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { PageDTAPractices } from "@/components/DTA/pages/PageDTAPractices";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "DTA/01 Pages/01 Tip-In/Practices",
  component: PageDTAPractices,
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
} satisfies Meta<typeof PageDTAPractices>;

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
