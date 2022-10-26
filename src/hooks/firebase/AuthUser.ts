import { auth } from "config/firebaseConfig";
import {
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  User,
  onAuthStateChanged,
} from "firebase/auth";
import {
  authChecked,
  userAuthState,
  userFirebaseState,
} from "providers/userStore";
import { useSetRecoilState } from "recoil";
import { AuthUserType } from "types/UserType";

export const useAuthUser = () => {
  const setAuthState = useSetRecoilState(userAuthState);
  const setUserFirebaseState = useSetRecoilState(userFirebaseState);
  const setAuthChecked = useSetRecoilState(authChecked);

  const login = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (e) {
      console.log(e);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  const changeUserState = async () => {
    setAuthChecked(false);
    await onAuthStateChanged(auth, (getAuthUser: User | null) => {
      if (getAuthUser) {
        const currentUser: AuthUserType = {
          uid: getAuthUser.uid,
          photoIcon: getAuthUser.photoURL ?? "",
          nickName: getAuthUser.displayName ?? "",
        };
        setUserFirebaseState(currentUser);
        setAuthState(true);
      } else {
        const currentUser: AuthUserType = {
          uid: "",
          photoIcon: "",
          nickName: "",
        };
        setUserFirebaseState(currentUser);
        setAuthState(false);
      }
      setAuthChecked(true);
    });
  };

  return { login, logout, changeUserState };
};
