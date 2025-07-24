import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { HeaderBreadcrumb } from "@/components/globals/components/HeaderBreadcrumb";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "globals/Components/Header Breadcrumb",
  component: HeaderBreadcrumb,
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
    links: {
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
} satisfies Meta<typeof HeaderBreadcrumb>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    pageTitle: "Handel Kitchiner (Hal) Lawson",
    links: [{ title: "DTA Archive" }, { title: "People" }],
    colorTheme: "dta-people",
  },
  globals: {
    backgrounds: { value: "light" },
  },
};
