import { UserMiniInfoType } from "types/UserMiniInfoType";
import { UserType } from "types/UserType";
import { EventData } from "./Event";
import { TagData0, TagData1 } from "./Tag";

export const UserMinDate1: UserMiniInfoType = {
  userEmail: "dtrz0711@gmail.com",
  userIcon: "https://placehold.jp/3697c7/ffffff/150x150.png?text=dummy1",
  userId: "xxxxxxx",
  userName: "龍ちゃん",
  userNickname: "龍ちゃん",
};
export const UserMinDate2: UserMiniInfoType = {
  userEmail: "dtrz0711@gmail.com",
  userIcon: "https://placehold.jp/3697c7/ffffff/150x150.png?text=dummy2",
  userId: "xxxxxxx",
  userName: "龍ちゃん1",
  userNickname: "龍ちゃん1",
};

export const UserData1: UserType = {
  userId: "xxxxxxx",
  userEmail: "dtrz0711@gmail",
  userName: "田中龍之介",
  userNickname: "龍ちゃん",
  userIcon: "https://placehold.jp/3697c7/ffffff/150x150.png?text=user",
  userCoe: "エンジニア・クリエイター",
  userSl: "PS",
  userComment: "よろしくお願いします",
  userTags: [TagData0, TagData1],
  userLineQr: "https://placehold.jp/3697c7/ffffff/150x150.png?text=QR",
  userTwitterId: "@dtrz0711",
  userInstagramId: "@dtrz0711",
  userFacebookId: "@dtrz0711",
  hostEvent: [EventData],
  joinEvent: [EventData],
  pastEvent: [EventData],
  userTagsId: [0, 1],
};
