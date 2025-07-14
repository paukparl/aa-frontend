import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import TipinHeader from "@/components/globals/layouts/TipinHeader";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Globals/Layouts/Tip-In Header",
  component: TipinHeader,
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
    breadcrumbLinks: {
      table: { disable: true },
    },
    className: {
      table: { disable: true },
    },
    pageTitle: {
      table: { disable: true },
    },
    colorTheme: {
      control: "select",
      options: [
        "dta-people",
        "dta-practices",
        "dta-institutions",
        "dta-collections",
        "dta-about",
        "dta-search",
      ],
    },
  },
} satisfies Meta<typeof TipinHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    pageTitle: "Handel Kitchiner (Hal) Lawson",
    breadcrumbLinks: [{ title: "DTA Archive" }, { title: "People" }],
    colorTheme: "dta-people",
    className: "w-[75vw]",
  },
  globals: {
    backgrounds: { value: "light" },
  },
};
