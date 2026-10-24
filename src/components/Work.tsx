import React from "react";
import Image from "next/image";

import sign from "@/assets/svg/sign.svg";
import { ExpWorkType } from "@/constants/types";
import ExperienceDuration from "./ExperienceDuration";

const Work: React.FC<{ work: ExpWorkType }> = ({ work }) => {
  return (
    <div className="w-full grid grid-cols-[1.25rem,1fr] sm:grid-cols-[1.5rem,1fr] gap-2 xs:gap-4 sm:gap-20p mt-30p">
      <div className="size-5 sm:size-6 flex justify-center items-center">
        <Image
          src={sign}
          alt="o"
          className="size-full object-center object-contain"
        />
      </div>

      <div className="flex flex-col justify-start items-start">
        <p className="text-18p font-semibold text-white-1">{work.title}</p>

        <div className="flex flex-row justify-start items-baseline gap-1 mt-8p">
          <span className="text-15p text-white-2 font-medium">Company:</span>
          <span className="text-15p text-light-gray font-normal">
            {work.company}
          </span>
        </div>

        <div className="flex flex-row justify-start items-baseline gap-1 mt-8p">
          <span className="text-15p text-white-2 font-medium">Job Role:</span>
          <span className="text-15p text-light-gray font-normal">
            {work.job_role}
          </span>
        </div>

        <div className="flex flex-row justify-start items-baseline gap-1 mt-8p">
          <span className="text-15p text-white-2 font-medium">Duration:</span>
          <ExperienceDuration
            from={work.from}
            to={work.to}
            className="text-15p text-light-gray font-normal"
          />
        </div>

        <div className="w-full flex flex-col justify-start items-start mt-4">
          <p className="text-15p text-white-2 font-medium">Responsibilities:</p>

          <ul className="w-full flex flex-col justify-start items-start pl-4">
            {work.responsibilities.map((item, i: number) => (
              <li
                className="text-13p sm:text-15p text-light-gray font-normal list-disc mt-2"
                key={i}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full flex flex-col justify-start items-start mt-4">
          <p className="text-15p text-white-2 font-medium">
            Learning Experience:
          </p>

          <ul className="w-full flex flex-col justify-start items-start pl-4">
            {work.learning.map((item, i: number) => (
              <li
                className="text-13p sm:text-15p text-light-gray font-normal list-disc mt-2"
                key={i}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full flex flex-col justify-start items-start mt-4">
          <p className="text-15p text-white-2 font-medium">Skills:</p>

          <ul className="w-full flex flex-col justify-start items-start pl-4">
            {work.skills.map((item, i: number) => (
              <li
                className="text-13p sm:text-15p text-light-gray font-normal list-disc mt-2"
                key={i}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden w-full rounded-8p h-30p bg-onyx mt-4"></div>
      </div>
    </div>
  );
};

export default Work;
