import React from "react";
import Image from "next/image";

import eye from "@/assets/svg/eye.svg";
import { ProjectDetailsType } from "@/constants/types";

const ProjectCard: React.FC<{
  projectData: ProjectDetailsType;
  setProjectData: React.Dispatch<
    React.SetStateAction<ProjectDetailsType | undefined>
  >;
  setOpenProject: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ projectData, setOpenProject, setProjectData }) => {
  const setProjectDetailsState = () => {
    setOpenProject(true);
    setProjectData(projectData);
  };

  return (
    <div className="h-full flex flex-col justify-start items-start gap-1">
      <div className="shrink-0 relative aspect-[4/3] w-full flex justify-center items-start bg-gray-900 rounded-14p sm:rounded-20p overflow-hidden group">
        <Image
          src={projectData?.image_path}
          alt={projectData?.title}
          width={400}
          height={300}
          className="size-full scale-100 group-hover:scale-110 transition-all duration-200 object-cover object-center flex justify-center items-center text-sm text-center text-light-gray"
        />

        <div className="absolute size-full hidden group-hover:flex flex-row justify-center items-center gap-2 bg-black/10 z-5">
          <div
            onClick={setProjectDetailsState}
            className="shrink-0 aspect-square w-12 flex justify-center items-center bg-jet rounded-12p hover:cursor-pointer"
          >
            <Image src={eye} alt="View" className="size-5" />
          </div>
        </div>
      </div>

      <div className="w-full h-full flex flex-col justify-start items-start px-4">
        <h3 className="text-15p text-white-2">{projectData?.title}</h3>
        <p className="text-15p text-light-gray-70 font-light">
          {projectData?.intro}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
