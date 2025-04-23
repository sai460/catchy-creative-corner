
import { Github, Linkedin, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

export function Header() {
  const navItems = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { 
      icon: Github, 
      href: "https://github.com/Mohan-Sai-Yeadla", 
      label: "GitHub" 
    },
    { 
      icon: Linkedin, 
      href: "https://www.linkedin.com/in/venkata-sai-mohan-yedla/", 
      label: "LinkedIn" 
    },
    { 
      icon: Mail, 
      href: "mailto:mohansaiy123@gmail.com", 
      label: "Email" 
    },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container flex items-center justify-between h-16">
        <a href="#" className="text-lg font-semibold">
          Venkata Sai Mohan Yedla
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="nav-link"
            >
              {item.name}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="social-link"
              aria-label={link.label}
              target="_blank"
              rel="noopener noreferrer"
            >
              <link.icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
