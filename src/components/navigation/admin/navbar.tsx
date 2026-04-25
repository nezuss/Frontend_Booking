import { Link } from "react-router-dom";

// ? Hooks
import { useAdminNavbar } from "@/context/admin-navbar.c";

// ? Layouts
import { NavbarLayout } from "@/layouts/navigations/navbar.l";

// ? Components
import { Button } from "@/components/ui/button";

export function NavbarAdmin(): React.ReactNode {
  const { activeMenu, setActiveMenu } = useAdminNavbar();
  const listOfServices = [
    {
      name: "Dashboard",
      path: "/a/",
    },
    {
      name: "Reservations",
      path: "/a/reservations",
    },
    {
      name: "Locations",
      path: "/a/locations",
    },
  ];

  return (
    <NavbarLayout className="mb-6">
      <div className="space-x-4">
        {listOfServices.map((service, index) => (
          <Link key={index} to={service.path}>
            <Button
              key={index}
              variant={index === activeMenu ? "outline" : "ghost"}
              size="lg"
              className={
                "text-lg" + (index === activeMenu ? " text-foreground" : "")
              }
              onClick={() => setActiveMenu(index)}
            >
              {service.name}
            </Button>
          </Link>
        ))}
      </div>
    </NavbarLayout>
  );
}
