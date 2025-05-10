
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

  // Orbital animation variants
  const orbitalVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 30,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  // Dots animation variants
  const dotsVariants = {
    animate: i => ({
      opacity: [0.6, 1, 0.6],
      scale: [0.9, 1.1, 0.9],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
        delay: i * 0.2
      }
    })
  };

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
        {/* VSM Logo section */}
        <motion.div 
          className="flex items-center relative"
          whileHover={{ scale: 1.05 }}
        >
          <div className="relative w-12 h-12">
            {/* Outer circular path */}
            <motion.div 
              className="absolute inset-0 rounded-full border-2 border-classicBlue/30"
              variants={orbitalVariants}
              animate="animate"
            />
            
            {/* Dots */}
            <motion.div 
              className="absolute top-0 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-classicBlue"
              custom={0}
              variants={dotsVariants}
              animate="animate"
            />
            <motion.div 
              className="absolute top-1/2 right-0 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-turquoise"
              custom={1}
              variants={dotsVariants}
              animate="animate"
            />
            <motion.div 
              className="absolute bottom-1 left-1/3 w-2 h-2 rounded-full bg-classicBlue"
              custom={2}
              variants={dotsVariants}
              animate="animate"
            />
            <motion.div 
              className="absolute left-1 top-1/3 w-1.5 h-1.5 rounded-full bg-turquoise"
              custom={3}
              variants={dotsVariants}
              animate="animate"
            />
            
            {/* Inner semicircular path */}
            <motion.div 
              className="absolute h-7 w-7 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 border-turquoise/60 rounded-full border-r-0 border-b-0"
              animate={{
                rotate: -360,
                transition: {
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }
              }}
            />
          </div>
          
          {/* VSM Text */}
          <div className="ml-3">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-turquoise to-classicBlue font-bold text-2xl">VSM</span>
          </div>
        </motion.div>

        {/* Updated Navigation section with improved styling */}
        <div className="bg-black/30 backdrop-blur-md rounded-full shadow-lg border border-turquoise/20 px-3 py-1.5">
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
                  "text-white/80 hover:bg-white/10 px-4 py-2 rounded-full text-sm transition-all duration-200",
                  activeSection === item.href.substring(1) ? "bg-gradient-to-r from-classicBlue/30 to-turquoise/30" : ""
                )}
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
