import React from "react";
import { MdModeEdit } from "react-icons/md";

type Props = {
  onClick: () => void;
};

export const ButtonCreateFloatComponent = (props: Props) => {
  const { onClick } = props;
  return (
    <>
      <div
        className={
          "fixed bottom-2 right-2 flex justify-center items-center" +
          " bg-gray-600/60 rounded-full " +
          " w-20 md:w-28 h-20 md:h-28"
        }
        onClick={onClick}
      >
        <MdModeEdit className="w-14 h-14" />
      </div>
    </>
  );
};
