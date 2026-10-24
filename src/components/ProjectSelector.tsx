import React from "react";

const ProjectSelector: React.FC<{
  options: { label: string; value: string }[];
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
  variant?: "text" | "pill";
}> = ({ options, selected, setSelected, variant = "text" }) => {
  return (
    <div className="w-full flex flex-row flex-wrap justify-start items-start gap-4">
      {options.map((option) => {
        const isSelected = selected === option.value;

        return (
          <button
            type="button"
            key={option.value}
            onClick={() => setSelected(option.value)}
            className={`text-sm font-medium ${
              isSelected ? "text-orange-yellow-crayola" : "text-light-gray-70"
            } ${
              variant === "pill"
                ? `bg-onyx-75 rounded-7p shadow-shadow-3 border px-3 py-1 ${
                    isSelected ? "border-orange-yellow-crayola" : "border-jet"
                  }`
                : ""
            } cursor-pointer`}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
};

export default ProjectSelector;
