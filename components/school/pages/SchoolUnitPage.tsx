import { notFound } from "next/navigation";
import { getSchoolProgramme } from "@/api/getSchoolProgramme";
import { getSchoolUnit } from "@/api/getSchoolUnit";
import { UL } from "@/components/Typography/UL";
import ViewTransitionTipinPage from "@/components/ViewTransitionTipinPage";
import { ButtonCTA } from "@/components/globals/components/ButtonCTA";
import { MediaGallery } from "@/components/globals/components/MediaGallery";
import { ProgrammeDoubleTextCol } from "@/components/school/components/ProgrammeDoubleTextCol";
import { ProgrammeGridStudentWork } from "@/components/school/components/ProgrammeGridStudentWork";
import { UnitTableInfo } from "@/components/school/components/UnitTableInfo";
import { routes } from "@/lib/routes";

export async function SchoolUnitPage({
  programmeSlug,
  slug,
}: {
  programmeSlug: string;
  slug: string;
}) {
  const [programme, unit] = await Promise.all([
    getSchoolProgramme(programmeSlug),
    getSchoolUnit(slug),
  ]);

  if (!programme || !unit) notFound();
  return (
    <ViewTransitionTipinPage
      type="2"
      bg={programme.hexValue ?? "var(--color-white)"}
      fg={"var(--color-black)"}
      title={unit.unitTitle}
      ancestors={[
        { title: "Programmes", path: routes.ground("school-programmes") },
        {
          title: programme.programmeTitle ?? "",
          path: routes.tipin1("school-programmes", programmeSlug),
        },
      ]}
    >
      <div className="p-(--padding)">
        <h1 className="tipin">{unit.unitTitle}</h1>
        <MediaGallery
          className="mt-(--padding)"
          colorTheme="school-programmes"
          slides={[
            {
              src: unit.representativeImage?.url,
              caption: unit.representativeImage?.caption,
            },
          ]}
        />
        <UnitTableInfo
          items={[
            {
              type: "Course Tutors",
              content: `${unit.school_people.map((person) => `${person.firstName} ${person.lastName}`).join(", ")}`,
            },
            { type: "Term", content: `${unit.term}` },
          ]}
        />
        <h1 className="tipin mb-(--padding)">Synopsis</h1>
        <ProgrammeDoubleTextCol
          col1Content={
            <div className="body">
              DIP2 is interested in the political role of the architect from the
              ground up. We take the neighbourhood as the nexus of political
              action and decision-making, rather than conventional arenas of
              centralised and hierarchical political systems such as the
              parliament. Here, architectural practice is the creative project
              to be redesigned, and residents in neighbourhoods are the real
              political bodies that should have agency to effect this power
              shift. The unit develops methods that mobilise and collectivise
              communities, design organisations and systems, and create social
              engagement as a new form of architectural craft.
              <br />
              <br />
              Movements and discourses of the Commons are already engaged in
              different disciplines globally to implement this alternative
              political position. The unit will develop projects framed as
              Distributive New Commons as part of this wider global impetus. To
              explore an economically independent form of architectural
              practice, we use the model of the DAO (decentralised autonomous
              organisation) blockchain governance system: a global democratic
              organisational model aligned with the New Commons.
            </div>
          }
          col2Content={
            <div className="body">
              This year, we have two distinct sites: a physical site in Archway,
              London and the digital site of the Reclaim the Commons DAO, which
              we construct together in Web3. Students will start the year with
              something they feel passionate about (be it architectural or not),
              and that passion will drive their design and sociopolitical
              project.
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          }
        />
        <h1 className="tipin my-(--padding) pt-(--padding)">Content</h1>
        <ProgrammeDoubleTextCol
          col1Content={
            <div className="body">
              DIP2 is interested in the political role of the architect from the
              ground up. We take the neighbourhood as the nexus of political
              action and decision-making, rather than conventional arenas of
              centralised and hierarchical political systems such as the
              parliament. Here, architectural practice is the creative project
              to be redesigned, and residents in neighbourhoods are the real
              political bodies that should have agency to effect this power
              shift. The unit develops methods that mobilise and collectivise
              communities, design organisations and systems, and create social
              engagement as a new form of architectural craft.
              <br />
              <br />
              Movements and discourses of the Commons are already engaged in
              different disciplines globally to implement this alternative
              political position. The unit will develop projects framed as
              Distributive New Commons as part of this wider global impetus. To
              explore an economically independent form of architectural
              practice, we use the model of the DAO (decentralised autonomous
              organisation) blockchain governance system: a global democratic
              organisational model aligned with the New Commons.
            </div>
          }
          col2Content={
            <div className="body">
              This year, we have two distinct sites: a physical site in Archway,
              London and the digital site of the Reclaim the Commons DAO, which
              we construct together in Web3. Students will start the year with
              something they feel passionate about (be it architectural or not),
              and that passion will drive their design and sociopolitical
              project.
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          }
        />
        <h1 className="tipin my-(--padding) pt-(--padding)">Output</h1>
        <ProgrammeDoubleTextCol
          col1Content={
            <UL>
              {[
                <div className="body" key={1}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>,
                <div className="body" key={2}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>,
                <div className="body" key={3}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>,
                <div className="body" key={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>,
                <div className="body" key={5}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>,
              ]}
            </UL>
          }
          col2Content={
            <UL>
              {[
                <div className="body" key={6}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>,
                <div className="body" key={7}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>,
                <div className="body" key={8}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>,
                <div className="body" key={9}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>,
                <div className="body" key={10}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>,
              ]}
            </UL>
          }
        />
        {unit.extendedBriefFile && (
          <ButtonCTA
            className="mt-(--padding)"
            link={unit.extendedBriefFile.url}
            label="Download extended brief ↗"
          />
        )}
        {unit.studentWorkItem?.length > 0 && (
          <ProgrammeGridStudentWork
            className="mt-50"
            projectReviewLink={unit.projectReviewLink}
            items={unit.studentWorkItem.map((artwork) => ({
              title: artwork.studentWorkItemTitle,
              artist: artwork.studentFirstLastName,
              imgSrc: artwork.studentWorkItemImage?.url,
              link: "",
            }))}
          />
        )}
      </div>
    </ViewTransitionTipinPage>
  );
}
