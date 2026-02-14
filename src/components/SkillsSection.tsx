import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Braces, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code2,
    color: "from-blue-500/20 to-cyan-500/20",
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS"],
  },
  {
    title: "Programming",
    icon: Braces,
    color: "from-purple-500/20 to-pink-500/20",
    skills: ["Java", "OOP Concepts", "PHP", "C#", "Python"],
  },
  {
    title: "Tools & Others",
    icon: Wrench,
    color: "from-orange-500/20 to-red-500/20",
    skills: ["Git & GitHub", "VS Code", "REST APIs", "Node.js", "MongoDB"],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 lg:py-32 relative bg-secondary/30">
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
              02. Skills
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              My Technical Skills
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Here are the technologies I've been working with and continuously
              learning to improve my craft.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => {
              const IconComponent = category.icon;
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: categoryIndex * 0.15 }}
                  className="glass-card p-6 rounded-xl relative overflow-hidden group hover:border-primary/50 transition-all duration-300"
                >
                  {/* Background gradient on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="p-2 rounded-lg bg-primary/10 border border-primary/20"
                      >
                        <IconComponent className="w-6 h-6 text-primary" />
                      </motion.div>
                      <h3 className="text-xl font-semibold gradient-text">
                        {category.title}
                      </h3>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.span
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{
                            duration: 0.3,
                            delay: categoryIndex * 0.15 + skillIndex * 0.05,
                          }}
                          whileHover={{ scale: 1.05, y: -2 }}
                          className="px-3 py-1.5 rounded-lg bg-secondary/50 border border-border/50 text-sm font-medium text-foreground hover:border-primary/50 hover:bg-primary/10 transition-all duration-200 cursor-default"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
