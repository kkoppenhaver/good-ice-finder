import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-ice-blue to-ice-cyan rounded-lg flex items-center justify-center">
            <MapPin className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Good Ice Map
          </span>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="hidden md:inline-flex">
            How It Works
          </Button>
          <Button variant="ghost" className="hidden md:inline-flex">
            Find Locations
          </Button>
          <Button variant="hero">Sign Up</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
