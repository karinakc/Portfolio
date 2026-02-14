import { Github, Linkedin, Mail, Heart, Code2 } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {/* Brand */}
            <div>
              <h3 className="text-lg font-semibold mb-4 gradient-text">Karina KC</h3>
              <p className="text-sm text-muted-foreground">
                Web Developer & BCA Student
              </p>
            </div>

            {/* Links */}
            <div>
              <h3 className="text-base font-semibold mb-4">Quick Links</h3>
              <div className="flex flex-col gap-2 md:flex-row md:gap-6">
                <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About
                </a>
                <a href="#skills" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Skills
                </a>
                <a href="#projects" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Projects
                </a>
                <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </a>
              </div>
            </div>

            {/* Connect */}
            <div>
              <h3 className="text-base font-semibold mb-4">Connect With Me</h3>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/karinakc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/karina-kc-b522b035b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="mailto:kckarina2055@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Email"
                >
                  <Mail size={18} />
                </a>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                📍 Kathmandu, Nepal
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-border mt-6 pt-4">
            <p className="text-sm text-center text-muted-foreground">
              © {currentYear} Karina KC. Made with passion.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
