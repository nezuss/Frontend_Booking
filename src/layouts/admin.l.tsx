import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

// ? Hooks
import { useUserInfoNavbar } from "@/context/user-info-navbar.c";

// ? Components
import { NavbarAdmin } from "@/components/navigation/admin/navbar";

export function AdminLayout(): React.ReactNode {
  const navigate = useNavigate();
  const { user } = useUserInfoNavbar();

  useEffect(() => {
    if (user === undefined || !user) navigate("/");
    if (user?.role !== "admin") navigate("/");
  }, [user, navigate]);

  return (
    <>
      <NavbarAdmin />
      <Outlet />
    </>
  );
}
