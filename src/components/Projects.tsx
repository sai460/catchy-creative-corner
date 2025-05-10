
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Github } from "lucide-react";
import { motion } from "framer-motion";

export function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce application built with React and Node.js.",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      link: "#",
      githubLink: "https://github.com/Mohan-Sai-Yeadla",
    },
    {
      title: "DevOps Automation Pipeline",
      description: "CI/CD pipeline implementation with infrastructure as code.",
      tech: ["Jenkins", "Docker", "Kubernetes", "Terraform"],
      link: "#",
      githubLink: "https://github.com/Mohan-Sai-Yeadla",
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio website built with React and TailwindCSS.",
      tech: ["React", "TailwindCSS", "TypeScript"],
      link: "#",
      githubLink: "https://github.com/Mohan-Sai-Yeadla",
    },
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden bg-gradient-to-br from-slate-900 to-blue-900">
      {/* Background animation elements */}
      <div className="absolute inset-0 z-0">
        <div className="tech-bg-animation"></div>
        <motion.div 
          className="absolute top-40 left-20 w-72 h-72 rounded-full bg-classicBlue/10"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            repeat: Infinity,
            duration: 8,
            ease: "easeInOut",
          }}
        />
        <motion.div 
          className="absolute bottom-40 right-20 w-60 h-60 rounded-full bg-turquoise/10"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: "easeInOut",
          }}
        />
      </div>
      
      <div className="container max-w-5xl relative z-10">
        <motion.h2 
          className="text-3xl font-bold mb-10 text-white drop-shadow-md"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 50
              }}
            >
              <Card className="project-card overflow-hidden border h-full flex flex-col bg-white/10 backdrop-blur-sm border-white/20 hover:border-classicBlue transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-classicBlue/10">
                <CardHeader className="pb-3 border-b border-white/20">
                  <CardTitle className="text-white">{project.title}</CardTitle>
                  <CardDescription className="pt-2 text-white/70">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <motion.span
                        key={tech}
                        className="px-2 py-1 text-xs bg-white/20 text-white rounded-md backdrop-blur-sm"
                        whileHover={{ 
                          scale: 1.05,
                          backgroundColor: "rgba(30, 174, 219, 0.3)",
                          transition: { duration: 0.2 }
                        }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button asChild variant="default" size="sm" className="flex-1 bg-classicBlue hover:bg-turquoise">
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        Live Demo
                      </a>
                    </Button>
                    <Button asChild variant="outline" size="sm" className="w-10 px-0 border-classicBlue text-classicBlue hover:text-turquoise bg-white/10 backdrop-blur-sm">
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
