import { Link } from "react-router-dom";

// ? Icons
import { Globe, Heart, Users } from "lucide-react";

// ? Components
import { Button } from "@/components/ui/button";

export function AboutUs(): React.ReactNode {
  return (
    <div className="overflow-hidden">
      <div className="flex items-center justify-center p-6">
        <div className="max-w-5xl w-full flex flex-col gap-y-6">
          <h1 className="text-xl sm:text-3xl md:text-5xl text-center">
            About Us
          </h1>
          <p className="text-xl sm:text-3xl md:text-5xl text-center">
            Booking is all about making your dream trip a reality. Our goal is
            to link travelers with extraordinary accommodations and experiences
            worldwide. No matter if you want a relaxing home or a thrilling
            adventure, we will be the ones to organize your trip, stress-free
            and full of great memories.
          </p>
        </div>
      </div>
      <div className="min-h-94 flex items-center justify-center bg-primary rounded-4xl p-6">
        <div className="text-background p-6 space-y-8">
          <h2 className="text-xl sm:text-3xl md:text-5xl text-center">
            Our Values
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {[
              {
                icon: <Globe />,
                title: "Global Reach",
                description:
                  "Through us, you can access thousands of places all over the world, turning the earth into your very own playground.",
              },
              {
                icon: <Heart />,
                title: "Customer-Centric",
                description:
                  "We care deeply about your happiness and always aim to give you the best booking experience, completely customized to what you want.",
              },
              {
                icon: <Users />,
                title: "Community",
                description:
                  "By using our platform, you'll meet other travellers and hosts and form lifelong relationships.",
              },
            ].map((item, id) => (
              <div key={id} className="space-y-4 text-center  max-w-xs">
                <div className="flex justify-center *:size-14">{item.icon}</div>
                <h3 className="text-2xl font-semibold">{item.title}</h3>
                <p className="text-lg">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="min-h-86 flex flex-col justify-center text-center text-xl sm:text-3xl md:text-5xl p-6">
        <h1>Join Us on This Journey</h1>
        <p className="space-y-6">
          Join a worldwide network of adventurers and hosts.
          <br />
          <Link to="/contact">
            <Button className="text-3xl py-6 px-8 rounded-full">
              Contact Us
            </Button>
          </Link>
        </p>
      </div>
    </div>
  );
}
