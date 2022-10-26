import { TagType } from "./TagType";
import { UserMiniInfoType } from "./UserMiniInfoType";

export type EventType = {
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
