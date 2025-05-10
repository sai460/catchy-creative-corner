
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
      <div className="container max-w-5xl flex justify-between items-center">
        {/* Enhanced VSM Logo */}
        <motion.div 
          className="flex items-center relative"
          whileHover={{ scale: 1.05 }}
        >
          <div className="relative w-14 h-14">
            {/* Outer circle */}
            <motion.div 
              className="absolute inset-0 rounded-full bg-gradient-to-r from-classicBlue to-turquoise opacity-20"
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.2, 0.3, 0.2]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* Middle circle */}
            <motion.div 
              className="absolute inset-1 rounded-full border-2 border-classicBlue/50"
              animate={{ rotate: 360 }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            
            {/* Inner circle with electron orbit */}
            <motion.div 
              className="absolute inset-2 rounded-full bg-slate-900/80 backdrop-blur-md flex items-center justify-center overflow-hidden"
            >
              {/* Electron orbit paths */}
              <motion.div
                className="absolute w-full h-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute top-1/2 left-1/2 w-8 h-3 -translate-x-1/2 -translate-y-1/2">
                  <motion.div 
                    className="absolute top-0 right-0 w-1.5 h-1.5 bg-turquoise rounded-full"
                    animate={{ boxShadow: ["0 0 2px #33C3F0", "0 0 5px #33C3F0", "0 0 2px #33C3F0"] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
              </motion.div>
              
              <motion.div
                className="absolute w-full h-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute top-1/2 left-1/2 w-7 h-7 -translate-x-1/2 -translate-y-1/2 rotate-45">
                  <motion.div 
                    className="absolute bottom-0 right-0 w-1.5 h-1.5 bg-classicBlue rounded-full"
                    animate={{ boxShadow: ["0 0 2px #1EAEDB", "0 0 5px #1EAEDB", "0 0 2px #1EAEDB"] }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                  />
                </div>
              </motion.div>
              
              {/* VSM text */}
              <span className="text-white font-bold text-xs tracking-wider">VSM</span>
            </motion.div>
            
            {/* Outer particles */}
            <motion.div 
              className="absolute top-0 right-0 w-1.5 h-1.5 bg-turquoise rounded-full"
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            />
            <motion.div 
              className="absolute bottom-0 left-1 w-1 h-1 bg-classicBlue rounded-full"
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <motion.div 
              className="absolute top-2 left-1 w-1 h-1 bg-classicBlue rounded-full"
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
            />
          </div>
          
          {/* VSM Text */}
          <motion.div 
            className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-turquoise to-classicBlue font-bold text-2xl"
            animate={{ 
              textShadow: ["0 0 5px rgba(51, 195, 240, 0.3)", "0 0 10px rgba(51, 195, 240, 0.5)", "0 0 5px rgba(51, 195, 240, 0.3)"]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            VSM
          </motion.div>
        </motion.div>

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
