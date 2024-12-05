import React from "react";
import Image from "next/image";

const SkillCard: React.FC<{ title: string; image: string }> = ({
  title,
  image,
}) => {
  return (
    <div className="bg-border-gradient-onyx rounded-14p shadow-shadow-2 p-[1px] group">
      <div className="size-full grid grid-flow-row gap-4 gradient-jet rounded-14p p-5 md:p-30p">
        <div className="size-30p sm:size-40p md:size-50p flex justify-center items-center grayscale group-hover:grayscale-0 brightness-75 group-hover:brightness-100 opacity-85 group-hover:opacity-100 mx-auto transition-all duration-200">
          <Image src={image} alt={title} className="size-full" />
        </div>

        <h4 className="text-base text-white-2 text-center font-medium">
          {title}
        </h4>
      </div>
    </div>
  );
};

export default SkillCard;
