
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Toggle } from "@/components/ui/toggle";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 flex justify-center py-6",
        scrolled ? "bg-background/90 backdrop-blur-lg shadow-sm" : "bg-transparent"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="container max-w-5xl flex justify-between items-center">
        {/* Logo section - Updated to VSM */}
        <motion.div 
          className="flex items-center"
          whileHover={{ scale: 1.05 }}
        >
          <div className="bg-gradient-to-br from-classicBlue to-turquoise p-[2px] rounded-lg">
            <div className="bg-black px-3 py-1.5 rounded-lg flex items-center justify-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-turquoise to-classicBlue font-bold text-2xl">VSM</span>
            </div>
          </div>
        </motion.div>

        {/* Updated Navigation section with improved styling */}
        <div className="bg-black/50 backdrop-blur-md rounded-full shadow-lg border border-turquoise/20 px-2 py-1.5">
          <div className="flex space-x-1">
            {navItems.map((item) => (
              <Toggle
                key={item.name}
                variant="navbar"
                pressed={activeSection === item.href.substring(1)}
                onClick={() => {
                  const element = document.getElementById(item.href.substring(1));
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-white/80 hover:bg-white/5 px-4 py-2 rounded-full text-sm transition-all duration-200"
              >
                {item.name}
              </Toggle>
            ))}
          </div>
        </div>
      </div>
    </motion.header>
  );
}
