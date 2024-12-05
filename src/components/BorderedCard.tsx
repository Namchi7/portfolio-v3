import React from "react";
import Image from "next/image";

const BorderedCard: React.FC<{
  title: string;
  description: string;
  image: string;
}> = ({ title, description, image }) => {
  return (
    <div className="bg-border-gradient-onyx rounded-14p shadow-shadow-2 p-[1px] pb-0 pr-0">
      <div className="size-full grid grid-flow-row md:grid-cols-[2rem,1fr] gap-4 gradient-jet rounded-14p p-5 md:p-30p">
        <div className="size-8 flex justify-center items-center mx-auto md:mx-0">
          <Image src={image} alt={title} className="size-full" />
        </div>

        <div className="h-full flex flex-col justify-start items-center md:items-start gap-2">
          <h4 className="text-18p text-white-2 font-medium">{title}</h4>

          <p className="text-15p text-light-gray text-center md:text-left">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BorderedCard;
