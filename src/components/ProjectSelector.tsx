import React from "react";

const ProjectSelector: React.FC<{
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}> = ({ selected, setSelected }) => {
  return (
    <div className="w-full flex flex-row justify-start items-start gap-4">
      <p
        onClick={() => setSelected("all")}
        className={`text-sm font-medium ${
          selected === "all"
            ? "text-orange-yellow-crayola"
            : "text-light-gray-70"
        } cursor-pointer`}
      >
        All
      </p>
      <p
        onClick={() => setSelected("web")}
        className={`text-sm font-medium ${
          selected === "web"
            ? "text-orange-yellow-crayola"
            : "text-light-gray-70"
        } cursor-pointer`}
      >
        Web Development
      </p>
      <p
        onClick={() => setSelected("mobile")}
        className={`text-sm font-medium ${
          selected === "mobile"
            ? "text-orange-yellow-crayola"
            : "text-light-gray-70"
        } cursor-pointer`}
      >
        Mobile Apps
      </p>
    </div>
  );
};

export default ProjectSelector;
