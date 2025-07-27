import { Separator } from "@/components/ui/separator";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">H</span>
              </div>
              <span className="text-xl font-bold text-foreground">Hands-On Hub</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Bridging the gap between education and employment through meaningful micro-internships.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* For Students */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">For Students</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-smooth">Browse Opportunities</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-smooth">How It Works</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-smooth">Success Stories</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-smooth">FAQ</a></li>
            </ul>
          </div>

          {/* For Organizations */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">For Organizations</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-smooth">Post a Project</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-smooth">Pricing</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-smooth">Partner Program</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-smooth">Resources</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-smooth">Help Center</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-smooth">Contact Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-smooth">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-smooth">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Hands-On Hub. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground mt-2 md:mt-0">
            Made with ❤️ for the next generation of professionals
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;