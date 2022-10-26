import React from "react";
type Props = {
  text: string;
};
export const DeadlineBordComponent = (props: Props) => {
  const { text } = props;
  return (
    <>
      <div
        className={
          "flex flex-col items-center justify-center" +
          " rounded-lg button-color-red" +
          " w-56 h-20" +
          " text-2xl font-bold text-white"
        }
      >
        <div>応募締め切り</div>
        <div>{text}</div>
      </div>
    </>
  );
};
