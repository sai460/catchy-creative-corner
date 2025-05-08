
import { useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

export function Contact() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const socialLinks = [
    {
      icon: Mail,
      href: "mailto:saimohan.yedla@outlook.com",
      label: "Email",
      text: "saimohan.yedla@outlook.com",
    },
    {
      icon: Github,
      href: "https://github.com/sai460/",
      label: "GitHub",
      text: "github.com/sai460",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/venkata-sai-mohan-yedla/",
      label: "LinkedIn",
      text: "linkedin.com/in/venkata-sai-mohan-yedla",
    },
  ];

  const formSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email({ message: "Please enter a valid email address." }),
    message: z.string().min(10, { message: "Message must be at least 10 characters." }),
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Validate the form data
      formSchema.parse(formData);
      
      // In a real app, you would send this data to a backend
      console.log("Form data:", formData);
      
      // Simulate API call
      setTimeout(() => {
        setIsLoading(false);
        toast({
          title: "Message sent!",
          description: "Thanks for reaching out. I'll get back to you soon!",
        });
        
        // Reset form
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      }, 1000);
    } catch (error) {
      setIsLoading(false);
      if (error instanceof z.ZodError) {
        const errorMessages = error.errors.map(err => err.message).join(", ");
        toast({
          variant: "destructive",
          title: "Validation error",
          description: errorMessages,
        });
      } else {
        toast({
          variant: "destructive",
          title: "Something went wrong",
          description: "Please try again later.",
        });
      }
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-white to-secondary/10">
      <div className="container max-w-5xl">
        <h2 className="text-3xl font-bold mb-8 text-classicBlue">Get In Touch</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Information */}
          <div className="space-y-6">
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
          </div>
          
          {/* Contact Form */}
          <div className="bg-white/70 p-6 rounded-lg border border-secondary/20 shadow-sm">
            <h3 className="text-xl font-semibold mb-4 text-classicBlue">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  disabled={isLoading}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  disabled={isLoading}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="How can I help you?"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  disabled={isLoading}
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-classicBlue hover:bg-turquoise" 
                disabled={isLoading}
              >
                {isLoading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
