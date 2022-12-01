import React from "react";
import { EventType } from "types/EventType";
import { CardContentComponent } from "views/components/atom/CardContentComponent";
import { CardLeftRightControlComponent } from "views/components/atom/CardLeftRightControlComponent";
import { TitleComponent } from "views/components/atom/TitleComponent";
import { SearchFormComponent } from "views/components/organize/SearchFormComponent";

import { TagList } from "example/Tag";
import { EventData } from "example/Event";
export const EventListPage = () => {
  const onClickDummy = () => {
    console.log("tag");
  };

  return (
    <>
      <section className="flex w-full">
        <SearchFormComponent onClick={onClickDummy} tagList={TagList} />
      </section>
      <section className="flex flex-col w-full">
        <TitleComponent text="締め切りが近いイベント" />
        <div className="flex flex-col md:flex-row flex-wrap items-center justify-around">
          {[
            EventData,
            EventData,
            EventData,
            EventData,

            EventData,
            EventData,
            EventData,
          ].map((value: EventType, index: number) => (
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
          ))}
          <CardLeftRightControlComponent
            allPageNumber={1}
            nowPageNumber={2}
            onClickLeft={onClickDummy}
            onClickRight={onClickDummy}
          />
        </div>
      </section>
    </>
  );
};
