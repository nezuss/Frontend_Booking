import { client } from "./client";

// ? Classes
import { ApiResponse } from "@/classes/api-responce.c";

export const register = async (
  name: string,
  email: string,
  password: string,
) => {
  return client
    .post("/auth/register", { name, email, password })
    .then((res) => {
      return new ApiResponse({
        success: true,
        content: res.data,
      });
    })
    .catch((error) => {
      if (error.response) {
        return new ApiResponse({
          success: false,
          content: error.response.data,
        });
      } else if (error.request) {
        return new ApiResponse({
          success: false,
          content: "No Response: " + error.request,
        });
      } else {
        return new ApiResponse({
          success: false,
          content: "Error Message: " + error.message,
        });
      }
    });
};

export const login = async (email: string, password: string) => {
  return client
    .post("/auth/login", { email, password })
    .then((res) => {
      return new ApiResponse({
        success: true,
        content: res.data,
      });
    })
    .catch((error) => {
      if (error.response) {
        return new ApiResponse({
          success: false,
          content: error.response.data,
        });
      } else if (error.request) {
        return new ApiResponse({
          success: false,
          content: "No Response: " + error.request,
        });
      } else {
        return new ApiResponse({
          success: false,
          content: "Error Message: " + error.message,
        });
      }
    });
};
