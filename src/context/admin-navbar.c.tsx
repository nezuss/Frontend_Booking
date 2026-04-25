import React, { createContext, useContext, useState } from "react";

interface AdminNavbarContextType {
  activeMenu: number;
  setActiveMenu: (index: number) => void;
}

const AdminNavbarContext = createContext<AdminNavbarContextType | undefined>(
  undefined,
);

export const AdminNavbarProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [activeMenu, setActiveMenu] = useState<number>(
    parseInt(localStorage.getItem("admin:active-service") ?? "0"),
  );

  const changeActiveMenu = (index: number) => {
    setActiveMenu(index);
    localStorage.setItem("admin:active-service", index.toString());
  };

  return (
    <AdminNavbarContext.Provider
      value={{ activeMenu, setActiveMenu: changeActiveMenu }}
    >
      {children}
    </AdminNavbarContext.Provider>
  );
};

export const useAdminNavbar = () => {
  const context = useContext(AdminNavbarContext);
  if (!context) {
    throw new Error("useAdminNavbar must be used within a AdminNavbarProvider");
  }
  return context;
};
