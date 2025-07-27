import { Card } from "@/components/ui/card";
import { ArrowRight, UserPlus, Search, FileText, CheckCircle, Award } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: <UserPlus className="w-8 h-8" />,
      title: "Create Your Profile",
      description: "Sign up and tell us about your skills, interests, and career goals",
      color: "primary"
    },
    {
      number: "02", 
      icon: <Search className="w-8 h-8" />,
      title: "Browse Opportunities",
      description: "Explore micro-internships that match your skills and schedule",
      color: "secondary"
    },
    {
      number: "03",
      icon: <FileText className="w-8 h-8" />,
      title: "Apply & Get Selected",
      description: "Submit your application and get matched with the perfect project",
      color: "accent"
    },
    {
      number: "04",
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Complete the Work",
      description: "Work on real projects with guidance and support from mentors",
      color: "secondary"
    },
    {
      number: "05",
      icon: <Award className="w-8 h-8" />,
      title: "Earn Recognition",
      description: "Receive verified certificates and build your professional portfolio",
      color: "primary"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From application to certification, we've made it simple to gain real-world experience
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="p-6 text-center hover:shadow-elegant transition-smooth border-border/50 relative z-10">
                  <div className="mb-4">
                    <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 ${
                      step.color === 'primary' ? 'bg-primary/10 text-primary' :
                      step.color === 'secondary' ? 'bg-secondary/10 text-secondary' :
                      'bg-accent/10 text-accent'
                    }`}>
                      {step.icon}
                    </div>
                    <div className={`text-4xl font-bold mb-2 ${
                      step.color === 'primary' ? 'text-primary' :
                      step.color === 'secondary' ? 'text-secondary' :
                      'text-accent'
                    }`}>
                      {step.number}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </Card>

                {/* Arrow between steps - hidden on mobile and last item */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                    <ArrowRight className="w-6 h-6 text-muted-foreground/50" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile arrows */}
          <div className="lg:hidden flex justify-center mt-8">
            <div className="flex flex-col items-center space-y-4">
              {Array.from({ length: steps.length - 1 }).map((_, index) => (
                <ArrowRight key={index} className="w-6 h-6 text-muted-foreground/50 rotate-90" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;