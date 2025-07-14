import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import DTAFilterAlphabet from "@/components/DTA/components/DTAFilterAlphabet";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "DTA/02 Layouts/Filters/Alphabet Filters",
  component: DTAFilterAlphabet,
  parameters: {
    docs: {
      description: {
        component: " ",
      },
    },
  },
  argTypes: {
    colorTheme: {
      table: { disable: true },
    },
    className: {
      table: { disable: true },
    },
  },
} satisfies Meta<typeof DTAFilterAlphabet>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    colorTheme: "people",
    className: "px-[40px] pt-[30vh]",
  },
  globals: {
    backgrounds: { value: "light" },
  },
};
