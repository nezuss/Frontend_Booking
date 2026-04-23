import { useState } from "react";

// ? Layouts
import { NavbarLayout } from "@/layouts/navigations/navbar.l";

// ? Components
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Navbar(): React.ReactNode {
  const [activeService, setActiveService] = useState<number>(0);
  const listOfServices = ["Accommodation", "Car rental", "Planes", "Taxis"];

  return (
    <NavbarLayout
      childrenOutside={
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
      }
    >
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
