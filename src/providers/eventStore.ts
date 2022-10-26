import { atom } from "recoil";
import { EventType } from "types/EventType";

export const allEvent = atom<EventType[]>({
  key: "allEvent",
  default: [],
});
