import React from "react";

const RoutePageHeading: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className="w-full flex flex-col justify-start items-start gap-3">
      <h1 className="text-2xl md:text-3xl text-white-2 font-semibold">
        {title}
      </h1>
      <div className="w-40p h-5p bg-text-gradient-yellow rounded-full"></div>
    </div>
  );
};

export default RoutePageHeading;
