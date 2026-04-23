import { Outlet } from "react-router-dom";

// ? Components
import { NavbarClient } from "@/components/navigation/client/navbar";

export function ClientLayout(): React.ReactNode {
  return (
    <>
      <NavbarClient />
      <Outlet />
    </>
  );
}
