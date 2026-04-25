import { Outlet, useNavigate } from "react-router-dom";

// ? Hooks
import { useUserInfoNavbar } from "@/context/user-info-navbar.c";

// ? Components
import { NavbarAdmin } from "@/components/navigation/admin/navbar";

export function AdminLayout(): React.ReactNode {
  const navigate = useNavigate();
  const { user } = useUserInfoNavbar();

  if (!user) return null;
  if (user.role !== "admin") navigate("/");

  return (
    <>
      <NavbarAdmin />
      <Outlet />
    </>
  );
}
