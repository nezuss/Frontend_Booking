import { type RouteObject } from "react-router-dom";

// ? Layouts
import { AdminLayout } from "@/layouts/admin.l";

// ? Pages
import { Dashboard } from "@/pages/admin/dashboard.p";
import { Reservations } from "@/pages/admin/reservations.p";
import { Locations } from "@/pages/admin/locations.p";

export const adminRoutes: RouteObject[] = [
  {
    path: "/a",
    Component: AdminLayout,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "reservations",
        element: <Reservations />,
      },
      {
        path: "locations",
        element: <Locations />,
      },
    ],
  },
];
