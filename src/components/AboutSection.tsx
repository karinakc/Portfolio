import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, GraduationCap, Lightbulb, Rocket } from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    title: "BCA Student",
    description: "Currently pursuing Bachelor of Computer Application",
  },
  {
    icon: Code2,
    title: "Web Developer",
    description: "Focused on modern frontend technologies",
  },
  {
    icon: Lightbulb,
    title: "Quick Learner",
    description: "Constantly learning and adapting to new technologies",
  },
  {
    icon: Rocket,
    title: "Project Builder",
    description: "Turning ideas into functional web applications",
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 lg:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <span className="text-primary font-mono text-sm mb-4 block">
              01. About Me
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Get to Know Me
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="space-y-6 text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  Hello! I'm a passionate <span className="text-foreground font-medium">BCA student</span> with a deep interest in web development. My journey into programming started with curiosity about how websites work, and it has evolved into a genuine passion for creating impactful digital experiences.
                </p>
                <p className="text-lg leading-relaxed">
                  I'm currently focusing on <span className="text-foreground font-medium">frontend development</span> with React while expanding my knowledge of the <span className="text-foreground font-medium">MERN stack</span>. I believe in learning by doing, which is why I'm constantly building projects to apply and solidify my skills.
                </p>
                <p className="text-lg leading-relaxed">
                  When I'm not coding, you'll find me exploring new technologies, reading about software architecture, or contributing to the developer community. I'm always open to new opportunities and collaborations!
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 gap-4"
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="glass-card p-6 rounded-xl hover:border-primary/50 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
