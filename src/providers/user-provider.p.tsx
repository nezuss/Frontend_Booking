import { useEffect } from "react";

// ? Api
import { me } from "@/api/me";

export const UserProvider = () => {
  useEffect(() => {
    const fetchUser = async () => {
      const responce = await me();

      if (responce.success) {
        localStorage.setItem("user", JSON.stringify(responce.content?.user));
      } else {
        localStorage.removeItem("user");
        console.error(responce.content?.message);
      }
    };

    fetchUser();
  }, []);

  return (
    <div>
      <></>
    </div>
  );
};
