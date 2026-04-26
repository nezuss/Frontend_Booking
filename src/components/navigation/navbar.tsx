import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";

// ? Icons
import { ChevronDownIcon } from "lucide-react";

// ? Hooks
import { useSearch } from "@/context/search.c";

// ? Layouts
import { NavbarLayout } from "@/layouts/navigations/navbar.l";

// ? Components
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function Navbar(): React.ReactNode {
  const [activeService, setActiveService] = useState<number>(0);
  const {
    checkIn,
    setCheckIn,
    checkOut,
    setCheckOut,
    search: place,
    setSearch: setPlace,
    guests,
    setGuests,
    error,
    findRooms,
  } = useSearch();

  const navigate = useNavigate();
  const listOfServices = ["Accommodation", "Car rental", "Planes", "Taxis"];

  return (
    <NavbarLayout
      childrenOutside={
        <div className="max-w-5xl w-full flex flex-col gap-y-6">
          <div className="bg-background flex flex-col items-center border gap-y-2 p-4 rounded-2xl -translate-y-8">
            {error && <p className="text-red-500">{error}</p>}
            <div className="w-full flex flex-col lg:flex-row items-center gap-2">
              <Input
                className="bg-foreground/3 text-foreground"
                type="text"
                placeholder="Where do you want to go?"
                onChange={(e) => setPlace(e.target.value)}
                value={place}
              />
              <Input
                className="bg-foreground/3 text-foreground"
                type="number"
                placeholder="How many people"
                onChange={(e) => setGuests(Number(e.target.value))}
                value={guests}
              />
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    data-empty={!checkIn}
                    className="w-full lg:w-auto min-w-48 bg-foreground/3 text-foreground justify-between text-left font-normal data-[empty=true]:text-muted-foreground"
                  >
                    {checkIn ? (
                      format(checkIn, "PPP")
                    ) : (
                      <span>Check-in date</span>
                    )}
                    <ChevronDownIcon data-icon="inline-end" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={checkIn}
                    onSelect={setCheckIn}
                    defaultMonth={checkIn}
                  />
                </PopoverContent>
              </Popover>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    data-empty={!checkOut}
                    className="w-full lg:w-auto min-w-48 bg-foreground/3 text-foreground justify-between text-left font-normal data-[empty=true]:text-muted-foreground"
                  >
                    {checkOut ? (
                      format(checkOut, "PPP")
                    ) : (
                      <span>Check-out date</span>
                    )}
                    <ChevronDownIcon data-icon="inline-end" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={checkOut}
                    onSelect={setCheckOut}
                    defaultMonth={checkOut}
                  />
                </PopoverContent>
              </Popover>
              <Button
                onClick={() => {
                  findRooms();
                  navigate("/locations");
                }}
                className="w-full lg:w-auto"
              >
                Search
              </Button>
            </div>
          </div>
        </div>
      }
    >
      <div className="flex flex-wrap justify-center md:justify-start gap-x-4">
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
