import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { DTAH2 } from '../components/DTA/DTAH2';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'DTA/Typography/H2',
  component: DTAH2,
  parameters: {
    docs: {
      description: {
        component: 'H2 styling is only shown in the about section of the Figma',
      },
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    title: { control: 'text' },
    tipInRoute: { control: 'select',
    options: ['people', 'practices', 'institutions', 'collections', 'about', 'search'], },
  },
} satisfies Meta<typeof DTAH2>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    title: 'Who Are Goodwin and Hopwood?',
    tipInRoute: 'about',
  },
};