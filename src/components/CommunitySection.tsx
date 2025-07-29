import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, MessageCircle, Calendar, Award } from "lucide-react";
import communityIcon from "@/assets/community-icon.jpg";

const CommunitySection = () => {
  const communityFeatures = [
    {
      icon: MessageCircle,
      title: "Support Forums",
      description: "Connect with other women, share experiences, and find support in our moderated community forums.",
      action: "Join Discussions"
    },
    {
      icon: Calendar,
      title: "Safety Workshops",
      description: "Attend virtual and in-person workshops on self-defense, digital safety, and emergency preparedness.",
      action: "View Schedule"
    },
    {
      icon: Award,
      title: "Mentorship Program",
      description: "Connect with experienced mentors who can guide you through safety planning and personal growth.",
      action: "Find a Mentor"
    },
    {
      icon: Users,
      title: "Local Groups",
      description: "Find and join local women's safety groups in your area for regular meetups and support.",
      action: "Find Groups"
    }
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      location: "New York",
      quote: "This community has been a lifeline for me. The support and resources have made me feel so much safer."
    },
    {
      name: "Maria L.",
      location: "California",
      quote: "The safety workshops taught me practical skills I use every day. Highly recommend to all women."
    },
    {
      name: "Emily R.",
      location: "Texas",
      quote: "Finding my local support group through this platform changed my life. I'm no longer afraid to go out alone."
    }
  ];

  return (
    <section id="community" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <img 
              src={communityIcon} 
              alt="Community Support" 
              className="w-20 h-20 rounded-full shadow-soft"
            />
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Join Our Community
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            You're not alone. Connect with thousands of women who support and empower each other.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {communityFeatures.map((feature, index) => (
            <Card key={index} className="hover:shadow-elegant transition-smooth">
              <CardContent className="p-6 text-center">
                <feature.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm">{feature.description}</p>
                <Button variant="outline" size="sm">{feature.action}</Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-background rounded-2xl p-8 shadow-soft">
          <h3 className="text-2xl font-bold text-center mb-8">What Our Community Says</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-primary/20">
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Button variant="hero" size="lg" className="px-8">
            Join Our Community Today
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Free to join • Safe space • 24/7 support available
          </p>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;