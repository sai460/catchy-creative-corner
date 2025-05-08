
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { useEffect } from "react";

export function Hero() {
  const socialLinks = [
    { 
      icon: Github, 
      href: "https://github.com/Mohan-Sai-Yeadla", 
      label: "GitHub",
      color: "text-foreground hover:text-classicBlue"
    },
    { 
      icon: Linkedin, 
      href: "https://www.linkedin.com/in/venkata-sai-mohan-yedla/", 
      label: "LinkedIn",
      color: "text-classicBlue hover:text-turquoise" 
    },
    { 
      icon: Mail, 
      href: "mailto:mohansaiy123@gmail.com", 
      label: "Email",
      color: "text-turquoise hover:text-classicBlue"
    },
  ];

  return (
    <section className="min-h-[90vh] flex flex-col justify-center pt-10 pb-20 hero-gradient relative overflow-hidden">
      <div className="absolute inset-0 z-0 devops-animation-bg">
        {/* We've removed the DevOps Icons and Connection Lines */}
      </div>
    
      <div className="container max-w-5xl relative z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-7xl font-bold animate-fade-in text-classicBlue">
            Venkata Sai Mohan Yedla
          </h1>
          <p className="text-xl md:text-3xl text-turquoise animate-fade-in" style={{ animationDelay: "0.2s" }}>
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
              <Button className="group bg-classicBlue hover:bg-turquoise">
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
