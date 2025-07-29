import { Button } from "@/components/ui/button";
import { Shield, Phone, Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold text-foreground">SafeSpace</h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#home" className="text-foreground hover:text-primary transition-smooth">
              Home
            </a>
            <a href="#safety-tips" className="text-foreground hover:text-primary transition-smooth">
              Safety Tips
            </a>
            <a href="#resources" className="text-foreground hover:text-primary transition-smooth">
              Resources
            </a>
            <a href="#community" className="text-foreground hover:text-primary transition-smooth">
              Community
            </a>
            <Button variant="emergency" size="sm" className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              Emergency
            </Button>
          </nav>
          
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;