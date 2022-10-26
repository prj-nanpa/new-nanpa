import React from "react";
type Props = {
  text: string;
};

export const MiniContentEditComponent = (props: Props) => {
  const { text } = props;
  return (
    <>
      <div
        className={"inline-flex items-end " + " " + " w-full h-8" + " text-lg"}
      >
        <input
          type="text"
          value={text}
          className=" px-2 py-1 bg-gray-200/50 w-full h-full"
          placeholder="input"
        />
      </div>
    </>
  );
};
