import React from "react";
type Props = {
  text: string;
};

export const MiniTitleComponent = (props: Props) => {
  const { text } = props;
  return (
    <>
      <div
        className={
          "inline-flex items-end " +
          " px-2 my-1 border-b-2 border-black " +
          " w-full h-8" +
          " text-lg"
        }
      >
        {text}
      </div>
    </>
  );
};
