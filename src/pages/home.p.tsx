import { Link } from "react-router-dom";

// ? Icons
import { Shield, Flower } from "lucide-react";

// ? Components
import { Button } from "@/components/ui/button";

export function Home(): React.ReactNode {
  return (
    <div>
      <div>
        <h2 className="text-4xl text-center p-6">
          Explore Thousands of Unique Stays
        </h2>
      </div>
      <div className="min-h-124 bg-primary flex items-center justify-center rounded-4xl p-6">
        <div className="max-w-5xl w-full flex flex-col gap-y-6">
          <h1 className="text-background text-5xl text-center">
            Escape the ordinary.
            <br />
            Explore thousands of unique stays worldwide. Whether it's a coastal
            retreat or a mountain hideaway, find your perfect escape in just a
            few clicks.
            <br />
            Book your peace of mind.
          </h1>
        </div>
      </div>
      <div>
        <h2 className="text-4xl text-center p-6">
          Discover the World th Wilde Way
        </h2>
      </div>
      <div className="bg-primary rounded-4xl p-6">
        <h2 className="text-background text-4xl text-center p-6">
          Filled with Features
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
          {[
            {
              iconUrl:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrRt9HlasHT33O509ianCNR3CM574Eq04QEg&s",
              title: "Safe and Secure",
              icon: <Shield />,
            },
            {
              iconUrl:
                "https://draperandkramer.com/wp-content/uploads/2023/11/insights-smart-decor-ideas-for-creating-a-cozy-apartment-dk_20231129_header-image.png",
              title: "Cozy Environment",
              icon: <Flower />,
            },
          ].map((item, id) => (
            <div key={id} className="space-y-4">
              <div
                style={{ backgroundImage: `url(${item.iconUrl})` }}
                className="h-76 w-64 bg-cover bg-center rounded-2xl"
              />
              <p className="flex items-center text-background justify-center text-2xl gap-x-2">
                {item.icon} {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="h-86 flex flex-col justify-center text-center text-4xl p-6">
        <h1>Don't Wait - Start Booking Now</h1>
        <p className="space-y-6">
          Take advantage of our best booking experience.
          <br />
          <Link to="/locations">
            <Button className="text-3xl py-6 px-8 rounded-full">
              Book Now
            </Button>
          </Link>
        </p>
      </div>
    </div>
  );
}
