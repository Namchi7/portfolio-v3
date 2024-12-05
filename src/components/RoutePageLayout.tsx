import React from "react";
import RoutePageHeading from "./RoutePageHeading";

const RoutePageLayout: React.FC<{
  title: string;
  children: React.ReactNode;
}> = ({ title, children }) => {
  return (
    <section className="w-full h-auto flex flex-col justify-start items-start shadow-shadow-5 p-4 xs:p-20p sm:p-30p">
      <RoutePageHeading title={title} />

      {children}
    </section>
  );
};

export default RoutePageLayout;
