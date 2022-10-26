import React from "react";

type Props = {
  img: string;
  onClick: () => void;
};

export const IconComponent = (props: Props) => {
  const { img, onClick } = props;
  return (
    <>
      <div
        className={
          "flex items-center flex-shrink-0 " +
          " overflow-hidden " +
          " rounded-2xl " +
          " w-20 h-20"
        }
        onClick={onClick}
      >
        <img src={img} className="w-full h-full object-contain" alt="" />
      </div>
    </>
  );
};
