import { MiniTitleComponent } from "views/components/atom/MiniTitleComponent";
import { GrInstagram, GrMail } from "react-icons/gr";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import React from "react";
import { ButtonNormalComponent } from "views/components/atom/ButtonNormalComponent";
import { MiniContentEditComponent } from "views/components/atom/MiniContentEditComponent";
import { IconContentEditComponent } from "views/components/atom/IconContentEditComponent";
import { TipsContentEditComponent } from "views/components/atom/TipsContentEditComponent";
import { EventType } from "types/EventType";
import { TagType } from "types/TagType";

type Props = {
  userId: string;
  userEmail: string;
  userName: string;
  userNickname: string;
  userIcon: string;
  userCoe: string;
  userSl: string;
  userComment: string;
  userTags: TagType[];
  userLineQr: string;
  userTwitterId: string;
  userInstagramId: string;
  userFacebookId: string;
  hostEvent: EventType[];
  joinEvent: EventType[];
  pastEvent: EventType[];
  userTagsId: Array<number>;
};

export const PersonalEditComponent = (props: Props) => {
  const {
    userEmail,
    userName,
    userNickname,
    userIcon,
    userCoe,
    userSl,
    userComment,
    userTags,
    userLineQr,
    userTwitterId,
    userInstagramId,
    userFacebookId,
    hostEvent,
    joinEvent,
    pastEvent,
    userTagsId,
  } = props;
  const onClick = () => {
    console.log("point");
  };
  return (
    <>
      <div
        className={
          "inline-flex flex-col md:flex-row items-center md:items-start gap-y-2 " +
          " shadow-lg p-2 " +
          " w-full max-w-5xl h-auto "
        }
      >
        <div
          className={
            "inline-flex justify-center items-center md:flex-shrink-0 " +
            " w-full md:w-52 h-auto "
          }
        >
          <img src={userIcon} className="w-full h-full object-contain" alt="" />
        </div>
        <div
          className={
            "flex flex-col md:flex-row md:flex-wrap gap-y-1 " + " mx-2 " + "  "
          }
        >
          <div className={"inline-block md:w-1/2 md:px-2"}>
            <MiniTitleComponent text="名前" />
            <MiniContentEditComponent text={userNickname} />
          </div>
          <div className={"inline-block md:w-1/2 md:px-2"}>
            <MiniTitleComponent text="本名" />
            <MiniContentEditComponent text={userName} />
          </div>
          <div className={"inline-block md:w-1/2 md:px-2"}>
            <MiniTitleComponent text="所属CoE" />
            <MiniContentEditComponent text={userCoe} />
          </div>
          <div className={"inline-block md:w-1/2 md:px-2"}>
            <MiniTitleComponent text="所属SL" />
            <MiniContentEditComponent text={userSl} />
          </div>
          <div className={"inline-block md:px-2 w-full"}>
            <div className={"inline-block w-full md:w-1/2"}>
              <MiniTitleComponent text="一言自己紹介" />
            </div>
            <textarea
              className={"px-2 py-1 w-full h-40 bg-gray-200/50 resize-none"}
              placeholder="input"
              value={userComment}
            />
          </div>
          <div className={"inline-block md:px-2 w-full"}>
            <div className={"inline-block w-full md:w-1/2"}>
              <MiniTitleComponent text="興味のあるタグ" />
            </div>
            <div
              className={
                "inline-flex flex-row flex-wrap gap-2" + " w-full h-auto"
              }
            >
              <TipsContentEditComponent
                text="コンテント"
                color="red"
                onClick={onClick}
                select={true}
              />
              <TipsContentEditComponent
                text="コンテント"
                color="blue"
                onClick={onClick}
                select={true}
              />
              <TipsContentEditComponent
                text="コンテント"
                color="blue"
                onClick={onClick}
                select={true}
              />
            </div>
          </div>
          <div className={"inline-block md:px-2 w-full"}>
            <div className={"inline-block w-full md:w-1/2"}>
              <MiniTitleComponent text="SNS" />
            </div>
            <div
              className={
                "inline-flex flex-col md:flex-row gap-y-1 " + " w-full h-auto"
              }
            >
              <div
                className={
                  "inline-flex flex-col md:justify-around gap-y-1 md:gap-0" +
                  " w-full md:w-1/2 h-auto"
                }
              >
                <IconContentEditComponent
                  text={userEmail}
                  IconContent={<GrMail className="w-full h-full" />}
                  onClick={onClick}
                />
                <IconContentEditComponent
                  text={userTwitterId}
                  IconContent={<BsTwitter className="w-full h-full" />}
                  onClick={onClick}
                />
                <IconContentEditComponent
                  text={userInstagramId}
                  IconContent={<GrInstagram className="w-full h-full" />}
                  onClick={onClick}
                />
                <IconContentEditComponent
                  text={userFacebookId}
                  IconContent={<FaFacebookSquare className="w-full h-full" />}
                  onClick={onClick}
                />
              </div>
              <div
                className={
                  "inline-flex justify-center items-center " +
                  " w-full md:w-1/2 h-auto"
                }
              >
                <img
                  src={userLineQr}
                  className="w-full md:w-10/12 h-full object-contain"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div
            className={
              "flex items-center justify-center md:justify-end " +
              " " +
              " w-full "
            }
          >
            <div className={"inline-block w-full md:w-1/2"}>
              <ButtonNormalComponent text="送信" onClick={onClick} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
