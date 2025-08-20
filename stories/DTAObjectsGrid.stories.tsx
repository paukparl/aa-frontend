import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import {
  DTAObjectsGrid,
  DTAObjectsGridItem,
} from "@/components/dta/components/DTAObjectsGrid";

const meta = {
  title: "DTA/Objects Grid",
  component: DTAObjectsGrid,
} satisfies Meta<typeof DTAObjectsGrid>;

export default meta;

type Story = StoryObj<typeof DTAObjectsGrid>;

// export const Primary: Story = {
//   args: {
//     children: <DTAObjectsGridItem object={slug: 'slug', title: 'title', image: z.array(img).nullable(),}/>,
//   },
// };
