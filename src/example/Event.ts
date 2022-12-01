import { EventType } from "types/EventType";

export const EventData: EventType = {
  eventId: 1,
  userId: "xxxxxxx",
  eventOwner: {
    userEmail: "dtrz0711@gmail.com",
    userIcon: "https://placehold.jp/3697c7/ffffff/150x150.png?text=dummy1",
    userId: "xxxxxxx",
    userName: "龍ちゃん",
    userNickname: "龍ちゃん",
  },
  eventLeftDate: 1,
  eventImage: "https://placehold.jp/150x150.png",
  eventName: "title title",
  eventNote: "コンテントコンテント",
  eventDeadline: "2022-12-02",
  eventDate: "2022-02-20",
  eventPlace: "池袋",
  eventBudget: "1000",
  eventMinGuest: "12",
  eventMaxGuest: "23",
  eventCreatedDate: "2022-12-03",
  eventGuests: [
    {
      userEmail: "dtrz0711@gmail.com",
      userIcon: "https://placehold.jp/3697c7/ffffff/150x150.png?text=dummy1",
      userId: "xxxxxxx",
      userName: "龍ちゃん",
      userNickname: "龍ちゃん",
    },
    {
      userEmail: "dtrz0711@gmail.com",
      userIcon: "https://placehold.jp/3697c7/ffffff/150x150.png?text=dummy2",
      userId: "xxxxxxx",
      userName: "龍ちゃん1",
      userNickname: "龍ちゃん1",
    },
  ],
  eventGuestLength: 2,
  eventTags: [
    {
      tagColor: "blue",
      tagId: 1,
      tagValue: "blue",
    },
    {
      tagColor: "blue",
      tagId: 1,
      tagValue: "blue",
    },
  ],
  eventTagsId: [1, 2],
};
