import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Shield, MapPin, Users } from "lucide-react";
import emergencyIcon from "@/assets/emergency-icon.jpg";

const EmergencySection = () => {
  const emergencyContacts = [
    { name: "Police Emergency", number: "911", description: "Immediate danger" },
    { name: "National Domestic Violence Hotline", number: "1-800-799-7233", description: "24/7 confidential support" },
    { name: "Crisis Text Line", number: "Text HOME to 741741", description: "Text-based crisis support" },
    { name: "Women's Safety Helpline", number: "1-800-SAFE-NOW", description: "Specialized women's support" }
  ];

  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <img 
              src={emergencyIcon} 
              alt="Emergency Support" 
              className="w-20 h-20 rounded-full shadow-soft"
            />
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Emergency Resources
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Quick access to emergency contacts and crisis support. Help is always available.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {emergencyContacts.map((contact, index) => (
            <Card key={index} className="hover:shadow-elegant transition-smooth">
              <CardContent className="p-6 text-center">
                <Phone className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">{contact.name}</h3>
                <p className="text-2xl font-bold text-primary mb-2">{contact.number}</p>
                <p className="text-sm text-muted-foreground">{contact.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-6 text-center">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Safe Spaces</h3>
              <p className="text-muted-foreground mb-4">
                Find nearby safe locations, police stations, and women's shelters.
              </p>
              <Button variant="outline">Find Locations</Button>
            </CardContent>
          </Card>

          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-6 text-center">
              <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Share Location</h3>
              <p className="text-muted-foreground mb-4">
                Instantly share your location with trusted contacts in emergencies.
              </p>
              <Button variant="outline">Set Up Contacts</Button>
            </CardContent>
          </Card>

          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-6 text-center">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Support Network</h3>
              <p className="text-muted-foreground mb-4">
                Connect with local support groups and safety networks.
              </p>
              <Button variant="outline">Join Network</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EmergencySection;