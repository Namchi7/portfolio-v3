export interface ExpWorkType {
  title: string;
  company: string;
  job_role: string;
  from: string;
  to: string;
  responsibilities: string[];
  learning: string[];
  skills: string[];
}

export type ExperienceType = ExpWorkType[];

export interface ProjectDetailsType {
  id: number;
  type: string;
  title: string;
  intro: string;
  tech: { name: string; value: string }[];
  image_path: string;
  description: string;
  github: string;
  live_link: string;
  date: string;
}

export type ProjectsType = ProjectDetailsType[];

export interface mailDataType {
  name: string;
  email: string;
  msg: string;
}
