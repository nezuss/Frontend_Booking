import { clientCredentials } from "./client";

// ? Classes
import { ApiResponse } from "@/classes/api-responce.c";

export const getDashboardInfo = async () => {
  return clientCredentials
    .get("/admin/dashboard")
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
    .get(`/admin/reservations`)
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

export const getLocations = async () => {
  return clientCredentials
    .get(`/admin/locations`)
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

export const createLocation = async ({
  name,
  city,
  address,
  description,
  rating,
  hasFreeParking,
  hasWellnessCenter,
  imageUrl,
}: {
  name: string;
  city: string;
  address: string;
  description: string;
  rating: number;
  hasFreeParking: boolean;
  hasWellnessCenter: boolean;
  imageUrl: string;
}) => {
  return clientCredentials
    .post(`/admin/locations`, {
      name,
      city,
      address,
      description,
      rating,
      hasFreeParking,
      hasWellnessCenter,
      imageUrl,
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

export const updateLocation = async ({
  id,
  name,
  city,
  address,
  description,
  rating,
  hasFreeParking,
  hasWellnessCenter,
  imageUrl,
}: {
  id: number;
  name: string;
  city: string;
  address: string;
  description: string;
  rating: number;
  hasFreeParking: boolean;
  hasWellnessCenter: boolean;
  imageUrl: string;
}) => {
  return clientCredentials
    .put(`/admin/locations/${id}`, {
      name,
      city,
      address,
      description,
      rating,
      hasFreeParking,
      hasWellnessCenter,
      imageUrl,
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

export const deleteLocation = async (id: number) => {
  return clientCredentials
    .delete(`/admin/locations/${id}`)
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
