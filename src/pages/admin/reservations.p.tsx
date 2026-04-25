import { useState, useEffect } from "react";

// ? Api
import { getReservations } from "@/api/admin";

export function Reservations() {
  const [reservations, setReservations] = useState<Reservation[]>([]);

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const result = await getReservations();

        if (result.success) {
          setReservations(result.content.reservations);
        } else {
          console.error(result.content?.message);
        }
      } catch (err) {
        console.error(err.message);
      }
    };
    fetchReservations();
  }, []);

  return (
    <div>
      <h1 className="text-4xl mb-4">Reservations List</h1>
      <div className="flex flex-col gap-y-4">
        {reservations.map((reservation) => (
          <Reservation key={"adm-rsv-" + reservation.id} {...reservation} />
        ))}
      </div>
    </div>
  );
}

interface Reservation {
  id: number;
  guestName: string;
  guestEmail: string;
  roomName: string;
  locationName: string;
  locationCity: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  status: string;
}

const Reservation = ({
  id,
  guestName,
  guestEmail,
  roomName,
  locationName,
  locationCity,
  checkIn,
  checkOut,
  guests,
  status,
}: Reservation) => {
  return (
    <div
      key={id}
      className="h-68 relative flex flex-col justify-between border rounded-xl p-4"
    >
      <h2 className="text-3xl">{roomName}</h2>
      <div className="space-y-1">
        <p className="">Guest information</p>
        <div className="border-l-2 border-primary pl-2">
          <p className="text-sm">
            Full Name: <span className="font-semibold">{guestName}</span>
          </p>
          <p className="text-sm">
            Email: <span className="font-semibold">{guestEmail}</span>
          </p>
        </div>
      </div>
      <div className="space-y-1">
        <p className="">Location information</p>
        <div className="border-l-2 border-primary pl-2">
          <p className="text-sm">
            Name: <span className="font-semibold">{locationName}</span>
          </p>
          <p className="text-sm">
            City: <span className="font-semibold">{locationCity}</span>
          </p>
          <p className="text-sm">
            From <span className="font-semibold">{checkIn}</span> to{" "}
            <span className="font-semibold">{checkOut}</span>
          </p>
          <p className="text-sm">
            Guests: <span className="font-semibold">{guests}</span>
          </p>
        </div>
      </div>
      <div className="absolute bg-primary text-background right-2 top-2 px-2 py-1 rounded-lg">
        {status}
      </div>
    </div>
  );
};
