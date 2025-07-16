import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import DTARelatedContent from "../components/DTA/layouts/DTARelatedContent";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "DTA/03 Components/Related Content Row",
  component: DTARelatedContent,
  parameters: {
    docs: {
      description: {
        component: "",
      },
    },
  },
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    className: {
      table: { disable: true },
    },
    gridType: {
      control: "select",
      options: ["people", "practices", "institutions", "collections"],
    },
    colorTheme: {
      control: "select",
      options: ["people", "practices", "institutions", "collections"],
    },
  },
} satisfies Meta<typeof DTARelatedContent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    colorTheme: "people",
    gridType: "people",
    className: "p-[20px] sm:p-[30px]",
  },
  globals: {
    backgrounds: { value: "light" },
  },
};
