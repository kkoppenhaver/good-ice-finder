import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Heart, Camera, Search, Star, Users } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Search,
      title: "Discover Locations",
      description: "Find gas stations, convenience stores, and restaurants with the best nugget ice near you.",
      gradient: "from-primary to-accent",
    },
    {
      icon: Camera,
      title: "Submit with Photos",
      description: "Share your finds with the community. Upload photos to help others identify good ice spots.",
      gradient: "from-accent to-secondary",
    },
    {
      icon: Heart,
      title: "Save Favorites",
      description: "Keep track of your go-to ice spots. Build your personal collection of the best locations.",
      gradient: "from-secondary to-primary",
    },
    {
      icon: MapPin,
      title: "Interactive Map",
      description: "Browse an interactive map to find the perfect ice locations wherever you are.",
      gradient: "from-primary to-secondary",
    },
    {
      icon: Star,
      title: "Community Ratings",
      description: "Rate and review locations to help fellow ice enthusiasts find the best spots.",
      gradient: "from-accent to-primary",
    },
    {
      icon: Users,
      title: "Join the Community",
      description: "Connect with thousands of nugget ice fans who share your passion for the perfect chew.",
      gradient: "from-secondary to-accent",
    },
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background to-ice-light/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Everything You Need to Find
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Perfect Ice
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Built by ice lovers, for ice lovers. Discover, share, and save the best nugget ice locations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-6 space-y-4">
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.gradient} flex items-center justify-center`}
                >
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
