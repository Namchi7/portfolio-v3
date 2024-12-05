import React from "react";
import Image from "next/image";

import { ProjectDetailsType } from "@/constants/types";
import Link from "next/link";

const ProjectDetails: React.FC<{
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  projectData: ProjectDetailsType | undefined;
}> = ({ open, setOpen, projectData }) => {
  const showD: boolean = false;

  const techString = () => {
    return projectData?.tech.map((t) => t.name).join(", ");
  };

  return (
    <div
      className={`fixed ${
        open ? "inset-0 w-full h-full flex" : "w-0 h-0 hidden"
      } justify-center items-center z-40`}
    >
      <div className="relative size-full flex justify-center items-center px-4 md:px-20p py-4 md:py-20p lg:py-30p">
        <div className="absolute flex justify-center items-center z-[42]">
          <div className="w-full sm:w-420p md:w-700p lg:w-950p xl:w-[75rem] bg-border-gradient-onyx rounded-14p shadow-shadow-2 p-[1px] pb-0 pr-0">
            <div className="size-full grid grid-cols-1 gap-4 gradient-jet rounded-14p p-4 sm:p-20p md:p-30p">
              <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="aspect-[4/3] w-full flex justify-center items-center bg-white rounded-8p mx-auto md:mx-0 overflow-hidden">
                  <Image
                    src={projectData?.image_path ?? ""}
                    alt={projectData?.title ?? "Title"}
                    width={600}
                    height={450}
                    className="w-full object-cover object-center"
                  />
                </div>

                <div className="w-full h-full flex flex-col justify-center items-center md:items-start gap-2">
                  <h4 className="text-2xl md:text-3xl text-white-2 font-semibold">
                    {projectData?.title}
                  </h4>

                  <div className="w-full flex justify-center md:justify-start items-center gap-2">
                    {projectData?.live_link && (
                      <Link
                        href={projectData?.live_link ?? ""}
                        rel="noopener noreferrer"
                        target="_blank"
                        className="flex justify-start items-center gap-1 bg-onyx-75 rounded-7p shadow-shadow-3 border border-jet px-2 py-1 group hover:cursor-pointer"
                      >
                        <div className="size-5 opacity-75 group-hover:opacity-100">
                          <svg
                            width="128"
                            height="128"
                            viewBox="0 0 24 24"
                            fill="white"
                            className="size-full"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M14 5a1 1 0 1 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V6.414l-9.293 9.293a1 1 0 0 1-1.414-1.414L17.586 5zM3 7a2 2 0 0 1 2-2h5a1 1 0 1 1 0 2H5v12h12v-5a1 1 0 1 1 2 0v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                          </svg>
                        </div>
                        <p className="text-sm text-light-gray">Link</p>
                      </Link>
                    )}

                    {projectData?.github && (
                      <Link
                        href={projectData?.github ?? ""}
                        rel="noopener noreferrer"
                        target="_blank"
                        className="flex justify-start items-center gap-1 bg-onyx-75 rounded-7p shadow-shadow-3 border border-jet px-2 py-1 group hover:cursor-pointer"
                      >
                        <div className="size-5 opacity-75 group-hover:opacity-100">
                          <svg
                            width="48"
                            height="48"
                            viewBox="0 0 48 48"
                            fill="white"
                            xmlns="http://www.w3.org/2000/svg"
                            className="size-full"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M24 0C10.74 0 0 10.74 0 24C0 34.62 6.87 43.59 16.41 46.77C17.61 46.98 18.06 46.26 18.06 45.63C18.06 45.06 18.03 43.17 18.03 41.16C12 42.27 10.44 39.69 9.96 38.34C9.69 37.65 8.52 35.52 7.5 34.95C6.66 34.5 5.46 33.39 7.47 33.36C9.36 33.33 10.71 35.1 11.16 35.82C13.32 39.45 16.77 38.43 18.15 37.8C18.36 36.24 18.99 35.19 19.68 34.59C14.34 33.99 8.76 31.92 8.76 22.74C8.76 20.13 9.69 17.97 11.22 16.29C10.98 15.69 10.14 13.23 11.46 9.93C11.46 9.93 13.47 9.3 18.06 12.39C19.98 11.85 22.02 11.58 24.06 11.58C26.1 11.58 28.14 11.85 30.06 12.39C34.65 9.27 36.66 9.93 36.66 9.93C37.98 13.23 37.14 15.69 36.9 16.29C38.43 17.97 39.36 20.1 39.36 22.74C39.36 31.95 33.75 33.99 28.41 34.59C29.28 35.34 30.03 36.78 30.03 39.03C30.03 42.24 30 44.82 30 45.63C30 46.26 30.45 47.01 31.65 46.77C36.4144 45.1614 40.5544 42.0994 43.4873 38.0147C46.4203 33.9301 47.9986 29.0286 48 24C48 10.74 37.26 0 24 0Z"
                            />
                          </svg>
                        </div>

                        <p className="text-sm text-light-gray">Github</p>
                      </Link>
                    )}
                  </div>

                  <p className="text-15p text-light-gray text-left">
                    {techString()}
                  </p>

                  <p className="text-15p text-light-gray text-left mt-2">
                    {projectData?.intro}
                  </p>
                </div>
              </div>

              {showD && (
                <div className="w-full flex">
                  <p className="text-base text-light-gray text-left whitespace-pre-line">
                    {"Descriptions\nhi\n- hey"}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div
          onClick={() => {
            setOpen(false);
          }}
          className="absolute inset-0 size-full bg-black/80 hover:cursor-pointer z-[41]"
        ></div>
      </div>
    </div>
  );
};

export default ProjectDetails;
