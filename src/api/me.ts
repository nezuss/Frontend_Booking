import { client } from "./client";

export const me = () => {
  return client.get("/auth/me");
};
