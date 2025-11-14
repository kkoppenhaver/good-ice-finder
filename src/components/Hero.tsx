import { Button } from "@/components/ui/button";
import { MapPin, Search } from "lucide-react";
import heroImage from "@/assets/hero-ice.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Perfect nugget ice"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/85 to-background/95"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-ice-light/50 backdrop-blur-sm rounded-full border border-primary/20 mb-6">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">
              Discover the Best Chewable Ice Near You
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Find Your Perfect
            <span className="block bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%]">
              Nugget Ice
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            The ultimate directory for gas stations, convenience stores, and restaurants
            serving the good ice—soft, chewable, and absolutely perfect.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button size="lg" variant="hero" className="text-lg px-8 py-6 h-auto">
              <Search className="w-5 h-5 mr-2" />
              Find Good Ice Now
            </Button>
            <Button size="lg" variant="heroOutline" className="text-lg px-8 py-6 h-auto">
              <MapPin className="w-5 h-5 mr-2" />
              Submit a Location
            </Button>
          </div>

          <div className="pt-8 flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span>1,000+ Locations</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
              <span>Community Verified</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
              <span>Always Free</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
