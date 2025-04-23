
import { Github, Linkedin, Mail } from "lucide-react";

export function Contact() {
  const socialLinks = [
    {
      icon: Mail,
      href: "mailto:your.email@example.com",
      label: "Email",
      text: "your.email@example.com",
    },
    {
      icon: Github,
      href: "https://github.com",
      label: "GitHub",
      text: "github.com/yourusername",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com",
      label: "LinkedIn",
      text: "linkedin.com/in/yourusername",
    },
  ];

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="text-2xl font-semibold mb-8">Get In Touch</h2>
        <div className="max-w-md">
          <p className="text-muted-foreground mb-8">
            I'm always open to new opportunities and collaborations. Feel free to reach out!
          </p>
          <div className="space-y-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <link.icon className="h-5 w-5" />
                <span>{link.text}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
