import { useState } from "react";

// ? Layouts
import { NavbarLayout } from "@/layouts/navigations/navbar.l";

// ? Components
import { Button } from "@/components/ui/button";

export function NavbarClient(): React.ReactNode {
  const [activeService, setActiveService] = useState<number>(0);
  const listOfServices = ["My reservations"];

  return (
    <NavbarLayout className="mb-6">
      <div className="space-x-4">
        {listOfServices.map((service, index) => (
          <Button
            key={"cl-nb-" + index}
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
