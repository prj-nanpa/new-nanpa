import React from "react";
import { EventType } from "types/EventType";
import { TagType } from "types/TagType";
import { CardContentComponent } from "views/components/atom/CardContentComponent";
import { CardLeftRightControlComponent } from "views/components/atom/CardLeftRightControlComponent";
import { TitleComponent } from "views/components/atom/TitleComponent";
import { SearchFormComponent } from "views/components/organize/SearchFormComponent";
export const EventListPage = () => {
  const onClickDummy = () => {
    console.log("tag");
  };

  const TagList: TagType[] = [
    {
      tagColor: "red",
      tagId: 0,
      tagValue: "red",
    },
    {
      tagColor: "green",
      tagId: 2,
      tagValue: "green",
    },
    {
      tagColor: "green",
      tagId: 2,
      tagValue: "green",
    },
    {
      tagColor: "blue",
      tagId: 1,
      tagValue: "blue",
    },
    {
      tagColor: "red",
      tagId: 0,
      tagValue: "red",
    },
    {
      tagColor: "green",
      tagId: 2,
      tagValue: "green",
    },
    {
      tagColor: "green",
      tagId: 2,
      tagValue: "green",
    },
    {
      tagColor: "blue",
      tagId: 1,
      tagValue: "blue",
    },
    {
      tagColor: "red",
      tagId: 0,
      tagValue: "red",
    },
    {
      tagColor: "green",
      tagId: 2,
      tagValue: "green",
    },
    {
      tagColor: "green",
      tagId: 2,
      tagValue: "green",
    },
    {
      tagColor: "blue",
      tagId: 1,
      tagValue: "blue",
    },
  ];
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
      <SearchFormComponent onClick={onClickDummy} tagList={TagList} />
      <div className="flex flex-col w-full">
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
      </div>
    </>
  );
};
