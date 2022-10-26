import { EventType } from "types/EventType";
import { TagData0, TagData1 } from "./Tag";
import { UserMinDate1, UserMinDate2 } from "./User";

export const EventData: EventType = {
  eventId: 1,
  userId: "xxxxxxx",
  eventOwner: UserMinDate1,
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
  eventGuests: [UserMinDate1, UserMinDate2],
  eventGuestLength: 2,
  eventTags: [TagData0, TagData1],
  eventTagsId: [1, 2],
};
