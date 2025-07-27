import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Sparkles, Users, Briefcase } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-8 border border-white/30">
            <Sparkles className="w-4 h-4" />
            Ready to get started?
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Your Future Starts
            <br />
            With Your Next Project
          </h2>

          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join thousands of students and organizations already building the future through hands-on experience.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-2xl mx-auto">
            <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-center">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">For Students</h3>
              <p className="text-white/80 text-sm mb-4">Start building real skills today</p>
              <Button variant="outline" className="bg-white text-primary border-white hover:bg-white/90 w-full">
                Join as Student
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Card>

            <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-center">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">For Organizations</h3>
              <p className="text-white/80 text-sm mb-4">Find talented, motivated students</p>
              <Button variant="outline" className="bg-white text-primary border-white hover:bg-white/90 w-full">
                Post a Project
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Card>
          </div>

          <div className="text-center">
            <p className="text-white/70 text-sm">
              Already have an account? 
              <a href="#" className="text-white hover:text-white/80 underline ml-1">Sign in here</a>
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-xl"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/5 rounded-full blur-lg"></div>
    </section>
  );
};

export default CTA;