import { useState } from "react";

// ? Layouts
import { NavbarLayout } from "@/layouts/navigations/navbar.l";

// ? Components
import { Button } from "@/components/ui/button";

export function NavbarAdmin(): React.ReactNode {
  const [activeService, setActiveService] = useState<number>(0);
  const listOfServices = ["Dashboard", "Reservations", "Locations"];

  return (
    <NavbarLayout className="mb-6">
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
    </NavbarLayout>
  );
}
