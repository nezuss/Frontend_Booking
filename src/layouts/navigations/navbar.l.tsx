import { useState } from "react";
import { Link } from "react-router-dom";

// ? Components
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function NavbarLayout({
  children,
  childrenOutside,
  className,
}: {
  children?: React.ReactNode;
  childrenOutside?: React.ReactNode;
  className?: string;
}): React.ReactNode {
  const [authorized, setAuthorized] = useState(true);

  return (
    <div className="flex flex-col items-center">
      <nav
        className={
          "w-full bg-primary text-background flex justify-center px-8" +
          (childrenOutside ? " pt-4 pb-14" : " py-4") +
          (className ? ` ${className}` : "")
        }
      >
        <div className="max-w-5xl w-full flex flex-col gap-y-6">
          <div className="flex justify-between items-center">
            <div>
              <Link to="/">
                <h2 className="text-3xl font-bold">Booking.com</h2>
              </Link>
            </div>
            <div className="space-x-4">
              {authorized ? (
                <div className="flex items-center gap-x-2">
                  <p>testmail@nig.gga</p>
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <Avatar>
                        <AvatarFallback>U</AvatarFallback>
                      </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="mr-8">
                      <DropdownMenuGroup>
                        <DropdownMenuLabel>Administrative</DropdownMenuLabel>
                        <Link to="/a">
                          <DropdownMenuItem>Dashboard</DropdownMenuItem>
                        </Link>
                        <Link to="/a/reservations">
                          <DropdownMenuItem>Reservations</DropdownMenuItem>
                        </Link>
                        <Link to="/a/locations">
                          <DropdownMenuItem>Locations</DropdownMenuItem>
                        </Link>
                      </DropdownMenuGroup>
                      <DropdownMenuSeparator />
                      <DropdownMenuGroup>
                        <DropdownMenuLabel>Account</DropdownMenuLabel>
                        <Link to="/c/reservations">
                          <DropdownMenuItem>Reservations</DropdownMenuItem>
                        </Link>
                        <Link to="/auth/logout">
                          <DropdownMenuItem variant="destructive">
                            Logout
                          </DropdownMenuItem>
                        </Link>
                      </DropdownMenuGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  {/*<Button variant="ghost">Logout</Button>*/}
                </div>
              ) : (
                <>
                  <Link to="/auth/register">
                    <Button variant="ghost">Sign Up</Button>
                  </Link>
                  <Link to="/auth/login">
                    <Button
                      variant="outline"
                      className="border-0 text-foreground"
                    >
                      Sign In
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </div>
          {children}
        </div>
      </nav>
      {childrenOutside}
    </div>
  );
}
