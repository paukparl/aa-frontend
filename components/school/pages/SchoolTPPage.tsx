import { notFound } from "next/navigation";
import { getSchoolProgramme } from "@/api/getSchoolProgramme";
import { getSchoolTPProgrammes } from "@/api/getSchoolTPProgrammes";
import ViewTransitionTipinPage from "@/components/ViewTransitionTipinPage";
import { ButtonWindow } from "@/components/globals/components/ButtonWindow";
import { ProgrammeTableInfo } from "@/components/school/components/ProgrammeTableInfo";
import { ProgrammeTableProgrammes } from "@/components/school/components/ProgrammeTableProgrammes";
import { ProgrammeTextCol } from "@/components/school/components/ProgrammeTextCol";
import { routes } from "@/lib/routes";

export async function SchoolTPPage() {
  const [taughtPostgrad, childProgrammes] = await Promise.all([
    getSchoolProgramme("taught-postgraduate"),
    getSchoolTPProgrammes(),
  ]);

  if (!taughtPostgrad) notFound();
  return (
    <ViewTransitionTipinPage
      type="1"
      bg={"var(--color-white)"}
      fg={"var(--color-black)"}
      title={taughtPostgrad.programmeTitle}
      ancestors={[
        { title: "Programmes", path: routes.ground("school-programmes") },
      ]}
    >
      <div className="p-(--padding) pb-100">
        <h1 className="tipin">{taughtPostgrad.programmeTitle}</h1>
        <ProgrammeTableInfo
          degreeAwarded={taughtPostgrad.degreeAwarded}
          durationText={taughtPostgrad.durationText}
        />
        <ProgrammeTextCol
          className="mt-(--padding)"
          col2content={
            <div className="flex justify-center">
              <ButtonWindow
                links={[
                  { displayText: "Apply", link: "" },
                  { displayText: "Enquire to study", link: "" },
                  { displayText: "Download program guide", link: "" },
                ]}
                context="school"
                colorTheme="school"
              />
            </div>
          }
        >
          Term 1 of the Foundation Course focuses on observation, conversation
          and developing key skills. We will begin by crafting portraits of
          mother Earth, our hometown and ourselves, and will discuss our
          influence upon and duties towards our local environment in light of
          the climate crisis. This will prepare us for active participation in
          the school-wide conversations that take place during Climate Matters
          Week in Term 1. On a study trip to Venice, we will investigate how the
          city has been designed to harvest fresh water and to endure the
          salinity of its surroundings, through surveying and rebuilding
          elements of the Venetian urban fabric at a range of scales. We will
          explore complex junctions, interconnecting volumes, sections and
          thresholds, and we will question how materials can be used responsibly
          in design by investigating their origins and relationships to climatic
          stressors. In parallel with studio practice, students will identify
          and compile a series of contextual references and apply critical
          thinking to their own self-initiated research. Tutorials and workshops
          introduce students to different techniques and encourage translation
          from observation to material interpretation, and regular discussions
          of ongoing work take place in individual tutorials, group
          presentations and juries.
          <br />
          <br />
          Term 2 focuses on work that clarifies students own individual areas of
          interest. After a series of writing exercises, each student will
          create a short experimental film. Our focus will then shift to the
          human body, creating small architectural proposals in response; these
          proposals will evolve through practical testing,
          thinking-through-making and experimentation.In Term 3, students will
          work as a group to build a structure at 1:1 scale, and will each
          design and compile a final portfolio of work created during the
          academic year for assessment. The year culminates in the design and
          build of the Foundation Course display for the Projects Review
          exhibition. Head of Foundation: Saskia LewisCourse Staff: Yoni
          Bentovim, Sensy Mania, Sabrina Morreale, Frédérique Paraskevas, Claire
          Potter, Álvaro Velasco Pérez
        </ProgrammeTextCol>
        <ProgrammeTableProgrammes
          className="mt-(--padding) pt-(--padding)"
          programmes={childProgrammes.data.map((programme) => ({
            title: programme.programmeTitle ?? ``,
            degree: programme.degreeAwarded ?? ``,
            slug: programme.slug ?? ``,
          }))}
        />
      </div>
    </ViewTransitionTipinPage>
  );
}
