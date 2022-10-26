import React from "react";
import IdeaMan from "component/nanpaImage/IdeaMan.png";

type Props = {
  onClick: () => void;
};

export const SearchLinkComponent = (props: Props) => {
  const { onClick } = props;
  return (
    <>
      <div
        className={
          "inline-flex flex-row justify-center items-center " +
          " w-80 h-28 md:max-w-5xl md:w-full md:h-64 " +
          " "
        }
        onClick={onClick}
      >
        <div
          className={
            "inline-flex md:flex-col justify-center " +
            " w-full md:w-auto h-full "
          }
        >
          <div className={"hidden md:inline-flex " + " " + " text-3xl "}>
            イベントを検索
          </div>
          <div
            className={
              "hidden  md:inline-flex " + " " + " text-xl " + "text-gray-500"
            }
          >
            あなたの関心のあるイベントを探しましょう
          </div>
          <div
            className={
              "inline-flex justify-center items-center " +
              " button-color-gray rounded-md " +
              " w-full md:w-80 h-full md:h-16 " +
              ""
            }
          >
            イベントを検索する
          </div>
        </div>
        <div className={"hidden md:inline-flex " + " w-1/3 h-full"}>
          <img
            className={"h-full w-full object-contain"}
            src={IdeaMan}
            alt=""
          />
        </div>
      </div>
    </>
  );
};
