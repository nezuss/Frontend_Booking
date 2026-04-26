import { useState } from "react";
import { useNavigate } from "react-router-dom";

// ? Layouts
import { NavbarLayout } from "@/layouts/navigations/navbar.l";

// ? Components
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Navbar(): React.ReactNode {
  const [activeService, setActiveService] = useState<number>(0);
  const [place, setPlace] = useState<string>();
  const [name, setName] = useState<string>();
  const [rating, setRating] = useState<number>();
  const [error, setError] = useState<string>();
  const navigate = useNavigate();
  const listOfServices = ["Accommodation", "Car rental", "Planes", "Taxis"];

  const handleSearch = () => {
    if (rating && (rating < 1 || rating > 5)) {
      setError("Please enter a valid rating - number between 1 and 5");
      return;
    }

    setError("");
    navigate(
      `/locations?place=${place == undefined ? "" : place}&name=${name == undefined ? "" : name}&rating=${rating == undefined ? "" : rating}`,
    );
  };

  return (
    <NavbarLayout
      childrenOutside={
        <div className="max-w-5xl w-full flex flex-col gap-y-6">
          <div className="bg-background flex flex-col items-center border gap-y-2 p-4 rounded-2xl -translate-y-8">
            {error && <p className="text-red-500">{error}</p>}
            <div className="w-full flex flex-row items-center gap-x-2">
              <Input
                className="bg-foreground/3 text-foreground"
                type="text"
                placeholder="Where do you want to go?"
                onChange={(e) => setPlace(e.target.value)}
                value={place}
              />
              <Input
                className="bg-foreground/3 text-foreground"
                type="text"
                placeholder="Specify a name"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
              <Input
                className="bg-foreground/3 text-foreground"
                type="number"
                placeholder="Specify a rating"
                max={5}
                min={1}
                onChange={(e) => setRating(e.target.value)}
                value={rating}
              />
              <Button onClick={handleSearch}>Search</Button>
            </div>
          </div>
        </div>
      }
    >
      <div className="space-x-4">
        {listOfServices.map((service, index) => (
          <Button
            key={"mnb-lst-" + index}
            variant={index === activeService ? "outline" : "ghost"}
            size="lg"
            className={
              "text-lg" + (index === activeService ? " text-foreground" : "")
            }
            onClick={() => setActiveService(index)}
          >
            {service}
          </Button>
        ))}
      </div>
    </NavbarLayout>
  );
}
