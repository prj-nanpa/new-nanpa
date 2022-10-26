import React from "react";

type Props = {
  text: string;
  color: string;
  onClick: () => void;
};

export const TipsContentComponent = (props: Props) => {
  const { text, color, onClick } = props;
  const Color = (): string => {
    switch (color) {
      case "red":
        return "button-color-red";
      case "blue":
        return "button-color-blue";
      default:
        return "button-color-gray";
    }
  };
  return (
    <>
      <div
        className={
          "inline-flex justify-center items-center " +
          ` rounded-lg ${Color()} py-3 px-4 ` +
          " h-9 " +
          " text-sm" +
          " hover:cursor-pointer"
        }
        onClick={onClick}
      >
        {text}
      </div>
    </>
  );
};
