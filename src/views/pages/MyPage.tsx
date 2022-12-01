import React from "react";
import { EventType } from "types/EventType";

import { CardContentComponent } from "views/components/atom/CardContentComponent";
import { TitleComponent } from "views/components/atom/TitleComponent";
import { PersonalViewComponent } from "views/components/organize/PersonalViewComponent";

import { UserData1 } from "example/User";
export const MyPage = () => {
  const onClickDummy = () => {
    console.log("point");
  };

  return (
    <>
      <section className="flex flex-col w-full">
        <TitleComponent text="主催しているイベント" />
        <div className="flex flex-col md:flex-row items-center justify-start">
          {UserData1.hostEvent.map((value: EventType, index: number) => (
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
        </div>
      </section>
      <section className="flex flex-col w-full">
        <div className="flex flex-row justify-between w-full">
          <TitleComponent text="個人設定" />
        </div>
        <div className="flex flex-col items-center w-full">
          <PersonalViewComponent
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
      <section className="flex flex-col w-full">
        <TitleComponent text="参加しているイベント" />
        <div className="flex flex-col md:flex-row items-center justify-start">
          {UserData1.joinEvent.map((value: EventType, index: number) => (
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
        </div>
      </section>
    </>
  );
};
