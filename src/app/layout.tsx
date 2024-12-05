import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import SideInfo from "@/components/SideInfo";
import MainHeader from "@/components/MainHeader";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Aman Kumar",
  description: "Portfolio of Aman Kumar - Frontend Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased w-full flex justify-center items-center bg-smoky-black`}
      >
        <div className="size-full overflow-scroll grid">
          <div className="size-full max-w-[75rem] flex flex-col 2xl:flex-row justify-start 2xl:justify-center items-center 2xl:items-start gap-20p md:gap-30p p-4 pb-16 sm:p-20p sm:pb-20 md:py-12 md:pb-20 lg:py-12 lg:px-0 mx-auto">
            <SideInfo />

            <div className="relative w-full md:w-700p lg:w-950p xl:w-full bg-eerie-black-2 flex justify-start items-start border border-jet rounded-20p transition-all duration-300 mb-20 sm:mb-0">
              <MainHeader
                pos="absolute"
                coord="right-0 top-0"
                show="hidden lg:block"
                z="5"
                rounded="rounded-se-20p rounded-es-20p"
              />
              {children}
            </div>
          </div>
        </div>

        <MainHeader
          pos="fixed"
          coord="left-0 right-0 bottom-0"
          show="block lg:hidden"
          z="20"
          rounded="rounded-ss-20p rounded-se-20p"
        />
      </body>
    </html>
  );
}
