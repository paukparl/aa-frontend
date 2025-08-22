import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ProgrammeDoubleTextCol } from "@/components/school/components/ProgrammeDoubleTextCol";

const meta = {
  title: "School/Double Column Content",
  component: ProgrammeDoubleTextCol,
} satisfies Meta<typeof ProgrammeDoubleTextCol>;

export default meta;

type Story = StoryObj<typeof ProgrammeDoubleTextCol>;

export const Primary: Story = {
  args: {
    className: "p-10 700:p-30 text-dta-people-foreground",
    col1Content: (
      <div className="body">
        DIP2 is interested in the political role of the architect 'from the
        ground up'. We take the neighbourhood as the nexus of political action
        and decision-making, rather than conventional arenas of centralised and
        hierarchical political systems such as the parliament. Here,
        architectural practice is the creative project to be redesigned, and
        residents in neighbourhoods are the real political bodies that should
        have agency to effect this power shift. The unit develops methods that
        mobilise and collectivise communities, design organisations and systems,
        and create social engagement as a new form of architectural craft.
        <br />
        <br />
        Movements and discourses of the Commons are already engaged in different
        disciplines globally to implement this alternative political position.
        The unit will develop projects framed as Distributive New Commons as
        part of this wider global impetus. To explore an economically
        independent form of architectural practice, we use the model of the DAO
        (decentralised autonomous organisation) blockchain governance system: a
        global democratic organisational model aligned with the New Commons.
      </div>
    ),
    col2Content: (
      <div className="body">
        This year, we have two distinct sites: a physical site in Archway,
        London and the digital site of the Reclaim the Commons DAO, which we
        construct together in Web3. Students will start the year with something
        they feel passionate about (be it architectural or not), and that
        passion will drive their design and sociopolitical project.
        <br />
        <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </div>
    ),
  },
};
