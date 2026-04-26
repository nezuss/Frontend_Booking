import { useState, useEffect } from "react";

// ? Api
import {
  getLocations,
  createLocation,
  deleteLocation,
  updateLocation,
} from "@/api/admin";

// ? Components
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";

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

  const handleCreateOrUpdate = async (
    data: Omit<Location, "id">,
    id?: number,
  ) => {
    try {
      const result = id
        ? await updateLocation({ ...data, id })
        : await createLocation(data);

      console.log(result);

      if (result.success) {
        setLocations((prev) =>
          id
            ? prev.map((loc) => (loc.id === id ? result.content.location : loc))
            : [...prev, result.content.location],
        );
      } else {
        console.error(result.content?.message);
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  const handleDeleteLocation = async (id: number) => {
    try {
      const result = await deleteLocation(id);

      if (result.success) {
        setLocations(locations.filter((location) => location.id !== id));
      } else {
        console.error(result.content?.message);
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between">
        <h1 className="text-4xl mb-4">Locations List</h1>
        <LocationForm
          title={"Create Location"}
          label={"Create Location"}
          onSubmit={(data) => handleCreateOrUpdate(data)}
        />
      </div>
      <div className="flex flex-col gap-y-4">
        {locations.map((location) => (
          <Location
            key={"adm-lc-" + location.id}
            onUpdate={(data) => handleCreateOrUpdate(data, location.id)}
            onDelete={() => handleDeleteLocation(location.id)}
            {...location}
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
  onUpdate,
  onDelete,
}: Location & {
  onUpdate: (data: Omit<Location, "id">) => void;
  onDelete: () => void;
}) => {
  return (
    <div
      key={id}
      className="min-h-78 relative flex flex-col md:flex-row border rounded-xl gap-x-6 p-4"
    >
      <div
        className="min-w-64 md:min-w-86 min-h-64 bg-cover bg-center rounded-xl"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
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
        <div className="flex gap-x-2">
          <LocationForm
            title={"Update Location"}
            label={"Update"}
            initialData={{
              name: name,
              city: city,
              address: address,
              description: description,
              rating: rating,
              hasFreeParking: hasFreeParking,
              hasWellnessCenter: hasWellnessCenter,
              imageUrl: imageUrl,
              roomCount: roomCount,
            }}
            onSubmit={(data) => onUpdate(data)}
          />
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="destructive">Delete</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Are you absolutely sure?</DialogTitle>
                <DialogDescription>
                  Do you really want to delete this location? This action cannot
                  be undone.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter className="sm:justify-start">
                <DialogClose asChild>
                  <Button type="button" variant="secondary">
                    Cancel
                  </Button>
                </DialogClose>
                <DialogClose asChild>
                  <Button
                    type="button"
                    variant="destructive"
                    onClick={onDelete}
                  >
                    Delete
                  </Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
        <div className="absolute bg-primary text-background right-2 top-2 px-2 py-1 rounded-lg">
          {rating}
        </div>
      </div>
    </div>
  );
};

const LocationForm = ({
  initialData,
  onSubmit,
  title,
  label,
}: {
  initialData?: Omit<Location, "id">;
  title: string;
  label: string;
  onSubmit: (data: Omit<Location, "id">) => void;
}) => {
  const [formData, setFormData] = useState<Omit<Location, "id">>(
    initialData || {
      name: "",
      city: "",
      address: "",
      description: "",
      rating: 0,
      hasFreeParking: false,
      hasWellnessCenter: false,
      imageUrl: "",
      roomCount: 0,
    },
  );
  const [error, setError] = useState<string>();
  const [open, setOpen] = useState(false);

  const handleChange = (key: keyof Omit<Location, "id">, value: any) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.city || !formData.address) {
      setError("Name, city, address and rating are required");
      return;
    }
    if (formData.rating < 1 || formData.rating > 5) {
      setError("Rating must be between 1 and 5");
      return;
    }

    setOpen(false);
    setError("");
    onSubmit(formData);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>{label}</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {error && <p className="text-red-500">{error}</p>}
          <div className="flex flex-col gap-y-4 mt-2">
            <LocationFormField
              label="Image URL"
              value={formData.imageUrl}
              onChange={(e) => handleChange("imageUrl", e.target.value)}
              variant="input"
            />
            <LocationFormField
              label="Location Name"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              variant="input"
            />
            <LocationFormField
              label="City"
              value={formData.city}
              onChange={(e) => handleChange("city", e.target.value)}
              variant="input"
            />
            <LocationFormField
              label="Address"
              value={formData.address}
              onChange={(e) => handleChange("address", e.target.value)}
              variant="input"
            />
            <LocationFormField
              label="Description"
              value={formData.description}
              onChange={(e) => handleChange("description", e.target.value)}
              variant="input"
            />
            <LocationFormField
              label="Rating"
              value={formData.rating}
              onChange={(e) => handleChange("rating", e.target.value)}
              variant="input"
              type="number"
            />
            <LocationFormField
              label="Has free parking"
              value={formData.hasFreeParking}
              onChange={(checked) => handleChange("hasFreeParking", checked)}
              variant="checkbox"
            />
            <LocationFormField
              label="Has wellness center"
              value={formData.hasWellnessCenter}
              onChange={(checked) => handleChange("hasWellnessCenter", checked)}
              variant="checkbox"
            />
          </div>
        </DialogHeader>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Cancel
            </Button>
          </DialogClose>
          <Button type="button" onClick={handleSubmit}>
            {label}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

const LocationFormField = ({
  label,
  value,
  onChange,
  type = "text",
  variant = "input",
}: {
  label: string;
  value: string | number | boolean;
  onChange: (value: any) => void;
  type?: "text" | "number";
  variant?: "input" | "checkbox";
}) => {
  return (
    <div>
      <label className="block text-xs mb-1">{label}</label>
      {variant === "input" ? (
        <Input
          type={type}
          placeholder={label}
          value={value as string | number}
          onChange={onChange}
        />
      ) : (
        <Checkbox checked={value as boolean} onCheckedChange={onChange} />
      )}
    </div>
  );
};
