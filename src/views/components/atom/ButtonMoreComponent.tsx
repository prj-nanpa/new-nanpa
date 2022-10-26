import React from "react";
type Props = {
  onClick: () => void;
};
export const ButtonMoreComponent = (props: Props) => {
  const { onClick } = props;
  return (
    <>
      <div
        className={
          "flex items-center justify-center " +
          " rounded-lg button-color-gray " +
          " w-72 md:w-full h-11"
        }
        onClick={onClick}
      >
        もっと見る
      </div>
    </>
  );
};
