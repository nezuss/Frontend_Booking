import { type RouteObject } from "react-router-dom";

// ? Routes
import { authRoutes } from "./auth.r";
import { clientRoutes } from "./client.r";

// ? Layouts
import { RootLayout } from "@/layouts/root.l";

// ? Pages
import { Home } from "@/pages/home.p";
import { AboutUs } from "@/pages/about-us.p";
import { NotFound } from "@/pages/error/not-found.p";
import { Locations } from "@/pages/locations.p";

export const routes: RouteObject[] = [
  ...authRoutes,
  ...clientRoutes,
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "locations",
        element: <Locations />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
