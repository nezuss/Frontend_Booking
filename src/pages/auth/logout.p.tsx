import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Cookies } from "react-cookie";

// ? Hooks
import { useUserInfoNavbar } from "@/context/user-info-navbar.c";

export function Logout() {
  const navigate = useNavigate();
  const cookies = new Cookies();
  const { clearUser } = useUserInfoNavbar();

  useEffect(() => {
    cookies.remove("token");
    clearUser();
    navigate("/");
  });

  return <></>;
}
