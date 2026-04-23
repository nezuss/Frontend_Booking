import { client } from "./client";

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
  return client.post("/reservations", {
    params: {
      roomId,
      checkIn,
      checkOut,
      guests,
    },
  });
};

export const getReservations = async () => {
  return client.get("/reservations/me");
};

export const deleteReservation = async ({ id }: { id: number }) => {
  return client.delete(`/reservations/${id}`);
};
