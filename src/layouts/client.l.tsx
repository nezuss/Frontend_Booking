import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

// ? Hooks
import { useUserInfoNavbar } from "@/context/user-info-navbar.c";

// ? Components
import { NavbarClient } from "@/components/navigation/client/navbar";

export function ClientLayout(): React.ReactNode {
  const navigate = useNavigate();
  const { user } = useUserInfoNavbar();

  useEffect(() => {
    if (user === undefined || !user) navigate("/");
  }, [user, navigate]);

  return (
    <>
      <NavbarClient />
      <Outlet />
    </>
  );
}
