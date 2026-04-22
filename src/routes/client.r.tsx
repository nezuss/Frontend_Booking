import { type RouteObject } from "react-router-dom";

// ? Layouts

// ? Pages

export const clientRoutes: RouteObject[] = [
  {
    path: "/client",
    children: [
      {
        path: "booked",
      },
    ],
  },
];
