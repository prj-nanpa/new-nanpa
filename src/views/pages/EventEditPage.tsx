import React from "react";
import { EventType } from "types/EventType";
import { TitleComponent } from "views/components/atom/TitleComponent";
import { PageContentEditComponent } from "views/components/organize/PageContentEditComponent";
export const EventEditPage = () => {
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
    <section className="flex flex-col w-full">
      <div className="flex flex-row justify-between w-full">
        <TitleComponent text="イベント編集" />
      </div>
      <div className="flex flex-col items-center w-full">
        <PageContentEditComponent
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
  );
};
