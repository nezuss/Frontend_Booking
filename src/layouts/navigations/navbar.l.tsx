import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// ? Hooks
import { useAdminNavbar } from "@/context/admin-navbar.c";
import { useUserInfoNavbar } from "@/context/user-info-navbar.c";

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
  const { setActiveMenu } = useAdminNavbar();
  const { user } = useUserInfoNavbar();

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
          <div className="flex flex-col md:flex-row justify-between items-center gap-y-2">
            <div>
              <Link to="/">
                <h2 className="text-3xl font-bold">Booking.com</h2>
              </Link>
            </div>
            <div className="space-x-4">
              {user !== undefined && user !== null ? (
                <div className="flex items-center gap-x-2">
                  <p>{user?.email}</p>
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <Avatar>
                        <AvatarFallback>
                          {user?.name.charAt(0).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="mr-8">
                      {user?.role === "admin" && (
                        <>
                          <DropdownMenuGroup>
                            <DropdownMenuLabel>
                              Administrative
                            </DropdownMenuLabel>
                            <Link to="/a" onClick={() => setActiveMenu(0)}>
                              <DropdownMenuItem>Dashboard</DropdownMenuItem>
                            </Link>
                            <Link
                              to="/a/reservations"
                              onClick={() => setActiveMenu(1)}
                            >
                              <DropdownMenuItem>Reservations</DropdownMenuItem>
                            </Link>
                            <Link
                              to="/a/locations"
                              onClick={() => setActiveMenu(2)}
                            >
                              <DropdownMenuItem>Locations</DropdownMenuItem>
                            </Link>
                          </DropdownMenuGroup>
                          <DropdownMenuSeparator />
                        </>
                      )}
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
