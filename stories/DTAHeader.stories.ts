import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import DTAHeader from "@/components/DTA/components/DTAHeader";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "DTA/03 Components/Header",
  component: DTAHeader,
  parameters: {
    docs: {
      description: {
        component: " ",
      },
    },
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    title: { control: "text" },
    className: {
      table: { disable: true },
    },
  },
} satisfies Meta<typeof DTAHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    title: "Map",
    className: "text-dta-people-foreground !w-[90vw] md:!w-[700px]",
  },
};
