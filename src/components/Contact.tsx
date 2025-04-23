
import { Github, Linkedin, Mail } from "lucide-react";

export function Contact() {
  const socialLinks = [
    {
      icon: Mail,
      href: "mailto:mohansaiy123@gmail.com",
      label: "Email",
      text: "mohansaiy123@gmail.com",
    },
    {
      icon: Github,
      href: "https://github.com/Mohan-Sai-Yeadla",
      label: "GitHub",
      text: "github.com/Mohan-Sai-Yeadla",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/venkata-sai-mohan-yedla/",
      label: "LinkedIn",
      text: "linkedin.com/in/venkata-sai-mohan-yedla",
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
