import { client } from "./client";

class AuthResponse {
  success: boolean;
  content: string;

  constructor(data: { success: boolean; content: string }) {
    this.success = data.success;
    this.content = data.content;
  }
}

export const register = async (
  name: string,
  email: string,
  password: string,
) => {
  return client
    .post("/auth/register", { name, email, password })
    .then((res) => {
      return new AuthResponse({
        success: true,
        content: res.data,
      });
    })
    .catch((error) => {
      if (error.response) {
        return new AuthResponse({
          success: false,
          content: error.response.data,
        });
      } else if (error.request) {
        return new AuthResponse({
          success: false,
          content: "No Response: " + error.request,
        });
      } else {
        return new AuthResponse({
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
      return new AuthResponse({
        success: true,
        content: res.data,
      });
    })
    .catch((error) => {
      if (error.response) {
        return new AuthResponse({
          success: false,
          content: error.response.data,
        });
      } else if (error.request) {
        return new AuthResponse({
          success: false,
          content: "No Response: " + error.request,
        });
      } else {
        return new AuthResponse({
          success: false,
          content: "Error Message: " + error.message,
        });
      }
    });
};
