import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { PagePostgradTipIn } from "@/components/School/Programmes/pages/PagePostgradTipIn";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "School/Programmes/01 Pages/02 Tip-In/Taught Postgraduate",
  component: PagePostgradTipIn,
  parameters: {
    docs: {
      description: {
        component: " ",
      },
    },
    backgrounds: {
      options: {
        light: { name: "Light", value: "#ffffff" },
        dark: { name: "Dark", value: "#cbcbc8" },
      },
    },
  },
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    className: {
      table: { disable: true },
    },
  },
} satisfies Meta<typeof PagePostgradTipIn>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    className: "lg:w-[90%]",
  },
  globals: {
    backgrounds: { value: "dark" },
  },
};
