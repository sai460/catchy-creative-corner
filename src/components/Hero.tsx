
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

export function Hero() {
  const socialLinks = [
    { 
      icon: Github, 
      href: "https://github.com/Mohan-Sai-Yeadla", 
      label: "GitHub",
      color: "text-black"
    },
    { 
      icon: Linkedin, 
      href: "https://www.linkedin.com/in/venkata-sai-mohan-yedla/", 
      label: "LinkedIn",
      color: "text-blue-600" 
    },
    { 
      icon: Mail, 
      href: "mailto:mohansaiy123@gmail.com", 
      label: "Email",
      color: "text-red-500"
    },
  ];

  return (
    <section className="min-h-[90vh] flex flex-col justify-center pt-20">
      <div className="container max-w-5xl">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-7xl font-bold animate-fade-in">
            Venkata Sai Mohan Yedla
          </h1>
          <p className="text-xl md:text-3xl text-muted-foreground animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Software Engineer & DevOps Engineer
          </p>
          <p className="max-w-2xl text-muted-foreground text-lg animate-fade-in" style={{ animationDelay: "0.4s" }}>
            Experienced in full-stack development and DevOps practices, building scalable applications and streamlining deployment processes.
          </p>
          
          <div className="flex items-center gap-4 pt-4 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`hover:scale-110 transition-transform ${link.color}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
              >
                <link.icon className="h-6 w-6" />
              </a>
            ))}
          </div>

          <div className="pt-6 animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <a href="#projects">
              <Button className="group">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
