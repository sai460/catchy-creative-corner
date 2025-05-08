
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";

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
    <section id="contact" className="py-20 bg-gradient-to-br from-white to-secondary/10">
      <div className="container max-w-5xl">
        <h2 className="text-3xl font-bold mb-8 text-classicBlue">Get In Touch</h2>
        <div className="max-w-lg">
          <p className="text-lg text-foreground mb-8">
            I'm always open to new opportunities and collaborations. Feel free to reach out!
          </p>
          <div className="space-y-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="flex items-center gap-4 text-foreground hover:text-classicBlue transition-colors group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="bg-white p-3 rounded-full border border-secondary/20 group-hover:border-classicBlue transition-colors">
                  <link.icon className="h-5 w-5 text-turquoise" />
                </div>
                <span className="text-lg">{link.text}</span>
              </a>
            ))}
          </div>
          
          <div className="mt-12">
            <Button asChild size="lg" className="bg-classicBlue hover:bg-turquoise">
              <a href="mailto:mohansaiy123@gmail.com">
                Send me an email
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
