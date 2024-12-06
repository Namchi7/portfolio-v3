"use client";

import React, { useState } from "react";
import Image from "next/image";

import email from "@/assets/svg/email.svg";
import location from "@/assets/svg/location.svg";
import down from "@/assets/svg/down.svg";
import Link from "next/link";

const SideInfo: React.FC = () => {
  const [expanded, setExpanded] = useState<boolean>(false);

  return (
    <aside className="relative 2xl:sticky 2xl:top-12 shrink-0 w-full md:w-700p lg:w-950p xl:w-full 2xl:w-275p bg-eerie-black-2 border border-solid border-jet rounded-20p shadow-shadow-5 transition-all duration-300 overflow-hidden">
      <div className="w-full p-4 xs:p-20p sm:p-30p 2xl:pt-60p">
        <div className="w-full flex 2xl:flex-col justify-start items-center gap-4">
          <div className="size-80p md:size-120p 2xl:size-150p bg-gradient-onyx rounded-20p md:rounded-30p flex justify-center items-center text-4xl text-white-2 font-medium">
            AK
          </div>

          <div className="w-max 2xl:w-full flex flex-col justify-center 2xl:justify-start items-start 2xl:items-center gap-4">
            <h1 className="text-base md:text-2xl text-left 2xl:text-center text-white-2 font-medium">
              Aman Kumar
            </h1>
            <p className="w-max text-xs text-white-1 font-light bg-onyx rounded-8p px-3 py-6p">
              React Developer
            </p>
          </div>
        </div>

        <div
          className={`${
            expanded ? "block" : "hidden"
          } 2xl:block w-full h-[1px] bg-jet my-30p`}
        ></div>

        <div
          className={`${
            expanded ? "block" : "hidden"
          } 2xl:block w-full space-y-30p`}
        >
          <ul className="w-full grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-1 gap-4">
            <li className="w-full grid grid-cols-[3.5rem,1fr] gap-2">
              <div className="relative shrink-0 size-30p md:size-12 flex justify-center items-center bg-gradient-onyx rounded-lg md:rounded-xl shadow-shadow-1 my-auto overflow-hidden">
                <div className="absolute size-full inset-[1px] flex justify-center items-center bg-eerie-black-1 rounded-lg md:rounded-xl z-[1]">
                  <Image src={email} alt="@" className="size-18p" />
                </div>
              </div>

              <div className="flex flex-col justify-start items-start gap-1 overflow-hidden">
                <p className="w-full text-xs text-light-gray-70 uppercase">
                  Email
                </p>

                <p className="w-full text-sm text-white-2 font-light whitespace-nowrap text-ellipsis overflow-hidden">
                  aman6143kumar6@gmail.com
                </p>
              </div>
            </li>

            <li className="w-full grid grid-cols-[3.5rem,1fr] gap-2">
              <div className="relative shrink-0 size-30p md:size-12 flex justify-center items-center bg-gradient-onyx rounded-lg md:rounded-xl shadow-shadow-1 my-auto overflow-hidden">
                <div className="absolute size-full inset-[1px] flex justify-center items-center bg-eerie-black-1 rounded-lg md:rounded-xl z-[1]">
                  <Image src={location} alt="@" className="size-18p" />
                </div>
              </div>

              <div className="flex flex-col justify-start items-start gap-1 overflow-hidden">
                <p className="w-full text-xs text-light-gray-70 uppercase">
                  Location
                </p>

                <p className="w-full text-sm text-white-2 font-light whitespace-nowrap text-ellipsis overflow-hidden">
                  Sirsa, Haryana, India
                </p>
              </div>
            </li>
          </ul>

          <div className="block 2xl:hidden w-full h-[1px] bg-jet"></div>

          <ul className="w-full flex justify-center items-center gap-4">
            <li className="size-4 flex justify-center items-center">
              <Link
                href={"https://www.linkedin.com/in/aman-kumar-akp"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  className="size-full fill-light-gray hover:fill-white-1 cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_293_24)">
                    <path d="M40.89 40.9065H33.7905V29.766C33.7905 27.1095 33.735 23.6955 30.078 23.6955C26.376 23.6955 25.812 26.577 25.812 29.5695V40.905H18.7035V17.9985H25.5315V21.123H25.623C26.577 19.3185 28.8975 17.421 32.3595 17.421C39.561 17.421 40.8975 22.1625 40.8975 28.3275V40.905L40.89 40.9065ZM10.6725 14.868C10.1299 14.8682 9.59262 14.7614 9.09139 14.5536C8.59016 14.3458 8.13485 14.0412 7.75153 13.6572C7.36821 13.2732 7.06442 12.8173 6.85755 12.3157C6.65069 11.8141 6.54482 11.2766 6.546 10.734C6.54689 9.91733 6.78991 9.11925 7.24434 8.44069C7.69877 7.76212 8.3442 7.23354 9.09902 6.92176C9.85384 6.60999 10.6842 6.52903 11.485 6.68912C12.2858 6.84921 13.0212 7.24316 13.5981 7.82116C14.1751 8.39916 14.5677 9.13525 14.7263 9.93637C14.885 10.7375 14.8025 11.5677 14.4894 12.3219C14.1762 13.0762 13.6465 13.7206 12.9671 14.1738C12.2877 14.627 11.4892 14.8686 10.6725 14.868ZM14.2335 40.9065H7.11V18H14.2335V40.9065ZM44.454 0H3.54C1.5855 0 0 1.5465 0 3.4605V44.541C0 46.455 1.5855 48.0015 3.54 48.0015H44.4465C46.398 48.0015 48 46.455 48 44.541V3.4605C48 1.5465 46.398 0 44.4465 0H44.454Z" />
                  </g>
                  <defs>
                    <clipPath id="clip0_293_24">
                      <rect width="48" height="48" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
            </li>

            <li className="size-4 flex justify-center items-center">
              <Link
                href={"https://github.com/Namchi7"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  className="size-full fill-light-gray hover:fill-white-1 cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M24 0C10.74 0 0 10.74 0 24C0 34.62 6.87 43.59 16.41 46.77C17.61 46.98 18.06 46.26 18.06 45.63C18.06 45.06 18.03 43.17 18.03 41.16C12 42.27 10.44 39.69 9.96 38.34C9.69 37.65 8.52 35.52 7.5 34.95C6.66 34.5 5.46 33.39 7.47 33.36C9.36 33.33 10.71 35.1 11.16 35.82C13.32 39.45 16.77 38.43 18.15 37.8C18.36 36.24 18.99 35.19 19.68 34.59C14.34 33.99 8.76 31.92 8.76 22.74C8.76 20.13 9.69 17.97 11.22 16.29C10.98 15.69 10.14 13.23 11.46 9.93C11.46 9.93 13.47 9.3 18.06 12.39C19.98 11.85 22.02 11.58 24.06 11.58C26.1 11.58 28.14 11.85 30.06 12.39C34.65 9.27 36.66 9.93 36.66 9.93C37.98 13.23 37.14 15.69 36.9 16.29C38.43 17.97 39.36 20.1 39.36 22.74C39.36 31.95 33.75 33.99 28.41 34.59C29.28 35.34 30.03 36.78 30.03 39.03C30.03 42.24 30 44.82 30 45.63C30 46.26 30.45 47.01 31.65 46.77C36.4144 45.1614 40.5544 42.0994 43.4873 38.0147C46.4203 33.9301 47.9986 29.0286 48 24C48 10.74 37.26 0 24 0Z"
                  />
                </svg>
              </Link>
            </li>

            <li className="size-4 flex justify-center items-center">
              <Link
                href={"https://x.com/amankmeghwal"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  className="size-full fill-light-gray hover:fill-white-1 cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M37.8 2.24915H45.1611L29.0811 20.6743L48 45.7509H33.1886L21.5794 30.5451L8.31086 45.7509H0.942857L18.1406 26.0366L0 2.25257H15.1886L25.6663 16.1486L37.8 2.24915ZM35.2114 41.3349H39.2914L12.96 6.43543H8.58514L35.2114 41.3349Z" />
                </svg>
              </Link>
            </li>

            {/* <li className="size-4 flex justify-center items-center">
              <Link
                href={"https://amankumarportfolio.netlify.app"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  className="size-full fill-light-gray hover:fill-white-1 cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_294_35)">
                    <path d="M24 0C17.6348 0 11.5303 2.52856 7.02944 7.02944C2.52856 11.5303 0 17.6348 0 24C0 30.3652 2.52856 36.4697 7.02944 40.9706C11.5303 45.4714 17.6348 48 24 48C30.3652 48 36.4697 45.4714 40.9706 40.9706C45.4714 36.4697 48 30.3652 48 24C48 17.6348 45.4714 11.5303 40.9706 7.02944C36.4697 2.52856 30.3652 0 24 0ZM31.7867 32.9067C31.7867 33.84 32.16 34.5867 32.7467 34.6667C33.3333 34.7467 34 34.08 34.2933 33.0667L34.8267 33.28C35.7557 33.7766 36.4855 34.5778 36.8934 35.549C37.3014 36.5203 37.3625 37.6023 37.0667 38.6133C36.8706 39.5106 36.3868 40.3193 35.6888 40.9162C34.9908 41.5131 34.1168 41.8656 33.2 41.92C31.8933 38.6933 27.5733 42.08 23.7067 41.3333C22.9028 41.131 22.16 40.7365 21.5422 40.1838C20.9244 39.631 20.4501 38.9365 20.16 38.16C23.3333 37.8667 27.76 33.5467 31.7867 32.9067ZM21.3333 30.0533C22.5178 30.0514 23.6617 29.6211 24.5537 28.8418C25.4457 28.0625 26.0257 26.9868 26.1867 25.8133C26.7521 26.5113 27.0449 27.3908 27.0106 28.2884C26.9763 29.186 26.6171 30.0406 26 30.6933C25.664 30.9875 25.2689 31.2061 24.8412 31.3344C24.4134 31.4627 23.9632 31.4977 23.5208 31.437C23.0784 31.3764 22.6542 31.2214 22.2768 30.9827C21.8994 30.744 21.5777 30.4271 21.3333 30.0533ZM29.3333 28.0267C30.4267 29.0667 37.3333 27.8667 38.72 30.9333C36.1867 30.4 30.8533 32.56 29.4667 28.0533L29.3333 28.0267ZM25.9467 14.5333V15.2533C24.2133 13.2 22.4 12.4 21.6533 13.7333C20.9067 15.0667 24.32 16.6933 23.68 18.7467C23.04 20.8 20.2933 20.24 18.6667 23.04C17.04 25.84 17.36 29.4933 21.9733 32.8267C20.4177 32.6542 18.9468 32.0292 17.7429 31.0291C16.5389 30.029 15.6548 28.6976 15.2 27.2C14.1333 24 14.96 21.1733 13.12 20.64C10.6667 19.8933 8 23.2267 8 26.1333C4.64 22.7733 8.13333 18.5067 4.8 14.9867C6.9915 10.3203 10.82 6.621 15.5587 4.59081C20.2974 2.56062 25.6166 2.3409 30.5067 3.97333C29.054 5.31962 27.8982 6.95413 27.113 8.77243C26.3278 10.5907 25.9306 12.5528 25.9467 14.5333Z" />
                  </g>
                  <defs>
                    <clipPath id="clip0_294_35">
                      <rect width="48" height="48" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
            </li> */}
          </ul>
        </div>
      </div>

      <div className="absolute block 2xl:hidden right-0 top-0 bg-border-gradient-onyx hover:bg-gradient-yellow rounded-es-15p rounded-se-15p p-[1px] pb-0 pr-0 overflow-hidden">
        <div
          onClick={() => setExpanded((prev) => !prev)}
          className="size-full flex justify-center items-center text-13p text-orange-yellow-crayola gradient-jet hover-gradient-yellow-2 hover:cursor-pointer shadow-shadow-2 px-10p sm:px-15p py-10p"
        >
          <p className="hidden sm:block">Show Contacts</p>
          <Image
            src={down}
            alt="show"
            className="block sm:hidden size-4 object-contain object-center"
          />
        </div>
      </div>
    </aside>
  );
};

export default SideInfo;
