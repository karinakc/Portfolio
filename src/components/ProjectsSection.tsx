import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, Folder, Palette, X } from "lucide-react";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import * as DialogPrimitive from "@radix-ui/react-dialog";

const projects = [
  {
    title: "Amazon Homepage Clone",
    description:
      "A simple front-end clone of the Amazon homepage built using only HTML and CSS. It features a responsive layout with a navigation bar, banner, product sections, and footer, closely replicating Amazon’s design.",
    techStack: ["HTML", "CSS"],
    github: "https://github.com/karinakc/Amazon-Clone",
    demo: null,
    featured: true,
    type: "development",
    image: null,
  },
  {
    title: "New-Summit-College Website",
    description: "A modern, responsive college website UI showcasing academic programs with interactive layouts and clean UX, built using React and Tailwind CSS.",
    techStack: ["React", "Tailwind CSS"],
    github: "https://github.com/karinakc/New-Summit-College",
    demo: "https://new-summit-college.vercel.app/",
    featured: true,
    type: "development",
    image: null,
  },


  {
    title: "ResiQuest-An-Online-Accommodation-Finder-System",
    description: "ResiQuest is a MERN-stack web app that helps users find rooms and hostels easily. Owners can post listings, renters can search using filters, and admins verify the information. Using MongoDB, React, and Node, the system is fast, secure, and easy to use.",
    techStack: ["React", "MongoDB", "Node.js", "Express"],
    github: "https://github.com/karinakc/ResiQuest-An-Online-Accommodation-Finder-System",
    demo: null,
    featured: true,
    type: "development",
    image: null,
  },

  {
    title: "Service Promotion Design",
    description: "Professional service advertisement design with clean layouts and compelling visual hierarchy to attract and engage the target audience.",
    techStack: ["Adobe Photoshop", "Illustrator"],
    github: null,
    demo: null,
    featured: true,
    type: "design",
    image: "/design-projects/service.jpeg",
  },
  {
    title: "Voice Campaign Design",
    description: "An empowering campaign design giving voice to important causes, featuring strong typography and expressive visual elements.",
    techStack: ["Adobe Photoshop", "Illustrator"],
    github: null,
    demo: null,
    featured: true,
    type: "design",
    image: "/design-projects/voice.jpeg",
  },
];

const ProjectCard = ({
  project,
  index,
  isInView,
  featured = false,
  onImageClick,
}: {
  project: (typeof projects)[0];
  index: number;
  isInView: boolean;
  featured?: boolean;
  onImageClick?: (image: string) => void;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`glass-card rounded-xl overflow-hidden group hover:border-primary/50 transition-all duration-300 ${
        featured ? "lg:col-span-1" : ""
      }`}
    >
      {/* Project Image */}
      {project.image && (
        <div 
          className="relative w-full aspect-[4/3] overflow-hidden bg-muted cursor-pointer"
          onClick={() => onImageClick?.(project.image!)}
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 group-hover:blur-sm transition-all duration-300"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/80 text-white px-3 py-1 rounded-full text-sm border border-white/20">
              Click to view full image
            </div>
          </div>
        </div>
      )}

      <div className="p-6 h-full flex flex-col">
        <div className="flex items-center justify-between mb-4">
          {project.type === "design" ? (
            <Palette className="w-10 h-10 text-primary" />
          ) : (
            <Folder className="w-10 h-10 text-primary" />
          )}
          <div className="flex items-center gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="View GitHub repository"
              >
                <Github size={20} />
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="View live demo"
              >
                <ExternalLink size={20} />
              </a>
            )}
          </div>
        </div>

        <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
          {project.title}
        </h3>

        <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-mono text-primary bg-primary/10 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const developmentProjects = projects.filter((p) => p.type === "development");
  const designProjects = projects.filter((p) => p.type === "design");

  const renderProjects = (projectList: typeof projects) => {
    const featured = projectList.filter((p) => p.featured);
    const other = projectList.filter((p) => !p.featured);

    return (
      <>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featured.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              isInView={isInView}
              featured
              onImageClick={setSelectedImage}
            />
          ))}
        </div>

        {other.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {other.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index + featured.length}
                isInView={isInView}
                onImageClick={setSelectedImage}
              />
            ))}
          </div>
        )}
      </>
    );
  };

  return (
    <section id="projects" className="py-20 lg:py-32 relative">
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
              03. Projects
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Things I've Built & Designed
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A selection of projects showcasing my skills in
              web development and graphic design.
            </p>
          </div>

          <Tabs defaultValue="development" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto mb-12 grid-cols-2">
              <TabsTrigger value="development">Development</TabsTrigger>
              <TabsTrigger value="design">Graphic Design</TabsTrigger>
            </TabsList>

            <TabsContent value="development" className="mt-0">
              {developmentProjects.length > 0 ? (
                <>
                  {renderProjects(developmentProjects)}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="text-center mt-12"
                  >
                    <Button variant="outline" size="lg" asChild>
                      <a
                        href="https://github.com/karinakc"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View More on GitHub
                      </a>
                    </Button>
                  </motion.div>
                </>
              ) : (
                <p className="text-center text-muted-foreground py-12">
                  No development projects yet.
                </p>
              )}
            </TabsContent>

            <TabsContent value="design" className="mt-0">
              {designProjects.length > 0 ? (
                renderProjects(designProjects)
              ) : (
                <p className="text-center text-muted-foreground py-12">
                  No graphic design projects yet. Add your creative work to showcase your design skills!
                </p>
              )}
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>

      {/* Image Modal */}
      <DialogPrimitive.Root open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogPrimitive.Portal>
          <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/95 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
          <DialogPrimitive.Content className="fixed left-[50%] top-[50%] z-50 w-full max-w-7xl translate-x-[-50%] translate-y-[-50%] p-0">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Close"
            >
              <X size={24} />
            </button>
            {selectedImage && (
              <div className="relative w-full h-[90vh] flex items-center justify-center p-4">
                <img
                  src={selectedImage}
                  alt="Full size preview"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            )}
          </DialogPrimitive.Content>
        </DialogPrimitive.Portal>
      </DialogPrimitive.Root>
    </section>
  );
};

export default ProjectsSection;
