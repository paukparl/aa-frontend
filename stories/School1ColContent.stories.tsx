import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ProgrammeTextCol } from "@/components/school/components/ProgrammeTextCol";

const meta = {
  title: "School/Single Column Content",
  component: ProgrammeTextCol,
} satisfies Meta<typeof ProgrammeTextCol>;

export default meta;

type Story = StoryObj<typeof ProgrammeTextCol>;

export const Primary: Story = {
  args: {
    className: "p-10 700:p-30 text-dta-people-foreground",
    children: (
      <div>
        The first embodiment of this work is the Entangled Archive, a Graham
        Foundation-funded project to digitise material from the AA Department of
        Tropical Architecture (DTA, 1950-1972) and provide an online platform
        for researchers eager to examine the network of global relationships
        entangled with the DTA, and challenge the orthodoxy of its programme.
        The project will catalogue existing DTA material held by the AA
        Archives; make this work available through digitisation and publication
        in an online database; and contact living alumni to trace the legacy of
        the DTA discover and preserve missing documents, and to record the
        experiences of this dispersed international cohort. This resource and
        the online exhibition of the collated work will act as a springboard for
        discussion of the role of education in colonial and decolonial projects.
      </div>
    ),
  },
};
