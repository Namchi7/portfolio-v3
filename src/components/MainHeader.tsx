"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MainHeader: React.FC<{
  pos: string;
  coord: string;
  show: string;
  rounded: string;
  z: string;
}> = ({ pos, coord, show, rounded, z }) => {
  const path: string = usePathname();

  const [current, setCurrent] = useState<string>("home");

  useEffect(() => {
    switch (path) {
      case "/": {
        setCurrent("about");
        break;
      }
      case "/experience": {
        setCurrent("experience");
        break;
      }
      case "/projects": {
        setCurrent("projects");
        break;
      }
      case "/contact": {
        setCurrent("contact");
        break;
      }
      default: {
        setCurrent("");
        break;
      }
    }
  }, [path]);

  return (
    <div
      className={`${pos} ${coord} ${show} z-[${z}] bg-onyx-75 backdrop-blur-[10px] border-l border-b border-jet ${rounded}`}
    >
      <ul className="flex flex-row flex-wrap lg:flex-nowrap justify-center items-center gap-x-4 sm:gap-x-30p gap-y-4 px-4 sm:px-40p py-5 my-auto">
        <li
          className={`${
            current === "about"
              ? "text-orange-yellow-crayola"
              : "text-light-gray"
          } text-xs sm:text-15p font-medium hover:opacity-75 px-7p`}
        >
          <Link href={"/"}>About</Link>
        </li>
        <li
          className={`${
            current === "experience"
              ? "text-orange-yellow-crayola"
              : "text-light-gray"
          } text-xs sm:text-15p font-medium hover:opacity-75 px-7p`}
        >
          <Link href={"/experience"}>Experience</Link>
        </li>
        <li
          className={`${
            current === "projects"
              ? "text-orange-yellow-crayola"
              : "text-light-gray"
          } text-xs sm:text-15p font-medium hover:opacity-75 px-7p`}
        >
          <Link href={"/projects"}>Projects</Link>
        </li>
        <li
          className={`${
            current === "contact"
              ? "text-orange-yellow-crayola"
              : "text-light-gray"
          } text-xs sm:text-15p font-medium hover:opacity-75 px-7p`}
        >
          <Link href={"/contact"}>Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default MainHeader;
