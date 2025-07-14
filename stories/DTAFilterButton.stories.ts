import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import DTAFilterButton from "../components/DTA/components/DTAFilterButton";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "DTA/03 Components/Filter/Filter Button",
  component: DTAFilterButton,
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
    children: {
      table: { disable: true },
    },
    filterState: {
      control: "select",
      options: ["minimized", "expanded", "applied"],
    },
    colorTheme: {
      table: { disable: true },
    },
  },
} satisfies Meta<typeof DTAFilterButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const People: Story = {
  args: {
    children: "Filter by alphabet",
    className: "w-[90vw] sm:w-[500px]",
    filterState: "minimized",
    colorTheme: "people",
  },
};
export const Practices: Story = {
  args: {
    children: "Filter by alphabet",
    className: "w-[90vw] sm:w-[500px]",
    filterState: "minimized",
    colorTheme: "practices",
  },
};
export const Institutions: Story = {
  args: {
    children: "Filter by alphabet",
    className: "w-[90vw] sm:w-[500px]",
    filterState: "minimized",
    colorTheme: "institutions",
  },
};
export const Collections: Story = {
  args: {
    children: "Filter by alphabet",
    className: "w-[90vw] sm:w-[500px]",
    filterState: "minimized",
    colorTheme: "collections",
  },
  globals: {
    backgrounds: { value: "light" },
  },
};
