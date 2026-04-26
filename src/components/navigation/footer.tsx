import { Link } from "react-router-dom";

interface MenuItem {
  label: string;
  href: string;
}

interface Menu {
  title: string;
  items: MenuItem[];
}

export function Footer(): React.ReactNode {
  const menus: Menu[] = [
    {
      title: "Test",
      items: [
        {
          label: "test",
          href: "test",
        },
        {
          label: "test",
          href: "test",
        },
        {
          label: "test",
          href: "test",
        },
        {
          label: "test",
          href: "test",
        },
      ],
    },
    {
      title: "test",
      items: [],
    },
  ];

  return (
    <footer className="w-full bg-secondary py-8 px-16 space-y-8 mt-8">
      <div className="grid grid-cols-6">
        {menus.map((menu, index) => (
          <div key={"cl-ft-" + index} className="space-y-4">
            <h3 className="text-xl font-semibold">{menu.title}</h3>
            <div className="space-y-2">
              {menu.items.map((item) => (
                <div key={item.label}>
                  <Link to={item.href}>{item.label}</Link>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <hr />
      <div className="flex justify-center">
        <p>
          <Link to="/" className="text-primary">
            Booking.com
          </Link>{" "}
          All rights reserved.
        </p>
      </div>
    </footer>
  );
}
