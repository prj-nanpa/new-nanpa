import React from "react";

type Props = {
  text: string;
  color: string;
  onClick: () => void;
  type?: string;
};

export const ButtonRegisterComponent = (props: Props) => {
  const { text, color, onClick, type } = props;
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
      <button
        type={type == "submit" ? "submit" : "button"}
        className={
          "flex justify-center items-center " +
          ` rounded-lg ${Color()} ` +
          " w-64 md:w-96 h-24 md:h-36" +
          " text-white font-bold " +
          " hover:cursor-pointer"
        }
        onClick={onClick}
      >
        {text}
      </button>
    </>
  );
};
