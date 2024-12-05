import React from "react";

import RoutePageLayout from "@/components/RoutePageLayout";
import Work from "@/components/Work";
import { ExpWorkType } from "@/constants/types";

import experiences from "@/assets/json/experience.json";

const Experience: React.FC = () => {
  return (
    <RoutePageLayout title="Experience">
      {experiences.map((work: ExpWorkType, i: number) => (
        <Work work={work} key={i} />
      ))}
    </RoutePageLayout>
  );
};

export default Experience;
