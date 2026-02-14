import { Github, Linkedin, Mail, Heart, Code2 } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* About */}
            <div>
              <h3 className="text-lg font-semibold mb-3 gradient-text">Karina KC</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                BCA Student & Aspiring Full-Stack Developer passionate about creating
                beautiful and functional web applications.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#skills" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#education" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Education
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Connect With Me</h3>
              <div className="flex items-center gap-4 mb-4">
                <a
                  href="https://github.com/karinakc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-200"
                  aria-label="GitHub"
                >
                  <Github size={22} />
                </a>
                <a
                  href="https://www.linkedin.com/in/karina-kc-b522b035b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-200"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={22} />
                </a>
                <a
                  href="mailto:kckarina2055@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-200"
                  aria-label="Email"
                >
                  <Mail size={22} />
                </a>
              </div>
              <p className="text-sm text-muted-foreground">
                📍 Kirtipur, Kathmandu, Nepal
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
