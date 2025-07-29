import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Home, Car, Smartphone, Users } from "lucide-react";
import safetyIcon from "@/assets/safety-tips-icon.jpg";

const SafetyTips = () => {
  const tipCategories = [
    {
      icon: Home,
      title: "Home Safety",
      tips: [
        "Always lock doors and windows",
        "Install security cameras or doorbell cameras",
        "Don't open doors to strangers",
        "Have a safety plan for emergencies",
        "Keep emergency numbers easily accessible"
      ]
    },
    {
      icon: Car,
      title: "Transportation",
      tips: [
        "Share ride details with trusted contacts",
        "Sit behind the driver in ride-shares",
        "Keep car doors locked while driving",
        "Trust your instincts about drivers",
        "Have alternative transportation options"
      ]
    },
    {
      icon: Smartphone,
      title: "Digital Safety",
      tips: [
        "Use strong, unique passwords",
        "Enable two-factor authentication",
        "Be cautious about sharing location",
        "Review privacy settings regularly",
        "Report cyberbullying or harassment"
      ]
    },
    {
      icon: Users,
      title: "Social Situations",
      tips: [
        "Tell someone where you're going",
        "Stay with trusted friends",
        "Watch your drink at all times",
        "Have an exit strategy",
        "Trust your gut feelings"
      ]
    }
  ];

  return (
    <section id="safety-tips" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <img 
              src={safetyIcon} 
              alt="Safety Tips" 
              className="w-20 h-20 rounded-full shadow-soft"
            />
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Essential Safety Tips
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Practical advice and strategies to help you stay safe in various situations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tipCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-elegant transition-smooth">
              <CardHeader className="text-center pb-4">
                <category.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {category.tips.map((tip, tipIndex) => (
                    <div key={tipIndex} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">{tip}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-primary/5 rounded-2xl p-8 border border-primary/20">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Remember: Trust Your Instincts
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              If something feels wrong, it probably is. Your intuition is a powerful safety tool. 
              Don't worry about being polite if it means compromising your safety.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-2">
            <Badge variant="secondary" className="px-4 py-2">Be Alert</Badge>
            <Badge variant="secondary" className="px-4 py-2">Stay Connected</Badge>
            <Badge variant="secondary" className="px-4 py-2">Plan Ahead</Badge>
            <Badge variant="secondary" className="px-4 py-2">Trust Yourself</Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafetyTips;