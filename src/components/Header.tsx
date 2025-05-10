
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Toggle } from "@/components/ui/toggle";
import { User, BookOpen, Briefcase, Sliders, FolderOpen, Star, Mail } from "lucide-react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { name: "About", href: "#about", icon: User },
    { name: "Education", href: "#education", icon: BookOpen },
    { name: "Experience", href: "#experience", icon: Briefcase },
    { name: "Skills", href: "#skills", icon: Sliders },
    { name: "Projects", href: "#projects", icon: FolderOpen },
    { name: "Testimonials", href: "#testimonials", icon: Star },
    { name: "Contact", href: "#contact", icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }

      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (!element) return false;
        
        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      } else if (window.scrollY < 100) {
        setActiveSection("home");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled, navItems]);

  return (
    <motion.header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 flex justify-center py-4",
        scrolled ? "bg-background/90 backdrop-blur-lg shadow-sm" : "bg-transparent"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="container max-w-5xl flex justify-center items-center">
        {/* Updated Navigation section with icons and improved styling */}
        <div className="bg-gradient-to-r from-black/40 to-blue-900/40 backdrop-blur-md rounded-full shadow-lg border border-turquoise/20 px-3 py-1.5">
          <div className="flex space-x-1.5">
            {navItems.map((item) => (
              <Toggle
                key={item.name}
                variant="navbar"
                pressed={activeSection === item.href.substring(1)}
                onClick={() => {
                  const element = document.getElementById(item.href.substring(1));
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                className={cn(
                  "text-white hover:bg-white/10 px-4 py-2 rounded-full text-sm transition-all duration-200 flex flex-col items-center gap-1",
                  activeSection === item.href.substring(1) 
                    ? "bg-gradient-to-r from-classicBlue/30 to-turquoise/30 text-white" 
                    : "text-white/70"
                )}
              >
                <item.icon className="h-4 w-4" />
                <span>{item.name}</span>
              </Toggle>
            ))}
          </div>
        </div>
      </div>
    </motion.header>
  );
}
