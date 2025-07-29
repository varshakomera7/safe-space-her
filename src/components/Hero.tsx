import { Button } from "@/components/ui/button";
import { Shield, Phone, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-women-safety.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-hero">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Your Safety,
                <span className="text-primary block">Our Priority</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Empowering women with resources, support, and tools for personal safety. 
                Join our community of strong, supported women.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="emergency" size="lg" className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Emergency SOS
              </Button>
              <Button variant="hero" size="lg" className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Get Started
              </Button>
            </div>
            
            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span>24/7 Location Services</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="h-4 w-4 text-primary" />
                <span>Trusted by 10,000+ Women</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-elegant">
              <img 
                src={heroImage} 
                alt="Women supporting each other for safety"
                className="w-full h-auto object-cover animate-float"
              />
              <div className="absolute inset-0 bg-gradient-primary opacity-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;