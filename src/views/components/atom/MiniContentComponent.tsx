import React from "react";
type Props = {
  text: string;
};

export const MiniContentComponent = (props: Props) => {
  const { text } = props;
  return (
    <>
      <div
        className={
          "inline-flex items-end " + " px-2 " + " w-full h-8" + " text-lg"
        }
      >
        {text}
      </div>
    </>
  );
};
