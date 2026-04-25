import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import { routes } from "@/routes/root.r";
import { CookiesProvider } from "react-cookie";

// ? Providers
import { UserProvider } from "@/providers/user-provider.p";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CookiesProvider>
      <UserProvider />
      <RouterProvider router={createBrowserRouter(routes)} />
    </CookiesProvider>
  </StrictMode>,
);
