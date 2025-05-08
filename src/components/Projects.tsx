
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Github } from "lucide-react";

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
    <section id="projects" className="py-20">
      <div className="container max-w-5xl">
        <h2 className="text-3xl font-bold mb-10">Featured Projects</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden border border-secondary hover:border-primary transition-all duration-300 h-full flex flex-col">
              <CardHeader className="pb-3">
                <CardTitle>{project.title}</CardTitle>
                <CardDescription className="pt-2">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button asChild variant="default" size="sm" className="flex-1">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      Live Demo
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="sm" className="w-10 px-0">
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
