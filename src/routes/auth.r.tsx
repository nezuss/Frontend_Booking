import { type RouteObject } from "react-router-dom";

// ? Layouts
import { AuthLayout } from "@/layouts/auth.l";

// ? Pages
import { Login } from "@/pages/auth/login.p";
import { Register } from "@/pages/auth/register.p";

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
    ],
  },
];
