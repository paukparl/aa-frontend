import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { DTAContentDoubleCol } from "@/components/dta/layouts/DTAContentDoubleCol";

const meta = {
  title: "DTA/Double Column Content",
  component: DTAContentDoubleCol,
} satisfies Meta<typeof DTAContentDoubleCol>;

export default meta;

type Story = StoryObj<typeof DTAContentDoubleCol>;

export const Primary: Story = {
  args: {
    className: "p-10 700:p-30",
    contentType: "image",
    imgSrc: "/storybook/DTA/components/2colContent/jamaica-col.jpg",
    colorTheme: "institutions",
    children: (
      <div>
        Jamaica College first opened its doors in 1795, as The Drax Free School
        in the vestry of the St. Ann's Bay Courthouse in the parish of St. Ann.
        It was named for Charles Drax, a St. Ann planter who had left an
        endowment of over 5,000 pounds sterling for the establishment of a free
        school in his will, some years before. In 1806, Walton Pen in St. Ann
        was purchased to house the school, and it was renamed The Jamaica Free
        School.
      </div>
    ),
  },
};
