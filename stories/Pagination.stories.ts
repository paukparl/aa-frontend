import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { FooterPagination } from "../components/globals/components/FooterPagination";

const meta = {
  title: "globals/Components/Pagination",
  component: FooterPagination,
  parameters: {
    docs: {
      description: {
        component: " ",
      },
    },
    layout: "centered",
  },
  argTypes: {
    totalPages: { control: "number" },
    className: {
      table: { disable: true },
    },
  },
} satisfies Meta<typeof FooterPagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    totalPages: 30,
    className: "w-[300px]",
  },
  globals: {
    backgrounds: { value: "light" },
  },
};
