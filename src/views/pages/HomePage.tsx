import React from "react";
import { EventType } from "types/EventType";
import { CardContentComponent } from "views/components/atom/CardContentComponent";
import { CardJunleComponent } from "views/components/atom/CardJunleComponent";
import { SearchLinkComponent } from "views/components/atom/SearchLinkComponent";
import { TitleComponent } from "views/components/atom/TitleComponent";
export const HomePage = () => {
  const onClickSearchLink = () => {
    console.log("point");
  };
  const onClickDummy = () => {
    console.log("point");
  };

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

  return (
    <>
      <SearchLinkComponent onClick={onClickSearchLink} />
      <div className="flex flex-col w-full">
        <TitleComponent text="ジャンルから探す" />
        <div className="flex flex-col md:flex-row items-center justify-around">
          <CardJunleComponent
            title="お酒"
            imageLink="https://placehold.jp/150x150.png"
            onClick={onClickDummy}
          />
          <CardJunleComponent
            title="勉強"
            imageLink="https://placehold.jp/150x150.png"
            onClick={onClickDummy}
          />
          <CardJunleComponent
            title="ゲーム"
            imageLink="https://placehold.jp/150x150.png"
            onClick={onClickDummy}
          />
          <CardJunleComponent
            title="運動"
            imageLink="https://placehold.jp/150x150.png"
            onClick={onClickDummy}
          />
        </div>
      </div>
      <div className="flex flex-col w-full">
        <TitleComponent text="締め切りが近いイベント" />
        <div className="flex flex-col md:flex-row items-center justify-around">
          {[EventData, EventData, EventData].map(
            (value: EventType, index: number) => (
              <CardContentComponent
                key={index}
                day={value.eventDate}
                deadline={value.eventDeadline}
                imageLink={value.eventImage}
                ownerIcon={value.eventOwner.userIcon}
                ownerName={value.eventOwner.userNickname}
                participationMax={value.eventMaxGuest}
                participationNow={value.eventMinGuest}
                place={value.eventPlace}
                price={value.eventBudget.toString()}
                title={value.eventName}
                onClick={onClickDummy}
              />
            )
          )}
        </div>
      </div>
      <div className="flex flex-col w-full">
        <TitleComponent text="あなたが関心ありそうなイベント" />
        <div className="flex flex-col md:flex-row items-center justify-around">
          {[EventData, EventData, EventData].map(
            (value: EventType, index: number) => (
              <CardContentComponent
                key={index}
                day={value.eventDate}
                deadline={value.eventDeadline}
                imageLink={value.eventImage}
                ownerIcon={value.eventOwner.userIcon}
                ownerName={value.eventOwner.userNickname}
                participationMax={value.eventMaxGuest}
                participationNow={value.eventMinGuest}
                place={value.eventPlace}
                price={value.eventBudget.toString()}
                title={value.eventName}
                onClick={onClickDummy}
              />
            )
          )}
        </div>
      </div>
    </>
  );
};
