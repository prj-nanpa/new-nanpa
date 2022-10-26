import { IconComponent } from "views/components/atom/IconComponent";
import React from "react";
import { TagType } from "types/TagType";
import { UserMiniInfoType } from "types/UserMiniInfoType";

type StringNumber = {
  text: string;
  number: string;
};
type TextToContentProp = {
  text: string;
  content: string;
};
const NumberOfPeople = (props: StringNumber) => {
  const { text, number } = props;
  return (
    <>
      <div
        className={
          "inline-flex flex-row justify-around items-center " +
          "w-full md:max-w-md h-28 "
        }
      >
        <div
          className={
            "inline-flex items-center justify-center w-1/2 text-xl md:text-2xl"
          }
        >
          {text}
        </div>
        <div className={"inline-flex items-end justify-center w-1/2 text-md"}>
          <span className={"text-4xl"}>{number}</span>人
        </div>
      </div>
    </>
  );
};
const NumberOfPrice = (props: StringNumber) => {
  const { text, number } = props;
  return (
    <>
      <div
        className={
          "inline-flex flex-row justify-around items-center " +
          "w-full md:max-w-md h-28 "
        }
      >
        <div
          className={
            "inline-flex items-center justify-center w-1/2 text-xl md:text-2xl"
          }
        >
          {text}
        </div>
        <div className={"inline-flex items-end justify-center w-1/2 text-md"}>
          <span className={"text-4xl"}>{number}</span>円以下
        </div>
      </div>
    </>
  );
};
const TextToContent = (props: TextToContentProp) => {
  const { text, content } = props;
  return (
    <>
      <div
        className={
          "inline-flex flex-row justify-around items-center " +
          "w-full md:max-w-md h-28 "
        }
      >
        <div
          className={
            "inline-flex items-center justify-center w-1/2 text-xl md:text-2xl"
          }
        >
          {text}
        </div>
        <div
          className={"inline-flex items-center justify-center w-1/2 text-4xl"}
        >
          {content}
        </div>
      </div>
    </>
  );
};

type Props = {
  eventId: number;
  userId: string;
  eventOwner: UserMiniInfoType;
  eventLeftDate: number;
  eventImage: string;
  eventName: string;
  eventNote: string;
  eventDeadline: string;
  eventDate: string;
  eventPlace: string;
  eventBudget: number;
  eventMinGuest: string;
  eventMaxGuest: string;
  eventCreatedDate: string;
  eventGuests: UserMiniInfoType[];
  eventGuestLength: number;
  eventTags: TagType[];
  eventTagsId: number[];
};

export const PageContentComponent = (props: Props) => {
  const {
    eventBudget,
    eventCreatedDate,
    eventDate,
    eventDeadline,
    eventGuestLength,
    eventGuests,
    eventId,
    eventImage,
    eventLeftDate,
    eventMaxGuest,
    eventMinGuest,
    eventName,
    eventNote,
    eventOwner,
    eventPlace,
    eventTags,
    eventTagsId,
    userId,
  } = props;
  const onClick = () => {
    console.log("point");
  };
  return (
    <>
      <div
        className={
          "inline-flex flex-col justify-center items-center gap-y-2 " +
          " shadow-lg p-2 " +
          " w-full max-w-5xl h-auto "
        }
      >
        <NumberOfPeople text="最小募集人数" number={eventMinGuest} />
        <NumberOfPeople text="最大募集人数" number={eventMaxGuest} />
        <div
          className={
            "inline-flex flex-row justify-around items-center " +
            "w-full md:max-w-md h-28 "
          }
        >
          <div
            className={
              "inline-flex items-center justify-center w-1/2 text-xl md:text-2xl"
            }
          >
            主催者
          </div>
          <div
            className={"inline-flex items-center justify-center w-1/2 text-4xl"}
          >
            <IconComponent img={eventImage} onClick={onClick} />
          </div>
        </div>
        <NumberOfPrice text="予算" number={eventBudget.toString()} />
        <TextToContent text="日時" content={eventDate} />
        <TextToContent text="場所" content={eventPlace} />
        <div
          className={"inline-flex flex-col gap-y-4 " + "w-full md:max-w-md "}
        >
          <div
            className={
              "inline-flex justify-center border-b-4 border-black w-full text-xl md:text-2xl"
            }
          >
            参加者
          </div>
          <div
            className={
              "inline-flex flex-row flex-wrap gap-2 justify-center " +
              " w-full "
            }
          >
            {eventGuests.map((value: UserMiniInfoType) => (
              <IconComponent
                key={value.userId}
                img={value.userIcon}
                onClick={onClick}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
