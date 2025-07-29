import clsx from "clsx";
import * as React from "react";
import { ProgrammeDoubleTextCol } from "@/components/School/Programmes/components/ProgrammeDoubleTextCol";
import { ProgrammeTableInfoTipIn } from "@/components/School/Programmes/components/ProgrammeTableInfoTipIn";
import { Body } from "@/components/Typography/Body";
import { H1 } from "@/components/Typography/H1";
import { UL } from "@/components/Typography/UL";
import { MediaGallery } from "@/components/globals/components/MediaGallery";
import { TipinHeader } from "@/components/globals/layouts/TipinHeader";

type PageVisitingTipInProps = {
  className?: string;
};

export const PageVisitingTipIn = ({ className }: PageVisitingTipInProps) => {
  return (
    <div
      className={clsx(
        className,
        "bg-programmes-visiting-accent padding-default-y flex min-h-[100vh] w-full flex-col bg-[rgba(255,255,255,.9)] pb-[100px] backdrop-blur-lg lg:w-[75%]",
      )}
    >
      <TipinHeader
        colorTheme="school-programmes"
        breadcrumbLinks={[
          { title: "Programmes" },
          { title: "Visiting School" },
        ]}
        pageTitle="Metropolitan Landscapes"
        className="padding-default-x"
      />
      <H1
        tipIn
        className="padding-default-x mt-[20px] mb-[20px] block leading-[1.1]"
      >
        Metropolitan Landscapes
      </H1>
      <MediaGallery
        className="padding-default-x"
        slides={[
          {
            src: "/storybook/Programmes/programmes-visiting1.jpg",
            caption:
              "Chomdoen Chongwattananukul, Jiwoong Yang, Daria Zotova and, Pavel Zotov, WaveScape, DRL: Studio Theodore Spyropoulos, 2023–24.",
          },
        ]}
        colorTheme="school-programmes"
      />
      <ProgrammeTableInfoTipIn
        className="padding-default-x mt-[20px]"
        items={[
          { type: "Location", content: "Online / Latin America" },
          { type: "Duration", content: "13 March - 17 March 2025" },
          { type: "Theme", content: "Urban and Landscape Ecologies" },
        ]}
      />
      <H1 tipIn className="padding-default-x mb-[10px]">
        Synopsis
      </H1>
      <ProgrammeDoubleTextCol
        className="padding-default-x"
        col1Content={
          <Body>
            {`Supported by the Financial Times' Visual Investigations Team, the
            London Mining Network and Tec de Monterrey, the Metropolitan
            Landscapes programme at the Architectural Association looks
            critically at the intricate interdependent relationships between
            urban dense environments and the landscapes and territories
            (productive, operative, logistical, extractive, etc.) necessary for
            them to thrive. With a special focus on Latin America, this online
            programme explores the role design and investigative methodologies
            can play in creating alternative and innovative visions for
            metropolitan regions, at a planetary, regional and local scale in
            close connection with disciplines such as journalism, activism,
            economy, planning, policy-making and geography. Metropolitan
            Landscapes aims to incorporate the design profession into wider
            disciplinary conversations to influence policy-making and
            journalism, and to transform the governance and management of
            metropolitan regions into a creative, accountable and visionary
            practice that can deliver sustainable and resilient urbanisation
            models.`}
            <br />
          </Body>
        }
        col2Content={
          <Body>
            {`Metropolitan Landscapes is a response to today's demand for a
            metropolitan discipline conscious of its past, present and future
            and the extractive damage they impose on hinterlands and other
            landscapes. By making visible and accountable the works of large
            corporations headquartered in cities such as London, the programme
            integrates environmental and social justice movements as well as
            local communities' struggles in Latin America. Urban planning and
            design, transport and mobility, housing and environment, public
            space, urban development and green infrastructure are understood as
            parts of a fully interdependent process that requires the
            accountability of big powerful stakeholders and the support of
            alternative communities and struggles that arise in planetary
            urbanisation processes.`}
          </Body>
        }
      />
      <H1 tipIn className="padding-default-x mt-[30px] mb-[10px] sm:mt-[50px]">
        Skills Developed
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
      <ProgrammeDoubleTextCol
        className="padding-default-x mt-[30px] sm:mt-[50px]"
        col1Content={
          <div>
            <H1 className="pb-[10px]" tipIn>
              Fees
            </H1>
            <Body>
              The AA Visiting School requires a fee of $90800 MX (Mexican Pesos)
              per participant, which includes a £60 AA Membership fee, payable
              by all participants.
            </Body>
          </div>
        }
        col2Content={
          <div className="mt-[30px] sm:mt-[0]">
            <H1 className="pb-[10px]" tipIn>
              Insurance
            </H1>
            <Body>
              All participants are responsible for securing their own travel and
              health insurance. Please ensure that your travel insurance also
              covers your personal belongings i.e. laptop, equipment, tools,
              passport etc. The AA takes no responsibility for lost or stolen
              property.
            </Body>
          </div>
        }
      />
      <H1 tipIn className="padding-default-x mt-[30px] mb-[10px] sm:mt-[50px]">
        Biographies
      </H1>
      <ProgrammeDoubleTextCol
        className="padding-default-x"
        col1Content={
          <Body>
            <span className="!font-bold">Directors</span>
            <br />
            <br />
            Jose Alfredo Ramírez
            <br />
            alfredo@aaschool.ac.uk
            <br />
            <br />
            {`Jose Alfredo Ramirez is an architect, director of Architectural
            Association's (AA) Ground Lab, Programme Head of the Landscape
            Urbanism MArch/MSc Programme and Director of the Mexico Visiting
            School at the AA. As a co-director of the Ground Lab. He is
            interested in developing landscape-oriented practices to advance
            design strategies to tackle climate breakdown. He has led projects
            at the junction of architecture, landscape and urbanism in a variety
            of contexts such as Argentina, Chile, China, Mexico, Chile and the
            UK, and worked on large-scale urban projects including the
            redevelopment of a 12-kilometre section of Santiago de Chile's main
            avenue, Alameda Providencia, into an integral transport and urban
            corridor. José Alfredo lectures and publish the work of AA Landscape
            Urbanism and Ground Lab, such as the edition of the issue on Green
            New Deal Landscapes of the AD Journal (Architectural Design) in
            2022.`}
            <br />
            <br />
            Clara Oloriz
            <br />
            Clara.Oloriz@aaschool.ac.uk
            <br />
            <br />
            Clara Oloriz is a PhD architect, tutor and practising architect.
            Clara is director of director of Groundlab and Landscape Urbanism
            Studio Master at the AA. She graduated from the ETSA Universidad de
            Navarra and obtained her PhD on the relationship between
            architecture and technology focusing on industrialized systems of
            production at the ETSAUN and at the AA. Previously, she has worked
            for Foreign Office Architects and Arquitectos Cerouno. She is the
            author of Landscape as Territory, a book that collets essays and
            Landscape Urbanism projects and outlines the main concepts,
            principles and ideas behind AA Landscape Urbanism.
            <br />
            <br />
          </Body>
        }
        col2Content={
          <Body>
            <span className="!font-bold">Tutors</span>
            <br />
            <br />
            Elena Luciano
            <br />
            elena.luciano@aaschool.ac.uk
            <br />
            <br />
            Geoscientist | Landscape Urbanist. Elena Luciano Suastegui is a
            Mexican geoscientist from UNAM and landscape urbanist. She is
            currently working in academic environmental research and its
            translation through territorial design for the AA Ground Lab
            Residency at the Architectural Association. She is interested in
            issues related to soil, agency, and the verticality of territories.
            <br />
            <br />
            Camila Arretche: AA Groundlab
            <br />
            Camila.arretche@aaschool.ac.uk
            <br />
            <br />
            Architect graduated from the School of Architecture and Urban
            Studies at Torcuato Di Tella University. Interested in how systems
            of local interventions in strategic areas can generate large scale
            impacts in the context of the imminent increasing pressures due to
            climate change, particularly concerning water management in Latin
            America. MSc student in Water Science, Policy and Management at
            Oxford University | Weidenfeld-Hoffmann Scholar | Research
            consultant at AA Groundlab | Experience in the academic field
            through teaching assistantship and leading workshops in different
            universities | Specialized in managing various data visualization
            tools (GIS, Rhino3D, Grasshopper, Adobe Package).
          </Body>
        }
      />
    </div>
  );
};
