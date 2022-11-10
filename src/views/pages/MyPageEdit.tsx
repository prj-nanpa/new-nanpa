import React from "react";
import { EventType } from "types/EventType";
import { TagType } from "types/TagType";
import { UserType } from "types/UserType";
import { TitleComponent } from "views/components/atom/TitleComponent";
import { PersonalEditComponent } from "views/components/organize/PersonalEditComponent";
export const MyPageEditPage = () => {
  const EventData: EventType = {
    eventId: 1,
    userId: "xxxxxxx",
    eventOwner: {
      userEmail: "",
      userIcon: "https://placehold.jp/150x150.png",
      userId: "",
      userName: "",
      userNickname: "",
    },
    eventLeftDate: 1,
    eventImage: "https://placehold.jp/150x150.png",
    eventName: "title title",
    eventNote: "コンテントコンテント",
    eventDeadline: "2022-12-02",
    eventDate: "2022-02-20",
    eventPlace: "池袋",
    eventBudget: 1000,
    eventMinGuest: "12",
    eventMaxGuest: "23",
    eventCreatedDate: "2022-12-03",
    eventGuests: [],
    eventGuestLength: 2,
    eventTags: [],
    eventTagsId: [1, 2],
  };
  const TagData0: TagType = {
    tagColor: "red",
    tagId: 0,
    tagValue: "red",
  };
  const TagData1: TagType = {
    tagColor: "blue",
    tagId: 1,
    tagValue: "blue",
  };
  const UserData1: UserType = {
    userId: "xxxxxxx",
    userEmail: "dtrz0711@gmail",
    userName: "田中龍之介",
    userNickname: "龍ちゃん",
    userIcon: "https://placehold.jp/3697c7/ffffff/150x150.png?text=user",
    userCoe: "エンジニア・クリエイター",
    userSl: "PS",
    userComment: "よろしくお願いします",
    userTags: [TagData0, TagData1],
    userLineQr: "https://placehold.jp/3697c7/ffffff/150x150.png?text=QR",
    userTwitterId: "@dtrz0711",
    userInstagramId: "@dtrz0711",
    userFacebookId: "@dtrz0711",
    hostEvent: [EventData],
    joinEvent: [EventData],
    pastEvent: [EventData],
    userTagsId: [0, 1],
  };

  return (
    <section className="flex flex-col w-full">
      <div className="flex flex-row justify-between w-full">
        <TitleComponent text="個人設定" />
      </div>
      <div className="flex flex-col items-center w-full">
        <PersonalEditComponent
          userId={UserData1.userId}
          userEmail={UserData1.userEmail}
          userName={UserData1.userName}
          userNickname={UserData1.userNickname}
          userIcon={UserData1.userIcon}
          userCoe={UserData1.userCoe}
          userSl={UserData1.userSl}
          userComment={UserData1.userComment}
          userTags={UserData1.userTags}
          userLineQr={UserData1.userLineQr}
          userTwitterId={UserData1.userTwitterId}
          userInstagramId={UserData1.userInstagramId}
          userFacebookId={UserData1.userFacebookId}
          hostEvent={UserData1.hostEvent}
          joinEvent={UserData1.joinEvent}
          pastEvent={UserData1.pastEvent}
          userTagsId={UserData1.userTagsId}
        />
      </div>
    </section>
  );
};
