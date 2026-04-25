import { client } from "./client";

// ? Classes
import { ApiResponse } from "@/classes/api-responce.c";

export const search = async ({
  search,
  city,
  rating,
  freeParking,
  wellnessCenter,
}: {
  search?: string;
  city?: string;
  rating?: number;
  freeParking?: boolean;
  wellnessCenter?: boolean;
}) => {
  return await client
    .get("/locations", {
      params: {
        search,
        city,
        rating,
        freeParking,
        wellnessCenter,
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

export const searchAdvanced = async ({
  checkIn,
  checkOut,
  guestsCount,
  search,
  city,
  rating,
  freeParking,
  wellnessCenter,
}: {
  checkIn: string;
  checkOut: string;
  guestsCount: number;
  search?: string;
  city?: string;
  rating?: number;
  freeParking?: boolean;
  wellnessCenter?: boolean;
}) => {
  return await client
    .get("/rooms/availability", {
      params: {
        checkIn,
        checkOut,
        guestsCount,
        search,
        city,
        rating,
        freeParking,
        wellnessCenter,
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
