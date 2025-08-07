import clsx from "clsx";
import * as React from "react";
import { MediaGallery } from "@/components/globals/components/MediaGallery";
import { TipinHeader } from "@/components/globals/layouts/TipinHeader";
import { ProgrammeDoubleTextCol } from "@/components/school/programmes/components/ProgrammeDoubleTextCol";
import { ProgrammeGridStudentWork } from "@/components/school/programmes/components/ProgrammeGridStudentWork";
import { ProgrammeTableInfoTipIn } from "@/components/school/programmes/components/ProgrammeTableInfoTipIn";
import { Body } from "@/components/typography/Body";
import { H1 } from "@/components/typography/H1";
import { UL } from "@/components/typography/UL";

type PageDiplomaTipInProps = {
  className?: string;
};

export const PageDiplomaTipIn = ({ className }: PageDiplomaTipInProps) => {
  return (
    <div
      className={clsx(
        className,
        "padding-default-y flex min-h-[100vh] w-full flex-col bg-[rgba(255,255,255,.9)] bg-programmes-diploma-accent pb-[100px] backdrop-blur-lg lg:w-[75%]",
      )}
    >
      <TipinHeader
        colorTheme="school-programmes"
        breadcrumbLinks={[
          { title: "Programmes" },
          { title: "Diploma Programme" },
        ]}
        pageTitle="The Right Model City"
        className="padding-default-x"
      />
      <H1
        tipIn
        className="padding-default-x mt-[20px] mb-[20px] block leading-[1.1]"
      >
        Diploma Design Unit 1:
        <br />
        The Right Model City
      </H1>
      <MediaGallery
        className="padding-default-x"
        slides={[
          {
            src: "/storybook/Programmes/programmes-diploma1.jpg",
            caption: "Caption Lorem Ipsum",
          },
        ]}
        colorTheme="school-programmes"
      />
      <ProgrammeTableInfoTipIn
        className="padding-default-x mt-[20px]"
        items={[
          { type: "Course Tutors", content: "Miraj Ahmed, Martin Jameson" },
          { type: "Status", content: "Choose 1 of 21 units" },
          { type: "Terms", content: "1,2,3" },
        ]}
      />
      <H1 tipIn className="padding-default-x mb-[10px]">
        Synopsis
      </H1>
      <ProgrammeDoubleTextCol
        className="padding-default-x"
        col1Content={
          <Body>
            DIP2 is interested in the political role of the architect &apos;from
            the ground up.&apos; We take the neighbourhood as the nexus of
            political action and decision-making, rather than conventional
            arenas of centralised and hierarchical political systems such as the
            parliament. Here, architectural practice is the creative project to
            be redesigned, and residents in neighbourhoods are the real
            political bodies that should have agency to effect this power shift.
            The unit develops methods that mobilise and collectivise
            communities, design organisations and systems, and create social
            engagement as a new form of architectural craft.
            <br />
            <br />
            Movements and discourses of the Commons are already engaged in
            different disciplines globally to implement this alternative
            political position. The unit will develop projects framed as
            Distributive New Commons as part of this wider global impetus. To
            explore an economically independent form of architectural practice,
            we use the model of the DAO (decentralised autonomous organisation)
            blockchain governance system: a global democratic organisational
            model aligned with the New Commons.
            <br />
          </Body>
        }
        col2Content={
          <Body>
            This year, we have two distinct sites: a physical site in Archway,
            London and the digital site of the Reclaim the Commons DAO, which we
            construct together in Web3. Students will start the year with
            something they feel passionate about (be it architectural or not),
            and that passion will drive their design and sociopolitical project.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Body>
        }
      />
      <H1 tipIn className="padding-default-x mt-[50px] mb-[10px]">
        Content
      </H1>
      <ProgrammeDoubleTextCol
        className="padding-default-x"
        col1Content={
          <Body>
            DIP2 is interested in the political role of the architect &apos;from
            the ground up.&apos; We take the neighbourhood as the nexus of
            political action and decision-making, rather than conventional
            arenas of centralised and hierarchical political systems such as the
            parliament. Here, architectural practice is the creative project to
            be redesigned, and residents in neighbourhoods are the real
            political bodies that should have agency to effect this power shift.
            The unit develops methods that mobilise and collectivise
            communities, design organisations and systems, and create social
            engagement as a new form of architectural craft.
            <br />
            <br />
            Movements and discourses of the Commons are already engaged in
            different disciplines globally to implement this alternative
            political position. The unit will develop projects framed as
            Distributive New Commons as part of this wider global impetus. To
            explore an economically independent form of architectural practice,
            we use the model of the DAO (decentralised autonomous organisation)
            blockchain governance system: a global democratic organisational
            model aligned with the New Commons.
            <br />
          </Body>
        }
        col2Content={
          <Body>
            This year, we have two distinct sites: a physical site in Archway,
            London and the digital site of the Reclaim the Commons DAO, which we
            construct together in Web3. Students will start the year with
            something they feel passionate about (be it architectural or not),
            and that passion will drive their design and sociopolitical project.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Body>
        }
      />
      <H1 tipIn className="padding-default-x mt-[50px] mb-[10px]">
        Output
      </H1>
      <ProgrammeDoubleTextCol
        className="padding-default-x"
        col1Content={
          <UL>
            <Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Body>
            <Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Body>
            <Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Body>
            <Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Body>
          </UL>
        }
        col2Content={
          <UL>
            <Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Body>
            <Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Body>
            <Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Body>
            <Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Body>
          </UL>
        }
      />
      <ProgrammeGridStudentWork
        className="padding-default-x mt-[40px]"
        items={[
          {
            title: "The Scarred Landscape",
            artist: "Solveig Jappy",
            imgSrc: "/storybook/Programmes/programmes-student1.jpg",
          },
          {
            title: "The Scarred Landscape",
            artist: "Solveig Jappy",
            imgSrc: "/storybook/Programmes/programmes-student2.jpg",
          },
          {
            title: "The Scarred Landscape",
            artist: "Solveig Jappy",
            imgSrc: "/storybook/Programmes/programmes-student3.jpg",
          },
          {
            title: "The Scarred Landscape",
            artist: "Solveig Jappy",
            imgSrc: "/storybook/Programmes/programmes-student4.jpg",
          },
        ]}
      />
    </div>
  );
};
