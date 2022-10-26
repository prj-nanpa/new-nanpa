import { atom } from "recoil";
import { AuthUserType, UserType } from "types/UserType";

export const userState = atom<UserType>({
  key: "userState",
  default: {
    userId: "",
    userEmail: "",
    userName: "",
    userNickname: "",
    userIcon: "",
    userCoe: "",
    userSl: "",
    userComment: "",
    userTags: [],
    userLineQr: "",
    userTwitterId: "",
    userInstagramId: "",
    userFacebookId: "",
    hostEvent: [],
    joinEvent: [],
    pastEvent: [],
    userTagsId: [],
  },
});
export const userAuthState = atom<boolean>({
  key: "userAuthState",
  default: false,
});
export const authChecked = atom<boolean>({
  key: "authChecked",
  default: false,
});

export const userFirebaseState = atom<AuthUserType>({
  key: "userFirebaseState",
  default: {
    uid: "xxxxxx",
    photoIcon: "",
    nickName: "",
  },
});
