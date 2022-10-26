import React from "react";
import { MdArrowRightAlt } from "react-icons/md";

type Props = {
  title: string;
  imageLink: string;
  onClick: () => void;
};
export const CardJunleComponent = (props: Props) => {
  const { title, imageLink } = props;

  return (
    <>
      <div
        className={
          "relative flex flex-row md:flex-col justify-around" +
          "overflow-hidden " +
          "border-2 border-gray-700 rounded-lg mt-8 " +
          "w-72 md:w-60 h-28 md:h-96"
        }
      >
        <div
          className={
            "flex justify-center items-center " +
            "" +
            "w-28 md:w-full h-full md:h-60"
          }
        >
          <img
            src={imageLink}
            className="h-full w-full object-contain rounded-lg md:rounded-lg"
            alt=""
          />
        </div>
        <div
          className={
            "flex justify-center items-center " +
            " w-40 md:w-full h-full md:h-36" +
            "  "
          }
        >
          <span className="block truncate">{title}</span>{" "}
        </div>
        <div
          className={
            "flex md:hidden items-center justify-center " + "" + " w-8 h-full"
          }
        >
          <MdArrowRightAlt className="w-6 h-6" />
        </div>
      </div>
    </>
  );
};
