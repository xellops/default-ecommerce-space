"use client";
import { auth } from "@/configs/firebase";
import { User, onAuthStateChanged } from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";

interface AuthContextValue {
  currentUser: User | null;
  loading: boolean;
}

const AuthContext = React.createContext<AuthContextValue | null>(null);

export const AuthProvider = ({ children }: any) => {
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, initializeUser);
    return unsubscribe;
  }, []);

  const initializeUser = async (user: any) => {
    if (user) {
      setCurrentUser({ ...user }); // We spread the value to avoid any object references.
    } else {
      setCurrentUser(null);
    }

    setLoading(false);
  };

  const value = { currentUser, loading };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export function useAuth() {
  return useContext(AuthContext) as AuthContextValue;
}
