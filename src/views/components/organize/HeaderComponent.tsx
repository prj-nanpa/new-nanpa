import React from "react";
import { DiYeoman } from "react-icons/di";
type Props = {
  logo: string;
  logoClick: () => void;
  btnClick: () => void;
};

export const HeaderComponent = (props: Props) => {
  const { logo } = props;
  return (
    <>
      <header className="flex flex-row items-center justify-between px-2 w-full h-20 bg-gray-400">
        <div className="inline-flex items-center justify-center w-40 h-full">
          <img src={logo} className="w-full h-full object-contain" alt="" />
        </div>
        <div className="inline-flex items-center justify-center rounded-md border-2 border-black w-12 md:w-40 h-12">
          <div className="inline-flex items-center ">
            <DiYeoman className="h-8 w-8" />
            <span className="hidden md:inline-block text-xl font-bold">
              My Page
            </span>
          </div>
        </div>
      </header>
    </>
  );
};
