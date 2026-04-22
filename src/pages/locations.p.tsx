import { Star } from "lucide-react";

// ? Components
import { Button } from "@/components/ui/button";

export function Locations(): React.ReactNode {
  return (
    <div className="flex flex-col items-center">
      <div className="max-w-5xl w-full flex flex-col gap-y-6">
        <Location
          id={1}
          name="Location 1"
          city="City 1"
          address="Address 1"
          description="Description 1"
          rating={4}
          hasFreeParking={true}
          hasWellnessCenter={false}
          imageUrl="https://cf.bstatic.com/xdata/images/hotel/max1024x768/505611856.jpg?k=df5500b856bdf612013310eee2e201e323fc1b4d74574009f0b965cc98793bfe&o="
          onClick={() => {}}
        />
        <Location
          id={2}
          name="Location 2"
          city="City 2"
          address="Address 2"
          description="Description 2"
          rating={5}
          hasFreeParking={false}
          hasWellnessCenter={true}
          imageUrl="https://cf.bstatic.com/xdata/images/hotel/max1024x768/505611856.jpg?k=df5500b856bdf612013310eee2e201e323fc1b4d74574009f0b965cc98793bfe&o="
          onClick={() => {}}
        />
      </div>
    </div>
  );
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
              {city} - {address}
            </p>
          </div>
          <p>{description}</p>
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
