import { Card, CardContent } from "@/components/ui/card";
import { Search, MapPin, Heart, Share2 } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Search Your Area",
      description: "Enter your location or browse the map to discover nearby spots with good ice.",
    },
    {
      number: "02",
      icon: MapPin,
      title: "Find the Perfect Spot",
      description: "Check ratings, photos, and reviews from the community to choose the best location.",
    },
    {
      number: "03",
      icon: Heart,
      title: "Save Your Favorites",
      description: "Create your personal collection of go-to ice spots for easy access anytime.",
    },
    {
      number: "04",
      icon: Share2,
      title: "Share Your Finds",
      description: "Help the community grow by submitting new locations with photos and details.",
    },
  ];

  return (
    <section className="py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Four simple steps to discover and share the best nugget ice locations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="relative border-border/50 bg-gradient-to-br from-card to-ice-light/20 hover:shadow-lg transition-all duration-300"
            >
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
                    <step.icon className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-6xl font-bold text-primary/10">{step.number}</span>
                </div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
