import React from "react";
import { DeadlineBordComponent } from "views/components/atom/DeadlineBordComponent";
import { TipsContentComponent } from "views/components/atom/TipsContentComponent";
import { TitleComponent } from "views/components/atom/TitleComponent";
import { CommentComponent } from "views/components/organize/CommentComponent";
import { PageContentComponent } from "views/components/organize/PageContentComponent";

import { EventData } from "example/Event";
import { commentDataList } from "example/Comment";
export const EventPage = () => {
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
