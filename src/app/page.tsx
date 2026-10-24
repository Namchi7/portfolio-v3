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
import firebase from "@/assets/svg/firebase.svg";
import reactNative from "@/assets/images/react-native.png";
import expo from "@/assets/svg/expo.svg";
import scss from "@/assets/svg/scss.svg";

const Home: React.FC = () => {
  return (
    <RoutePageLayout title="About Me">
      <div className="w-full mt-30p">
        <p className="w-full text-sm text-light-gray">{`Hi there! I'm a Frontend Developer who loves turning ideas into fast, intuitive, and engaging web experiences.`}</p>

        <p className="w-full text-sm text-light-gray mt-5">A little more about me:</p>

        <ul className="list-disc space-y-2 pl-3 mt-2">
          <li className="text-sm text-light-gray">
            I hold a degree in Computer Science, which gave me a strong
            foundation in software development and problem-solving.
          </li>
          <li className="text-sm text-light-gray">
            I thrive in collaborative teams and enjoy seeing projects through
            from the first idea to production.
          </li>
          <li className="text-sm text-light-gray">
            I&apos;m always learning, keeping pace with the latest tools and
            best practices in web development.
          </li>
          <li className="text-sm text-light-gray">
            Curiosity drives me, and I bring both creativity and analytical
            thinking to every project I take on.
          </li>
        </ul>
      </div>

      <div className="w-full mt-30p">
        <h3 className="text-2xl text-white-2 font-semibold">What I Do</h3>

        <div className="w-full grid grid-cols-1 lg:grid-cols-2 mt-5 gap-4">
          <BorderedCard
            title="Web Development"
            description="Modern, responsive, and high-performance websites built to professional standards."
            image={web}
          />

          <BorderedCard
            title="Mobile Apps"
            description="Polished, cross-platform mobile apps for iOS and Android."
            image={mobile}
          />
        </div>
      </div>

      <div className="w-full mt-30p">
        <h3 className="text-2xl text-white-2 font-semibold">Tech Skills</h3>

        <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 2xl:grid-cols-4 mt-5 gap-4">
          <SkillCard title="React" image={react} />
          <SkillCard title="Next.js" image={nextjs} />
          <SkillCard title="Node.js" image={nodejs} />
          <SkillCard title="Express.js" image={expressjs} />
          <SkillCard title="MongoDB" image={mongodb} />
          <SkillCard title="React Native" image={reactNative} />
          <SkillCard title="Expo" image={expo} />
          <SkillCard title="TypeScript" image={typescript} />
          <SkillCard title="JavaScript" image={javascript} />
          <SkillCard title="Tailwind CSS" image={tailwindcss} />
          <SkillCard title="Firebase" image={firebase} />
          <SkillCard title="Redux" image={redux} />
          <SkillCard title="HTML" image={html} />
          <SkillCard title="CSS" image={css} />
          <SkillCard title="SCSS" image={scss} />
          <SkillCard title="Figma" image={figma} />
        </div>
      </div>
    </RoutePageLayout>
  );
};

export default Home;
