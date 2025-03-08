
import { Zap, Github, Twitter } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-12 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <NavLink to="/" className="flex items-center gap-2 mb-4">
              <Zap className="w-6 h-6 text-primary" />
              <span className="font-display font-bold text-xl">ElectriVision</span>
            </NavLink>
            <p className="text-muted-foreground max-w-md mb-6">
              Visualize and understand electricity concepts through interactive and intuitive visual representations.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center hover:bg-secondary/70 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center hover:bg-secondary/70 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Explore</h3>
            <ul className="space-y-3">
              <li>
                <NavLink 
                  to="/" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/concepts" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Electricity Concepts
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/about" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  About
                </NavLink>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Electrical Glossary
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Learning Path
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} ElectriVision. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a 
              href="#" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </a>
            <a 
              href="#" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
