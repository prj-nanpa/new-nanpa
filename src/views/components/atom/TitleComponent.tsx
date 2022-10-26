import React from "react";

type Props = {
  text: string;
};

export const TitleComponent = (props: Props) => {
  const { text } = props;
  return (
    <>
      <div
        className={
          "inline-flex items-end " +
          " px-2 border-b-2 border-black " +
          " max-w-xl w-full h-14" +
          " text-xl md:text-3xl"
        }
      >
        {text}
      </div>
    </>
  );
};
