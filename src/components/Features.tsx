import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Target, 
  Award, 
  Clock, 
  BookOpen, 
  Handshake,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const Features = () => {
  const studentFeatures = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Micro-Internships",
      description: "Short-term, project-based opportunities that fit your schedule"
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Skill Development",
      description: "Learn by doing real work for actual organizations"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Verified Certificates",
      description: "Earn certificates that showcase your real-world experience"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Flexible Timeline",
      description: "Complete tasks on your own schedule around your studies"
    }
  ];

  const employerFeatures = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Pre-screened Talent",
      description: "Access motivated students ready to contribute to your mission"
    },
    {
      icon: <Handshake className="w-6 h-6" />,
      title: "Simple Process",
      description: "Post tasks, review applications, and get results efficiently"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Project-Based Work",
      description: "Get specific tasks completed without long-term commitments"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Quality Assured",
      description: "Our platform ensures deliverables meet your standards"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why Choose Hands-On Hub?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're bridging the gap between education and employment with real opportunities for growth
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* For Students */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">For Students</h3>
            </div>
            
            <div className="space-y-6">
              {studentFeatures.map((feature, index) => (
                <Card key={index} className="p-6 hover:shadow-elegant transition-smooth border-border/50">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                      <div className="text-primary">{feature.icon}</div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h4>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            
            <Button variant="hero" className="mt-8 w-full sm:w-auto">
              Start Your Journey
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* For Employers */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                <Handshake className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">For Employers</h3>
            </div>
            
            <div className="space-y-6">
              {employerFeatures.map((feature, index) => (
                <Card key={index} className="p-6 hover:shadow-elegant transition-smooth border-border/50">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center shrink-0">
                      <div className="text-secondary">{feature.icon}</div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h4>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            
            <Button variant="secondary" className="mt-8 w-full sm:w-auto">
              Post a Project
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;