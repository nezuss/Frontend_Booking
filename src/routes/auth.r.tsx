import { type RouteObject } from "react-router-dom";

// ? Layouts
import { AuthLayout } from "@/layouts/auth.l";

// ? Pages
import { Login } from "@/pages/auth/login.p";
import { Register } from "@/pages/auth/register.p";
import { Logout } from "@/pages/auth/logout.p";

export const authRoutes: RouteObject[] = [
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "logout",
        element: <Logout />,
      },
    ],
  },
];
