import { useState, useEffect } from "react";

// ? Api
import { getLocations } from "@/api/admin";

export function Locations() {
  const [locations, setLocations] = useState<Location[]>([]);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const result = await getLocations();

        if (result.success) {
          setLocations(result.content.locations);
        } else {
          console.error(result.content?.message);
        }
      } catch (err) {
        console.error(err.message);
      }
    };
    fetchLocations();
  }, []);

  return (
    <div>
      <h1 className="text-4xl mb-4">Locations List</h1>
      <div className="flex flex-col gap-y-4">
        {locations.map((location) => (
          <Location key={"adm-lc-" + location.id} {...location} />
        ))}
      </div>
    </div>
  );
}

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
  roomCount: number;
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
  roomCount,
}: Location) => {
  return (
    <div
      key={id}
      className="min-h-64 relative flex flex-row border rounded-xl gap-x-6 p-4"
    >
      <img
        src={imageUrl}
        alt={name}
        className="w-86 h-full object-cover rounded-xl"
      />
      <div className="flex flex-col justify-between">
        <div className="space-y-1">
          <h2 className="text-3xl">{name}</h2>
          <p>{description}</p>
        </div>
        <div className="space-y-1">
          <p className="">Location information</p>
          <div className="border-l-2 border-primary pl-2">
            <p className="text-sm">
              City: <span className="font-semibold">{city}</span>
            </p>
            <p className="text-sm">
              Address: <span className="font-semibold">{address}</span>
            </p>
            <p className="text-sm">
              Room Count: <span className="font-semibold">{roomCount}</span>
            </p>
            <p className="text-sm">
              Free Parking:{" "}
              <span className="font-semibold">
                {hasFreeParking ? "Yes" : "No"}
              </span>
            </p>
            <p className="text-sm">
              Wellness Center:{" "}
              <span className="font-semibold">
                {hasWellnessCenter ? "Yes" : "No"}
              </span>
            </p>
          </div>
        </div>
        <div className="absolute bg-primary text-background right-2 top-2 px-2 py-1 rounded-lg">
          {rating}
        </div>
      </div>
    </div>
  );
};
