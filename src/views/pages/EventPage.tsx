import React from "react";
import { CommentType } from "types/CommentType";
import { EventType } from "types/EventType";
import { DeadlineBordComponent } from "views/components/atom/DeadlineBordComponent";
import { TipsContentComponent } from "views/components/atom/TipsContentComponent";
import { TitleComponent } from "views/components/atom/TitleComponent";
import { CommentComponent } from "views/components/organize/CommentComponent";
import { PageContentComponent } from "views/components/organize/PageContentComponent";
export const EventPage = () => {
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

  const commentDataList: CommentType[] = [
    {
      userId: "xxxx",
      userIcon:
        "https://placehold.jp/30/dd6699/ffffff/150x150.png?text=placeholder+image",
      commentDate: "2021-12-21",
      commentText: "comment",
    },
    {
      userId: "xxxx",
      userIcon:
        "https://placehold.jp/30/dd6699/ffffff/150x150.png?text=placeholder+image",
      commentDate: "2021-12-21",
      commentText: "comment",
    },
    {
      userId: "xxxx",
      userIcon:
        "https://placehold.jp/30/dd6699/ffffff/150x150.png?text=placeholder+image",
      commentDate: "2021-12-21",
      commentText: "comment",
    },
    {
      userId: "xxxx",
      userIcon:
        "https://placehold.jp/30/dd6699/ffffff/150x150.png?text=placeholder+image",
      commentDate: "2021-12-21",
      commentText: "comment",
    },
    {
      userId: "xxxx",
      userIcon:
        "https://placehold.jp/30/dd6699/ffffff/150x150.png?text=placeholder+image",
      commentDate: "2021-12-21",
      commentText: "comment",
    },
  ];
  return (
    <>
      <section className="flex flex-col w-full">
        <div className="flex flex-col-reverse md:flex-row justify-between items-center w-full">
          <TitleComponent text="イベント" />
          <DeadlineBordComponent text={EventData.eventDeadline} />
        </div>
        <div className="flex flex-col items-center w-full">
          <div className="flex items-center justify-start">
            <img src={EventData.eventImage} alt="" />
          </div>
          <div className="flex flex-col items-start w-full max-w-5xl">
            {/* タグ */}
            <div>
              {EventData.eventTagsId.map((value) => (
                <TipsContentComponent
                  key={value}
                  text={"test"}
                  color={"red"}
                  onClick={() => {
                    console.log("point");
                  }}
                />
              ))}
            </div>
            {/* タイトル */}
            <div>{EventData.eventName}</div>
            {/* 募集文章 */}
            <div>{EventData.eventNote}</div>
          </div>
          <PageContentComponent
            eventBudget={EventData.eventBudget}
            eventCreatedDate={EventData.eventCreatedDate}
            eventDate={EventData.eventDate}
            eventDeadline={EventData.eventDeadline}
            eventGuestLength={EventData.eventGuestLength}
            eventGuests={EventData.eventGuests}
            eventId={EventData.eventId}
            eventImage={EventData.eventImage}
            eventLeftDate={EventData.eventLeftDate}
            eventMaxGuest={EventData.eventMaxGuest}
            eventMinGuest={EventData.eventMinGuest}
            eventName={EventData.eventName}
            eventNote={EventData.eventNote}
            eventOwner={EventData.eventOwner}
            eventPlace={EventData.eventPlace}
            eventTags={EventData.eventTags}
            eventTagsId={EventData.eventTagsId}
            userId={EventData.userId}
          />
        </div>
      </section>
      <section className="flex flex-col w-full">
        <div className="flex flex-row justify-between w-full">
          <TitleComponent text="コメント" />
        </div>
        <div className="flex flex-col items-center w-full">
          <CommentComponent commentDataList={commentDataList} />
        </div>
      </section>
    </>
  );
};
