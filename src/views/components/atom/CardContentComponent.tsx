import React from "react";

type Props = {
  title: string;
  imageLink: string;
  deadline: string;
  ownerIcon: string;
  ownerName: string;
  place: string;
  day: string;
  price: string;
  participationMax: string;
  participationNow: string;
  onClick: () => void;
};
export const CardContentComponent = (props: Props) => {
  const {
    title,
    deadline,
    imageLink,
    ownerIcon,
    ownerName,
    place,
    day,
    price,
    participationMax,
    participationNow,
    onClick,
  } = props;
  return (
    <>
      <div
        onClick={onClick}
        className={
          "relative flex flex-col items-center " +
          " rounded-md shadow-md overflow-hidden " +
          " w-full max-w-xs h-[500px]"
        }
      >
        <div
          className={
            "absolute top-0 left-0 flex justify-center items-center " +
            " bg-red-600 " +
            " h-12 w-full " +
            " font-bold text-white " +
            " rotate-[25deg] translate-x-1/3"
          }
        >
          あと{deadline}日
        </div>
        <div className={"w-full h-56"}>
          <img
            src={imageLink}
            className={"w-full h-full object-cover"}
            alt=""
          />
        </div>
        <div
          className={
            "flex flex-col justify-center gap-y-3 " +
            " px-4 " +
            " w-full h-64" +
            " text-xl"
          }
        >
          <div className={"flex items-center " + " w-full h-10 " + " "}>
            {title}
          </div>
          <div className={"flex flex-row items-center " + " text-base"}>
            <div className={"w-8 h-8"}>
              <img src={ownerIcon} alt="" />
            </div>
            <div className={""}>主催:{ownerName}</div>
          </div>
          <div className={"flex flex-wrap " + " w-full h-28"}>
            <div className={"flex items-center " + "" + "w-1/2"}>
              場所:{place}
            </div>
            <div className={"flex items-center " + "" + "w-1/2"}>
              日程:{day}
            </div>
            <div className={"flex items-center " + "" + "w-1/2"}>
              予算:{price}
            </div>
            <div className={"flex items-center " + "" + "w-1/2"}>
              人数:{participationNow}/{participationMax}
            </div>
          </div>
          <div className={"flex items-center justify-center" + "w-full h-10"}>
            <div
              className={
                "flex justify-center items-center " +
                " rounded-md button-color-gray " +
                "w-full h-10" +
                ""
              }
            >
              詳しく見る
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
