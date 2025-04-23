
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function Projects() {
  const projects = [
    {
      title: "Project One",
      description: "A modern web application built with React and TypeScript.",
      tech: ["React", "TypeScript", "Tailwind CSS"],
      link: "#",
    },
    {
      title: "Project Two",
      description: "Full-stack application with real-time features.",
      tech: ["Next.js", "Node.js", "PostgreSQL"],
      link: "#",
    },
    {
      title: "Project Three",
      description: "Mobile-first responsive design implementation.",
      tech: ["React", "Redux", "Sass"],
      link: "#",
    },
  ];

  return (
    <section id="projects" className="section bg-secondary/50">
      <div className="container">
        <h2 className="text-2xl font-semibold mb-8">Featured Projects</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card key={index} className="bg-background">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-sm bg-secondary rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Button asChild variant="outline" className="w-full">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    View Project
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
