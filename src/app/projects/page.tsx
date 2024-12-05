"use client";

import React, { useState } from "react";

import ProjectSelector from "@/components/ProjectSelector";
import RoutePageLayout from "@/components/RoutePageLayout";

import projects from "@/assets/json/projects.json";
import ProjectCard from "@/components/ProjectCard";
import ProjectDetails from "@/components/ProjectDetails";
import { ProjectDetailsType } from "@/constants/types";

const Projects = () => {
  const [selected, setSelected] = useState<string>("all");
  const [openProject, setOpenProject] = useState<boolean>(false);
  const [projectData, setProjectData] = useState<
    ProjectDetailsType | undefined
  >();

  return (
    <RoutePageLayout title="Projects">
      <div className="w-full mt-30p">
        <ProjectSelector selected={selected} setSelected={setSelected} />
      </div>

      <ProjectDetails
        open={openProject}
        setOpen={setOpenProject}
        projectData={projectData}
      />

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-30p">
        {projects
          .sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
          )
          .map((item, i: number) => {
            if (selected === "all")
              return (
                <ProjectCard
                  projectData={item}
                  setProjectData={setProjectData}
                  setOpenProject={setOpenProject}
                  key={i}
                />
              );
            if (item.type === selected)
              return (
                <ProjectCard
                  projectData={item}
                  setProjectData={setProjectData}
                  setOpenProject={setOpenProject}
                  key={i}
                />
              );
          })}
      </div>
    </RoutePageLayout>
  );
};

export default Projects;
