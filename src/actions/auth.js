import { googleAuth, googleProvider } from "../firebase/firebase";
import { signInWithPopup } from "firebase/auth";

export const startLogin = () => {
  return () => {
    return signInWithPopup(googleAuth, googleProvider);
  };
};

export const login = (uid) => ({
  type: "LOGIN",
  uid,
});

export const startLogout = () => {
  return () => {
    return googleAuth.signOut();
  };
};

export const logout = () => ({
  type: "LOGOUT",
});
