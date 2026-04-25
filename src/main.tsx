import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import { routes } from "@/routes/root.r";
import { CookiesProvider } from "react-cookie";

// ? Context
import { AdminNavbarProvider } from "@/context/admin-navbar.c";
import { UserInfoNavbarProvider } from "@/context/user-info-navbar.c";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CookiesProvider>
      <AdminNavbarProvider>
        <UserInfoNavbarProvider>
          <RouterProvider router={createBrowserRouter(routes)} />
        </UserInfoNavbarProvider>
      </AdminNavbarProvider>
    </CookiesProvider>
  </StrictMode>,
);
