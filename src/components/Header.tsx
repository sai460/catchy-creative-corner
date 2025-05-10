
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
        {/* Enhanced VSM Logo - Updated with new animation */}
        <motion.div 
          className="flex items-center relative"
          whileHover={{ scale: 1.05 }}
        >
          <div className="relative w-14 h-14">
            {/* Outer circle with turquoise glow */}
            <motion.div 
              className="absolute inset-0 rounded-full bg-gradient-to-r from-turquoise to-classicBlue opacity-20"
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* Main circle */}
            <div className="absolute inset-0.5 rounded-full bg-slate-900 border-2 border-turquoise/40 flex items-center justify-center overflow-hidden">
              {/* Animated background */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-slate-900 to-blue-900/80"
                animate={{
                  background: [
                    "linear-gradient(135deg, #0f172a 0%, #1e40af80 100%)",
                    "linear-gradient(225deg, #0f172a 0%, #1e40af80 100%)",
                    "linear-gradient(315deg, #0f172a 0%, #1e40af80 100%)",
                    "linear-gradient(45deg, #0f172a 0%, #1e40af80 100%)",
                    "linear-gradient(135deg, #0f172a 0%, #1e40af80 100%)"
                  ]
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              
              {/* VSM text */}
              <motion.span 
                className="relative z-10 text-white font-bold text-lg tracking-wider"
                animate={{
                  textShadow: [
                    "0 0 5px rgba(51, 195, 240, 0.5)",
                    "0 0 10px rgba(51, 195, 240, 0.8)",
                    "0 0 5px rgba(51, 195, 240, 0.5)"
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                VSM
              </motion.span>
            </div>
            
            {/* Orbiting particles */}
            <motion.div
              className="absolute w-full h-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <motion.div 
                className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-turquoise rounded-full"
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              />
            </motion.div>
            
            <motion.div
              className="absolute w-full h-full"
              animate={{ rotate: -360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            >
              <motion.div 
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-classicBlue rounded-full"
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{ duration: 2.5, repeat: Infinity }}
              />
            </motion.div>
          </div>
          
          {/* VSM Text */}
          <motion.div 
            className="ml-3 text-transparent bg-clip-text bg-gradient-to-r from-turquoise to-classicBlue font-bold text-2xl"
            animate={{ 
              textShadow: ["0 0 5px rgba(51, 195, 240, 0.3)", "0 0 10px rgba(51, 195, 240, 0.5)", "0 0 5px rgba(51, 195, 240, 0.3)"]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            VSM
          </motion.div>
        </motion.div>

        {/* Updated Navigation section with flat design */}
        <div className="bg-gray-700/80 backdrop-blur-md rounded-full shadow-lg px-6 py-2.5">
          <div className="flex space-x-4">
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
                  "text-white hover:bg-white/10 px-3 py-1 rounded-md text-sm transition-all duration-200",
                  activeSection === item.href.substring(1) 
                    ? "bg-gradient-to-r from-classicBlue/30 to-turquoise/30 text-white" 
                    : "text-white/80"
                )}
              >
                <span>{item.name}</span>
              </Toggle>
            ))}
          </div>
        </div>
      </div>
    </motion.header>
  );
}
