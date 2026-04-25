import axios from "axios";
import { Cookies } from "react-cookie";

const cookies = new Cookies();

export const client = axios.create({
  baseURL: "http://localhost:4000/api",
});

export const clientCredentials = axios.create({
  baseURL: "http://localhost:4000/api",
});

clientCredentials.interceptors.request.use((config) => {
  const token = cookies.get("token");
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});
