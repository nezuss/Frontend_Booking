import { useState, useEffect } from "react";

// ? Icons
import { Star } from "lucide-react";

// ? Api
import { search } from "@/api/search";

// ? Components
import { Button } from "@/components/ui/button";

export function Locations(): React.ReactNode {
  const [locations, setLocations] = useState<Location[]>([]);

  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const result = await search({});

        if (result.success) {
          setError("");
          setLocations(result.content.locations);
        } else {
          setError(result.content?.message);
        }
      } catch (err) {
        setError(err.message);
      }
    };
    fetchLocations();
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div className="max-w-5xl w-full flex flex-col gap-y-6">
        {locations.map((location) => (
          <Location
            key={location?.id}
            id={location?.id}
            name={location?.name}
            city={location?.city}
            address={location?.address}
            description={location?.description}
            rating={location?.rating}
            hasFreeParking={location?.hasFreeParking}
            hasWellnessCenter={location?.hasWellnessCenter}
            imageUrl={location?.imageUrl}
            onClick={() => {}}
          />
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
