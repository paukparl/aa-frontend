import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { DTATooltip } from "@/components/DTA/components/Map/DTATooltip";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "DTA/03 Components/Tooltip/Tooltip",
  component: DTATooltip,
  parameters: {
    docs: {
      description: {
        component: " ",
      },
    },
    backgrounds: {
      options: {
        light: { name: "Light", value: "#ffffff" },
        dark: { name: "Dark", value: "#7C6D5A" },
      },
    },
    layout: "centered",
  },
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    className: { control: "text" },
  },
} satisfies Meta<typeof DTATooltip>;

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
