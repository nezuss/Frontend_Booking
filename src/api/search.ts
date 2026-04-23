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
