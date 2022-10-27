import React from "react";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

type Props = {
  onClickLeft: () => void;
  onClickRight: () => void;
  nowPageNumber: number;
  allPageNumber: number;
};

export const CardLeftRightControlComponent = (props: Props) => {
  const { onClickLeft, onClickRight, nowPageNumber, allPageNumber } = props;
  return (
    <>
      <div className="flex items-center justify-between h-16 w-full">
        <div
          onClick={onClickLeft}
          className="inline-flex justify-center items-center h-16 w-16"
        >
          <AiFillCaretLeft className="h-10 w-10" />
        </div>
        <div className="inline-flex items-center justify-around w-32 h-full text-xl">
          <div>{nowPageNumber}</div>
          <div>/</div>
          <div>{allPageNumber}</div>
        </div>
        <div
          onClick={onClickRight}
          className="inline-flex justify-center items-center h-16 w-16"
        >
          <AiFillCaretRight className="h-10 w-10" />
        </div>
      </div>
    </>
  );
};
