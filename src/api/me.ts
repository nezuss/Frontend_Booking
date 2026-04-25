import { clientCredentials } from "./client";

// ? Classes
import { ApiResponse } from "@/classes/api-responce.c";

export const me = async () => {
  return clientCredentials
    .get("/auth/me")
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
