import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { DTABody } from '../components/DTA/DTABody';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'DTA/Typography/Body',
  component: DTABody,
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
    tipInRoute: { control: 'select',
    options: ['people', 'practices', 'institutions', 'collections', 'about', 'search'], },
  },
} satisfies Meta<typeof DTABody>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    content: 'The first embodiment of this work is the Entangled Archive, a Graham Foundation-funded project to digitise material from the AA Department of Tropical Architecture (DTA, 1950–1972) and provide an online platform for researchers eager to examine the network of global relationships entangled with the DTA, and challenge the orthodoxy of its programme. The project will catalogue existing DTA material held by the AA Archives; make this work available through digitisation and publication in an online database; and contact living alumni to trace the legacy of the DTA discover and preserve missing documents, and to record the experiences of this dispersed international cohort. This resource and the online exhibition of the collated work will act as a springboard for discussion of the role of education in colonial and decolonial projects.',
    tipInRoute: 'practices',
  },
};