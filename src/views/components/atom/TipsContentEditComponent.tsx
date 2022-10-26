import React from "react";

type Props = {
  text: string;
  color: string;
  select: boolean;
  onClick: () => void;
};

export const TipsContentEditComponent = (props: Props) => {
  const { text, color, select, onClick } = props;
  const Color = (): string => {
    switch (color) {
      case "red":
        return "button-color-red";
      case "blue":
        return "button-color-blue";
      case "green":
        return "button-color-green";
      default:
        return "button-color-gray";
    }
  };
  return (
    <>
      <div
        className={
          "inline-flex justify-center items-center " +
          ` ${select ? " opacity-100 " : " opacity-50 "}` +
          ` rounded-lg ${Color()} py-3 px-4 ` +
          " h-9 " +
          " font-bold text-sm text-white " +
          " hover:cursor-pointer"
        }
        onClick={onClick}
      >
        {text}
      </div>
    </>
  );
};
