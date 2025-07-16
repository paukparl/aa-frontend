import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { DTAFilterCollections } from "@/components/DTA/components/DTAFilterCollections";

const meta = {
  title: "DTA/03 Components/Filter/Collections Filter",
  component: DTAFilterCollections,
  parameters: {
    docs: {
      description: {
        component: " ",
      },
    },
  },
  argTypes: {
    className: {
      table: { disable: true },
    },
  },
} satisfies Meta<typeof DTAFilterCollections>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    className: "px-[40px] pt-[30vh]",
  },
  globals: {
    backgrounds: { value: "light" },
  },
};
