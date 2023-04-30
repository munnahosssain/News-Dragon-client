import React from "react";
import { createContext } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

import app from "../firebase.config";
import { useState } from "react";
import { useEffect } from "react";

const auth = getAuth(app);
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, seLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();

  const createUser = (email, password) => {
    seLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    seLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = () => {
    seLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, loggedUser => {
      console.log("Logged in user", loggedUser);
      setUser(loggedUser);
      seLoading(false);
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    createUser,
    loginUser,
    googleSignIn,
    logOut,
    loading,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
