import { useEffect } from "react";

// ? Icons
import { Star } from "lucide-react";

// ? Api
import { createReservation } from "@/api/reservations";

// ? Hooks
import { useSearch } from "@/context/search.c";

// ? Components
import { Button } from "@/components/ui/button";
import { FormField } from "@/components/ui/field";

export function Locations(): React.ReactNode {
  const {
    rooms,
    search,
    setSearch,
    rating,
    checkIn,
    checkOut,
    guests,
    setRating,
    freeParking,
    setFreeParking,
    wellnessCenter,
    setWellnessCenter,
    findRooms,
  } = useSearch();

  useEffect(() => {
    findRooms();
  }, []);

  const handleBook = async (
    roomId: number,
    checkIn: Date,
    checkOut: Date,
    guests: number,
  ) => {
    try {
      const result = await createReservation({
        roomId,
        checkIn: checkIn.toISOString().split("T")[0],
        checkOut: checkOut.toISOString().split("T")[0],
        guests,
      });

      if (result.success) {
        alert("Reservation created successfully!");
      } else {
        alert(result.content?.message);
      }
    } catch (err) {
      alert(err?.message);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="max-w-5xl w-full flex flex-col gap-y-6">
        <div className="w-full flex flex-row items-center gap-x-4 border rounded-2xl p-4 *:w-full">
          <FormField
            label="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            variant="input"
          />
          <FormField
            label="Rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            type="number"
            variant="input"
          />
          <FormField
            label="Has Free Parking"
            value={freeParking}
            onChange={(checked) => setFreeParking(checked)}
            variant="checkbox"
          />
          <FormField
            label="Has Wellness Center"
            value={wellnessCenter}
            onChange={(checked) => {
              setWellnessCenter(checked);
            }}
            variant="checkbox"
          />
        </div>
        {rooms?.map((room) => (
          <Room
            key={room.id}
            id={room.id}
            locationId={room.locationId}
            type={room.type}
            capacity={room.capacity}
            pricePerNight={room.pricePerNight}
            description={room.description}
            imageUrl={room.imageUrl}
            createdAt={room.createdAt}
            location={room?.location}
            onClick={() => handleBook(room.id, checkIn, checkOut, guests)}
          />
        ))}
      </div>
    </div>
  );
}

export interface Room {
  id: number;
  locationId: number;
  type: string;
  capacity: number;
  pricePerNight: number;
  description: string;
  imageUrl: string;
  createdAt: string;
  location: Location;
}

const Room = ({
  id,
  locationId,
  type,
  capacity,
  pricePerNight,
  description,
  imageUrl,
  createdAt,
  location,
  onClick,
}: Room & {
  onClick: () => void;
}) => {
  return (
    <div
      id={`rm-${locationId}-${id}`}
      className="flex flex-col md:flex-row border p-4 rounded-xl gap-4"
    >
      <img
        src={imageUrl}
        alt={"rm-img-" + id.toString()}
        className="bg-accent min-w-86 lg:min-w-128 h-74 rounded-2xl"
      />
      <div className="relative w-full flex flex-col justify-between">
        <p className="absolute top-2 right-2 bg-primary text-background flex items-center justify-center gap-1 px-2 py-1 rounded-lg">
          {location.rating} <Star className="inline-block size-4" />
        </p>
        <div className="space-y-2">
          <div>
            <h2 className="text-3xl">Hotel: {location.name}</h2>
            <p>
              {location.city}: {location.address}
            </p>
          </div>
          <p className="text-wrap">{description}</p>
          <p className="text-wrap">Price per Night: {pricePerNight} Euro</p>
        </div>
        <div className="space-y-2">
          <div className="border-primary border-l-2 pl-2">
            <p>Room type: {type}</p>
            <p>Room capacity: {capacity}</p>
            <p>Free Parking: {location.hasFreeParking ? "Yes" : "No"}</p>
            <p>Wellness Center: {location.hasWellnessCenter ? "Yes" : "No"}</p>
            <p>
              Posted at: {createdAt.slice(0, 10).split("-").reverse().join(" ")}
            </p>
          </div>
          <Button onClick={onClick} className="w-full">
            Book Now
          </Button>
        </div>
      </div>
    </div>
  );
};

interface Location {
  id: number;
  name: string;
  city: string;
  address: string;
  description: string;
  rating: number;
  hasFreeParking: boolean;
  hasWellnessCenter: boolean;
  imageUrl: string;
}

const Location = ({
  id,
  name,
  city,
  address,
  description,
  rating,
  hasFreeParking,
  hasWellnessCenter,
  imageUrl,
  onClick,
}: Location & {
  onClick: () => void;
}) => {
  return (
    <div
      id={id.toString()}
      className="flex flex-col md:flex-row border p-4 rounded-xl gap-4"
    >
      <img
        src={imageUrl}
        alt={name}
        className="min-w-86 lg:min-w-128 h-64 rounded-2xl"
      />
      <div className="relative w-full flex flex-col justify-between">
        <p className="absolute top-2 right-2 bg-primary text-background flex items-center justify-center gap-1 px-2 py-1 rounded-lg">
          {rating} <Star className="inline-block size-4" />
        </p>
        <div className="space-y-2">
          <div>
            <h2 className="text-3xl">{name}</h2>
            <p>
              {city}: {address}
            </p>
          </div>
          <p className="text-wrap">{description}</p>
        </div>
        <div className="space-y-2">
          <div className="border-primary border-l-2 pl-2">
            <p>Free Parking: {hasFreeParking ? "Yes" : "No"}</p>
            <p>Wellness Center: {hasWellnessCenter ? "Yes" : "No"}</p>
          </div>
          <Button onClick={onClick} className="w-full">
            Book Now
          </Button>
        </div>
      </div>
    </div>
  );
};
