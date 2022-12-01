import React from "react";
import { EventType } from "types/EventType";
import { CardContentComponent } from "views/components/atom/CardContentComponent";
import { CardJunleComponent } from "views/components/atom/CardJunleComponent";
import { SearchLinkComponent } from "views/components/atom/SearchLinkComponent";
import { TitleComponent } from "views/components/atom/TitleComponent";

import { EventData } from "example/Event";

export const HomePage = () => {
  const onClickSearchLink = () => {
    console.log("point");
  };
  const onClickDummy = () => {
    console.log("point");
  };
  return (
    <>
      <section className="flex w-full">
        <SearchLinkComponent onClick={onClickSearchLink} />
      </section>
      <section className="flex w-full">
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
      </section>
      <section className="flex flex-col w-full">
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
      </section>
      <section className="flex flex-col w-full">
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
      </section>
    </>
  );
};
