"use client";

import React, { useState } from "react";

import ProjectSelector from "@/components/ProjectSelector";
import RoutePageLayout from "@/components/RoutePageLayout";

import projects from "@/assets/json/projects.json";
import experiences from "@/assets/json/experience.json";
import ProjectCard from "@/components/ProjectCard";
import ProjectDetails from "@/components/ProjectDetails";
import { ProjectDetailsType, ProjectsType } from "@/constants/types";

const categories = [
  { label: "Personal", value: "personal" },
  { label: "Professional", value: "professional" },
];

const filters = [
  { label: "All", value: "all" },
  { label: "Web", value: "web" },
  { label: "Mobile", value: "mobile" },
];

const companies = experiences.map((work) => ({
  label: work.company,
  value: work.company,
}));

const Projects = () => {
  const [category, setCategory] = useState<string>("personal");
  const [filter, setFilter] = useState<string>("all");
  const [company, setCompany] = useState<string>(companies[0]?.value ?? "");
  const [openProject, setOpenProject] = useState<boolean>(false);
  const [projectData, setProjectData] = useState<
    ProjectDetailsType | undefined
  >();

  // Projects with a "relatedTo" company are professional, the rest are personal
  const filteredProjects = (projects as ProjectsType)
    .filter((item) =>
      category === "professional"
        ? item.relatedTo === company
        : !item.relatedTo
    )
    .filter((item) => filter === "all" || item.type === filter)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <RoutePageLayout title="Projects">
      <div className="w-full flex flex-row flex-wrap justify-between items-center gap-4 mt-30p">
        <div>
          <ProjectSelector
            options={categories}
            selected={category}
            setSelected={setCategory}
          />
        </div>

        <div>
          <ProjectSelector
            options={filters}
            selected={filter}
            setSelected={setFilter}
            variant="pill"
          />
        </div>
      </div>

      {category === "professional" && (
        <div className="w-full mt-5">
          <ProjectSelector
            options={companies}
            selected={company}
            setSelected={setCompany}
            variant="pill"
          />
        </div>
      )}

      <ProjectDetails
        open={openProject}
        setOpen={setOpenProject}
        projectData={projectData}
      />

      {filteredProjects.length > 0 ? (
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-30p">
          {filteredProjects.map((item) => (
            <ProjectCard
              projectData={item}
              setProjectData={setProjectData}
              setOpenProject={setOpenProject}
              key={item.id}
            />
          ))}
        </div>
      ) : (
        <p className="w-full text-sm text-light-gray-70 mt-30p">
          No projects to show here yet.
        </p>
      )}
    </RoutePageLayout>
  );
};

export default Projects;
