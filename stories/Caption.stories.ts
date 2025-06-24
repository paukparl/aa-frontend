import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Caption } from '../components/Typography/Caption';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Typography/Caption',
  component: Caption,
  parameters: {
    docs: {
      description: {
        component: ' ',
      },
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    content: { control: 'text' },
  },
} satisfies Meta<typeof Caption>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    content: 'Caption Lorem Ipsum',
  },
};