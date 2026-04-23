import { type RouteObject } from "react-router-dom";

// ? Layouts
import { ClientLayout } from "@/layouts/client.l";

// ? Pages
import { Reservations } from "@/pages/client/reservations.p";

export const clientRoutes: RouteObject[] = [
  {
    path: "/c",
    Component: ClientLayout,
    children: [
      {
        path: "reservations",
        element: <Reservations />,
      },
    ],
  },
];
