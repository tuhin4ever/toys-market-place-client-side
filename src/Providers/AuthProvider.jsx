import React, { createContext, useState } from "react";
import app from "../FireBase/firebase.config";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useEffect } from "react";
import Swal from "sweetalert2";
export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [reload, setReload] = useState(null);

  const updateUserProfile = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const singIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const singInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleAuthProvider);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  //* observe auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("auth state change", currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    if (reload) {
        Swal.fire({
            title: "Welcome To Play Go",
            text: `${user.displayName} ✨`,
            icon: "success",
            showConfirmButton: false,
            timer: 2000,
          });
    }
    return () => unsubscribe();
  }, [reload]);

  const authInfo = {
    user,
    loading,
    createUser,
    singIn,
    updateUserProfile,
    setReload,
    singInWithGoogle,
    logOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
