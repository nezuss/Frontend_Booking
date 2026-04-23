import { client } from "./client";

export const getDashboardInfo = async () => {
  return client.get("/admin/reservations");
};

export const getReservation = async () => {
  return client.get(`/admin/reservations`);
};

export const getLocation = async () => {
  return client.get(`/admin/locations`);
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
  return client.post(`/admin/locations`, {
    params: {
      name,
      city,
      address,
      description,
      rating,
      hasFreeParking,
      hasWellnessCenter,
      imageUrl,
    },
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
  return client.put(`/admin/locations/${id}`, {
    params: {
      name,
      city,
      address,
      description,
      rating,
      hasFreeParking,
      hasWellnessCenter,
      imageUrl,
    },
  });
};

export const deleteLocation = async (id: number) => {
  return client.delete(`/admin/locations/${id}`);
};
