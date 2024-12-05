import React from "react";

import RoutePageLayout from "@/components/RoutePageLayout";
import BorderedCard from "@/components/BorderedCard";
import SkillCard from "@/components/SkillCard";

import web from "@/assets/svg/web.svg";
import mobile from "@/assets/svg/mobile.svg";
import react from "@/assets/svg/react.svg";
import nextjs from "@/assets/svg/nextjs.svg";
import nodejs from "@/assets/svg/nodejs.svg";
import expressjs from "@/assets/svg/expressjs.svg";
import mongodb from "@/assets/svg/mongodb.svg";
import typescript from "@/assets/svg/typescript.svg";
import javascript from "@/assets/svg/javascript.svg";
import tailwindcss from "@/assets/svg/tailwindcss.svg";
import redux from "@/assets/svg/redux.svg";
import html from "@/assets/svg/html.svg";
import css from "@/assets/svg/css.svg";
import figma from "@/assets/svg/figma.svg";

const Home: React.FC = () => {
  return (
    <RoutePageLayout title="About Me">
      <div className="w-full mt-30p">
        <p className="w-full text-sm text-light-gray">{`Hi there! I'm a dedicated Frontend Developer with a passion for building dynamic and user-friendly web experiences.`}</p>

        <p className="w-full text-sm text-light-gray mt-5">A bit about me:</p>

        <ul className="list-disc space-y-2 pl-3 mt-2">
          <li className="text-sm text-light-gray">
            Graduated with a degree in Computer Science, where I honed my skills
            in software development and problem-solving.
          </li>
          <li className="text-sm text-light-gray">
            I enjoy collaborating with teams and contributing to projects from
            concept to deployment.
          </li>
          <li className="text-sm text-light-gray">
            I am constantly learning and keeping up-to-date with the latest
            trends in web development.
          </li>
          <li className="text-sm text-light-gray">
            Driven by curiosity and problem-solving, I bring a creative and
            analytical approach to each project.
          </li>
        </ul>
      </div>

      <div className="w-full mt-30p">
        <h3 className="text-2xl text-white-2 font-semibold">What I Do</h3>

        <div className="w-full grid grid-cols-1 lg:grid-cols-2 mt-5 gap-4">
          <BorderedCard
            title="Web Development"
            description="High-quality development of sites at the professional level."
            image={web}
          />

          <BorderedCard
            title="Mobile Apps"
            description="Professional development of applications for Android."
            image={mobile}
          />
        </div>
      </div>

      <div className="w-full mt-30p">
        <h3 className="text-2xl text-white-2 font-semibold">Tech Skills</h3>

        <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 2xl:grid-cols-4 mt-5 gap-4">
          <SkillCard title="ReactJs" image={react} />
          <SkillCard title="NextJs" image={nextjs} />
          <SkillCard title="NodeJs" image={nodejs} />
          <SkillCard title="ExpressJs" image={expressjs} />
          <SkillCard title="MongoDB" image={mongodb} />
          <SkillCard title="TypeScript" image={typescript} />
          <SkillCard title="JavaScript" image={javascript} />
          <SkillCard title="Tailwind CSS" image={tailwindcss} />
          <SkillCard title="Redux" image={redux} />
          <SkillCard title="HTML" image={html} />
          <SkillCard title="CSS" image={css} />
          <SkillCard title="Figma" image={figma} />
        </div>
      </div>
    </RoutePageLayout>
  );
};

export default Home;
