import React, { createContext, useContext, useState, useEffect } from "react";

// ? Api
import { me } from "@/api/me";

interface UserInfoNavbarContextType {
  user: JSON;
  clearUser: () => void;
  setUser: () => void;
}

const UserInfoNavbarContext = createContext<
  UserInfoNavbarContextType | undefined
>(undefined);

export const UserInfoNavbarProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState<JSON>();

  const clearUser = () => {
    setUser(undefined);
  };

  useEffect(() => {
    const fetchUser = async () => {
      const responce = await me();

      if (responce.success) {
        const user = responce.content?.user;

        setUser(user);
      } else {
        clearUser();
        console.error(responce.content?.message);
      }
    };

    fetchUser();
  }, []);

  return (
    <UserInfoNavbarContext.Provider value={{ user, setUser, clearUser }}>
      {children}
    </UserInfoNavbarContext.Provider>
  );
};

export const useUserInfoNavbar = () => {
  const context = useContext(UserInfoNavbarContext);
  if (!context) {
    throw new Error(
      "useUserInfoNavbar must be used within a UserInfoNavbarProvider",
    );
  }
  return context;
};
