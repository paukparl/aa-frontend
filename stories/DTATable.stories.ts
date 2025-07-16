import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import DTATablePeople from "@/components/DTA/layouts/DTATablePeople";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "DTA/03 Components/Table",
  component: DTATablePeople,
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
    type: { control: "text" },
    className: {
      table: { disable: true },
    },
    content: {
      table: { disable: true },
    },
  },
} satisfies Meta<typeof DTATablePeople>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Education: Story = {
  args: {
    type: "education",
    content: [
      { info: "Course, Institution, Country", year: "1984" },
      { info: "Course, Institution, Country", year: "1984" },
      { info: "Course, Institution, Country", year: "1984" },
      { info: "Course, Institution, Country", year: "1984" },
      { info: "Course, Institution, Country", year: "1984" },
      { info: "Course, Institution, Country", year: "1984" },
    ],
    className: "text-dta-people-foreground !w-[90vw] md:!w-[700px]",
  },
  globals: {
    backgrounds: { value: "light" },
  },
};
export const Career: Story = {
  args: {
    type: "career",
    content: [
      { info: "Role, Institution, Country", year: "1984" },
      { info: "Role, Institution, Country", year: "1984" },
      { info: "Role, Institution, Country", year: "1984" },
      { info: "Role, Institution, Country", year: "1984" },
      { info: "Role, Institution, Country", year: "1984" },
      { info: "Role, Institution, Country", year: "1984" },
    ],
    className: "text-dta-people-foreground !w-[90vw] md:!w-[700px]",
  },
  globals: {
    backgrounds: { value: "light" },
  },
};
