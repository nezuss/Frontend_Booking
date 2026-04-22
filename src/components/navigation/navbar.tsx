import { useState } from "react";
import { Link } from "react-router-dom";

// ? Components
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Navbar(): React.ReactNode {
  const [activeService, setActiveService] = useState<number>(0);
  const listOfServices = ["Accommodation", "Car rental", "Planes", "Taxis"];

  return (
    <div className="flex flex-col items-center">
      <nav className="w-full bg-primary text-background flex justify-center px-8 pt-4 pb-14">
        <div className="max-w-5xl w-full flex flex-col gap-y-6">
          <div className="flex justify-between items-center">
            <div>
              <Link to="/">
                <h2 className="text-3xl font-bold">Booking.com</h2>
              </Link>
            </div>
            <div className="space-x-4">
              <Link to="/auth/register">
                <Button variant="ghost">Sign Up</Button>
              </Link>
              <Link to="/auth/login">
                <Button variant="outline" className="border-0 text-foreground">
                  Sign In
                </Button>
              </Link>
            </div>
          </div>
          <div className="space-x-4">
            {listOfServices.map((service, index) => (
              <Button
                key={index}
                variant={index === activeService ? "outline" : "ghost"}
                size="lg"
                className={
                  "text-lg" +
                  (index === activeService ? " text-foreground" : "")
                }
                onClick={() => setActiveService(index)}
              >
                {service}
              </Button>
            ))}
          </div>
        </div>
      </nav>
      <div className="max-w-5xl w-full flex flex-col gap-y-6">
        <div className="bg-background flex flex-row items-center border gap-x-2 p-4 rounded-2xl -translate-y-8">
          <Input
            className="bg-foreground/3 text-foreground"
            type="text"
            placeholder="Where do you want to go?"
          />
          <Input
            className="bg-foreground/3 text-foreground"
            type="text"
            placeholder="Specify a name"
          />
          <Input
            className="bg-foreground/3 text-foreground"
            type="number"
            placeholder="Specify a rating"
            max={5}
            min={1}
          />
          <Button>Search</Button>
        </div>
      </div>
    </div>
  );
}
