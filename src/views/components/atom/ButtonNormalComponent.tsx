import React from "react";
import { MdArrowRightAlt } from "react-icons/md";

type Props = {
  text: string;
  onClick: () => void;
  type?: string;
};

export const ButtonNormalComponent = (props: Props) => {
  const { text, onClick, type } = props;

  return (
    <>
      <button
        type={
          type == "submit" ? "submit" : type == "reset" ? "reset" : "button"
        }
        className={
          "inline-flex flex-row items-center " +
          " rounded-md button-color-gray " +
          " w-full h-14 "
        }
        onClick={onClick}
      >
        <div className={"flex items-center justify-center " + " w-4/5" + ""}>
          {text}
        </div>
        <div
          className={"flex items-center justify-center " + "" + " w-1/5 h-full"}
        >
          <MdArrowRightAlt className="w-6 h-6" />
        </div>
      </button>
    </>
  );
};
