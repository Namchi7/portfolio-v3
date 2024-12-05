import React from "react";
import Image from "next/image";

const Button: React.FC<{ disabled: boolean; icon: string; title: string }> = ({
  disabled,
  icon,
  title,
}) => {
  return (
    <button
      disabled={disabled}
      className="w-full md:w-max bg-border-gradient-onyx rounded-14p shadow-shadow-2 p-[1px] pb-0 pr-0 ml-auto mt-4 sm:mt-30p disabled:opacity-70 disabled:cursor-not-allowed"
    >
      <div className="w-full flex justify-center items-center gap-1  gradient-jet rounded-14p px-5 py-4">
        <div className="size-6 flex justify-center items-center">
          <Image
            src={icon}
            alt={title}
            className="size-full object-contain object-center"
          />
        </div>
        <p className="text-orange-yellow-crayola">{title}</p>
      </div>
    </button>
  );
};

export default Button;
