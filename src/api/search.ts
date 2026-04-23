import { client } from "./client";

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
  const response = await client.get("/locations", {
    params: {
      search,
      city,
      rating,
      freeParking,
      wellnessCenter,
    },
  });
  return response.data;
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
  const response = await client.get("/rooms/availability", {
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
  });
  return response.data;
};
