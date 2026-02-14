import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Calendar, MapPin, Award, BookOpen, Code } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Computer Application (BCA)",
    institution: "New Summit College",
    university: "Tribhuvan University",
    location: "Nepal",
    duration: "2023 - Present",
    status: "In Progress",
    description:
      "Currently pursuing BCA with focus on software development, database management, and web technologies. Actively participating in coding workshops and hackathons.",
    highlights: [
      "Core courses: Programming, Data Structures, DBMS, Web Development",
      "Active member of the coding club",
      "Participated in inter-college tech events",
    ],
    color: "from-blue-500/20 to-purple-500/20",
    icon: Code,
  },
  {
    degree: "Higher Secondary Education (+2)",
    institution: "DAV College",
    location: "Nepal",
    duration: "2021 - 2023",
    status: "Completed",
    description:
      "Completed higher secondary education in Management Stream taking business as major. Developed an interest in designing during this time.",
    highlights: [
      "Major: Management with Business as major",

    ],
    color: "from-green-500/20 to-teal-500/20",
    icon: BookOpen,
  },
];

const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-20 lg:py-32 relative bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 text-primary font-mono text-sm mb-4 px-4 py-2 rounded-full border border-primary/20 bg-primary/5"
            >
              <GraduationCap size={16} />
              04. Education
            </motion.div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white">
              Academic Journey
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My educational background that has shaped my technical knowledge
              and problem-solving abilities.
            </p>
          </div>

          <div className="relative">
            {/* Grid Layout */}
            <div className="grid md:grid-cols-2 gap-8">
              {education.map((edu, index) => {
                const IconComponent = edu.icon;
                return (
                  <motion.div
                    key={edu.degree}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="relative"
                  >
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      transition={{ duration: 0.3 }}
                      className={`glass-card p-6 rounded-xl border-2 border-primary/30 hover:border-primary transition-all duration-300 relative overflow-hidden group h-full`}
                    >
                      {/* Animated Gradient Background */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${edu.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                      
                      {/* Status Badge */}
                      <div className="absolute top-4 right-4 z-10">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          edu.status === "In Progress" 
                            ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                            : "bg-green-500/20 text-green-400 border border-green-500/30"
                        }`}>
                          {edu.status}
                        </span>
                      </div>

                      <div className="relative z-10">
                        <div className="flex items-start gap-3 mb-4 pr-24">
                          <motion.div
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                            className="p-2 rounded-lg bg-primary/10 border border-primary/20"
                          >
                            <IconComponent className="w-6 h-6 text-primary" />
                          </motion.div>
                          <div className="flex-1">
                            <h3 className="text-xl font-semibold text-foreground mb-1">
                              {edu.degree}
                            </h3>
                            <p className="text-primary font-medium flex items-center gap-2">
                              <Award size={14} />
                              {edu.institution}
                            </p>
                            {edu.university && (
                              <p className="text-xs text-muted-foreground mt-1">
                                Affiliated to {edu.university}
                              </p>
                            )}
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-muted/50">
                            <Calendar size={14} />
                            {edu.duration}
                          </span>
                          <span className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-muted/50">
                            <MapPin size={14} />
                            {edu.location}
                          </span>
                        </div>

                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {edu.description}
                        </p>

                        <div className="space-y-2">
                          {edu.highlights.map((highlight, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              animate={isInView ? { opacity: 1, x: 0 } : {}}
                              transition={{ delay: index * 0.2 + i * 0.1 + 0.5 }}
                              className="flex items-start gap-3 text-sm text-muted-foreground group/item"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0 group-hover/item:scale-150 transition-transform" />
                              <span className="group-hover/item:text-foreground transition-colors">
                                {highlight}
                              </span>
                            </motion.li>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
