import { clientCredentials } from "./client";

// ? Classes
import { ApiResponse } from "@/classes/api-responce.c";

export const createReservation = async ({
  roomId,
  checkIn,
  checkOut,
  guests,
}: {
  roomId: number;
  checkIn: string;
  checkOut: string;
  guests: number;
}) => {
  return clientCredentials
    .post("/reservations", {
      params: {
        roomId,
        checkIn,
        checkOut,
        guests,
      },
    })
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

export const getReservations = async () => {
  return clientCredentials
    .get("/reservations/me")
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

export const deleteReservation = async ({ id }: { id: number }) => {
  return clientCredentials
    .delete(`/reservations/${id}`)
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
