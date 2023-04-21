import { firebaseAuth, googleProvider } from "../firebase/firebase";
import { signOut, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


export const startEmailSignup = (email, password) => {
  return () => {
    return createUserWithEmailAndPassword(firebaseAuth, email, password);
  }  
};

export const startEmailLogin = (email, password) => {
  return () => {
      return signInWithEmailAndPassword(firebaseAuth, email, password);
  };
};

export const startGoogleLogin = () => {
  return () => {
    return signInWithPopup(firebaseAuth, googleProvider);
  };
};

export const login = (uid) => ({
  type: "LOGIN",
  uid,
});

export const setUserProfile = ( {displayName, email, photoURL} ) => ({
  type: 'SET_USER_PROFILE',
  displayName,
  email,
  photoURL
});

export const startLogout = () => {
  return () => {
    return signOut(firebaseAuth);
  };
};

export const logout = () => ({
  type: "LOGOUT",
});
