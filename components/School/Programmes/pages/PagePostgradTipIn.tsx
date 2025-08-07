import clsx from "clsx";
import * as React from "react";
import { Body } from "@/components/Typography/Body";
import { H1 } from "@/components/Typography/H1";
import { ButtonWindow } from "@/components/globals/components/ButtonWindow";
import { MediaGallery } from "@/components/globals/components/MediaGallery";
import { TipinHeader } from "@/components/globals/layouts/TipinHeader";
import { ProgrammeTableInfoTipIn } from "@/components/school/programmes/components/ProgrammeTableInfoTipIn";
import { ProgrammeTextCol } from "@/components/school/programmes/components/ProgrammeTextCol";

type PagePostgradTipInProps = {
  className?: string;
};

export const PagePostgradTipIn = ({ className }: PagePostgradTipInProps) => {
  return (
    <div
      className={clsx(
        className,
        "padding-default-y flex min-h-[100vh] w-full flex-col bg-[rgba(255,255,255,.9)] bg-programmes-postgrad-accent pb-[100px] backdrop-blur-lg lg:w-[75%]",
      )}
    >
      <TipinHeader
        colorTheme="school-programmes"
        breadcrumbLinks={[
          { title: "Programmes" },
          { title: "Taught Postgraduate" },
        ]}
        pageTitle="Architecture and Urbanism"
        className="padding-default-x"
      />
      <H1
        tipIn
        className="padding-default-x mt-[20px] mb-[20px] block leading-[1.1]"
      >
        Architecture and Urbanism (DRL)
      </H1>
      <MediaGallery
        className="padding-default-x"
        slides={[
          {
            src: "/storybook/Programmes/programmes-postgrad1.jpg",
            caption:
              "Chomdoen Chongwattananukul, Jiwoong Yang, Daria Zotova and, Pavel Zotov, WaveScape, DRL: Studio Theodore Spyropoulos, 2023–24.",
          },
        ]}
        colorTheme="school-programmes"
      />
      <ProgrammeTableInfoTipIn
        className="padding-default-x mt-[20px]"
        items={[
          { type: "Degree", content: "MArch" },
          { type: "Duration", content: "16 months" },
        ]}
      />
      <H1 tipIn className="padding-default-x mb-[10px]">
        Programme Structure
      </H1>
      <ProgrammeTextCol
        className="padding-default-x"
        col2content={
          <div className="flex justify-center">
            <ButtonWindow
              links={[
                { link: "/", displayText: "Apply" },
                { link: "/", displayText: "Enquire to study" },
                { link: "/", displayText: "Programme Guides" },
              ]}
              colorTheme="school"
              context="school"
            />
          </div>
        }
      >
        <Body>
          Four terms of study are divided into two phases. Phase 1, a three-term
          academic year beginning each autumn, introduces design techniques and
          topics through a combination of team-based studio work, workshops and
          seminar courses.
          <br />
          <br />
          In Phase 2, which begins the following autumn, teams develop their
          Phase 1 work into a comprehensive design thesis project. At the end of
          January, these projects are presented to a panel of distinguished
          visiting critics. In the past, these have included Alisa Andrasek,
          Caroline Bos, Mark Cousins, Hernáan Díiaz Alonso, Molly Wright
          Steenson, John Frazer, Zaha Hadid, Michael Hansmeyer, Ariane Koek, Rem
          Koolhaas, Marta Malée-Alemany, Wolf Prix, Ali Rahim, David Ruy, Brett
          Steele, Ben Van Berkel and Winka Dubbeldam, among many others.
        </Body>
      </ProgrammeTextCol>
      <H1 tipIn className="padding-default-x mt-[40px] mb-[10px]">
        Fees and Financial Assistance
      </H1>
      <ProgrammeTextCol className="padding-default-x">
        <Body>
          The MArch in Architecture and Urbanism is a 16-month programme of
          full-time study. The tuition fee for the programme is £42,816, which
          is paid in the first year of study.
          <br />
          <br />A deposit of £10,704 is payable on acceptance into the
          programme, which is applied to the final tuition fee instalment. The
          tuition fees are the same for all students regardless of their
          nationality, and all students are required to pay an additional £95 AA
          Membership and Student Forum Fee each year (this is added to the
          tuition fees for the first term). For more details regarding fees,
          payments and financial support at the AA, visit the Fees and Financial
          Assistance page.
        </Body>
      </ProgrammeTextCol>
    </div>
  );
};
