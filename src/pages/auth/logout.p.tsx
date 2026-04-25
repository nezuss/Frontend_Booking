import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Cookies } from "react-cookie";

export function Logout() {
  const navigate = useNavigate();
  const cookies = new Cookies();

  useEffect(() => {
    cookies.remove("token");
    navigate("/");
  });

  return <></>;
}
