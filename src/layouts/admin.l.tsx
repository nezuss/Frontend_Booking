import { Outlet } from "react-router-dom";

// ? Components
import { NavbarAdmin } from "@/components/navigation/admin/navbar";

export function AdminLayout(): React.ReactNode {
  return (
    <>
      <NavbarAdmin />
      <Outlet />
    </>
  );
}
