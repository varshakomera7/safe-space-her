import { Shield, Phone, Mail, MapPin, Facebook, Twitter, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-primary-glow" />
              <h3 className="text-2xl font-bold">SafeSpace</h3>
            </div>
            <p className="text-background/80">
              Empowering women with safety resources, community support, and emergency tools.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-background hover:bg-background/10">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background hover:bg-background/10">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background hover:bg-background/10">
                <Instagram className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#home" className="block text-background/80 hover:text-primary-glow transition-smooth">
                Home
              </a>
              <a href="#safety-tips" className="block text-background/80 hover:text-primary-glow transition-smooth">
                Safety Tips
              </a>
              <a href="#resources" className="block text-background/80 hover:text-primary-glow transition-smooth">
                Resources
              </a>
              <a href="#community" className="block text-background/80 hover:text-primary-glow transition-smooth">
                Community
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Emergency Contacts</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary-glow" />
                <span className="text-background/80">Police: 911</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary-glow" />
                <span className="text-background/80">Crisis Line: 741741</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary-glow" />
                <span className="text-background/80">Domestic Violence: 1-800-799-7233</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary-glow" />
                <span className="text-background/80">support@safespace.org</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary-glow" />
                <span className="text-background/80">Available Nationwide</span>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm text-background/60">
                24/7 Support Available
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-background/60 text-sm">
              © 2024 SafeSpace. All rights reserved. Your safety is our priority.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-background/60 hover:text-primary-glow text-sm transition-smooth">
                Privacy Policy
              </a>
              <a href="#" className="text-background/60 hover:text-primary-glow text-sm transition-smooth">
                Terms of Service
              </a>
              <a href="#" className="text-background/60 hover:text-primary-glow text-sm transition-smooth">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;