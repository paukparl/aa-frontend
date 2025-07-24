import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ButtonWindow } from "../components/globals/components/ButtonWindow";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "globals/Components/Window Button",
  component: ButtonWindow,
  parameters: {
    docs: {
      description: {
        component: " ",
      },
    },
    layout: "centered",
  },
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    displayText: {
      table: { disable: true },
    },
    className: {
      table: { disable: true },
    },
    colorTheme: {
      table: { disable: true },
    },
    link: {
      table: { disable: true },
    },
  },
} satisfies Meta<typeof ButtonWindow>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    displayText: "Become\na Member",
    colorTheme: "dta-map",
    link: "",
    className: "",
  },
  globals: {
    backgrounds: { value: "dark" },
  },
};
