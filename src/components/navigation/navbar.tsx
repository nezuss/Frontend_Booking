import { useState } from "react";
import { Link } from "react-router-dom";

// ? Components
import { Button } from "@/components/ui/button";

export function Navbar(): React.ReactNode {
  const [activeService, setActiveService] = useState<number>(0);
  const listOfServices = ["Accommodation", "Car rental", "Planes", "Taxis"];

  return (
    <nav className="w-full bg-primary text-background flex justify-center px-8 py-4">
      <div className="max-w-5xl w-full flex flex-col gap-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold">Booking.com</h2>
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
                "text-lg" + (index === activeService ? " text-foreground" : "")
              }
              onClick={() => setActiveService(index)}
            >
              {service}
            </Button>
          ))}
        </div>
      </div>
    </nav>
  );
}
