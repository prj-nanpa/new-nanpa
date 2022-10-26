import { TagType } from "./TagType";
import { EventType } from "./EventType";

export type UserType = {
  userId: string;
  userEmail: string;
  userName: string;
  userNickname: string;
  userIcon: string;
  userCoe: string;
  userSl: string;
  userComment: string;
  userTags: TagType[];
  userLineQr: string;
  userTwitterId: string;
  userInstagramId: string;
  userFacebookId: string;
  hostEvent: EventType[];
  joinEvent: EventType[];
  pastEvent: EventType[];
  userTagsId: Array<number>;
};

export type AuthUserType = {
  uid: string;
  photoIcon: string;
  nickName: string;
};
