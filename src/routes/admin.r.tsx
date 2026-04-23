import { type RouteObject } from "react-router-dom";

// ? Layouts
import { AdminLayout } from "@/layouts/admin.l";

// ? Pages
import { Reservations } from "@/pages/client/reservations";

export const adminRoutes: RouteObject[] = [
  {
    path: "/a",
    Component: AdminLayout,
    children: [
      {
        path: "reservations",
        element: <Reservations />,
      },
    ],
  },
];
