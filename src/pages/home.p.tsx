import { Link } from "react-router-dom";

// ? Icons
import { Shield, Flower } from "lucide-react";

// ? Components
import { Button } from "@/components/ui/button";

export function Home(): React.ReactNode {
  return (
    <div className="overflow-hidden">
      <div>
        <h2 className="text-4xl text-center p-6">
          Explore Thousands of Unique Stays
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-8 p-6">
          {[
            "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1200&q=80",
          ].map((src, i) => (
            <div
              key={i}
              style={{ backgroundImage: `url(${src})` }}
              className={
                "h-94 md:h-146 min-w-auto w-full bg-cover bg-center rounded-2xl" +
                (i === 1 ? " md:min-w-186" : " md:min-w-156")
              }
            ></div>
          ))}
        </div>
      </div>
      <div className="min-h-124 bg-primary flex items-center justify-center rounded-4xl p-6">
        <div className="max-w-5xl w-full flex flex-col gap-y-6">
          <h1 className="text-background text-xl sm:text-3xl md:text-5xl text-center">
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
        <h2 className="text-4xl text-center p-6 pb-0">
          Discover the World th Wilde Way
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-8 p-6">
          {[
            "https://cdn.outsideonline.com/wp-content/uploads/2024/04/explorers-way-australia-1024x576.jpg?width=2048&auto=webp&quality=75&fit=cover",
            "https://www.baileyofbristol.co.uk/wp-content/smush-webp/2022/04/FOA-1.jpg.webp",
            "https://scenicdrives.eu/wp-content/uploads/2014/04/scenic-drives-dingle-conor-pass-ireland-wild-atlantic-way-0423.jpg",
          ].map((src, i) => (
            <div
              key={i}
              style={{ backgroundImage: `url(${src})` }}
              className={
                "h-94 md:h-146 min-w-auto w-full bg-cover bg-center rounded-2xl" +
                (i === 1 ? " md:min-w-186" : " md:min-w-156")
              }
            ></div>
          ))}
        </div>
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
      <div className="min-h-86 flex flex-col justify-center text-center text-4xl p-6">
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
