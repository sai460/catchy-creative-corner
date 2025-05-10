
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Github, Linkedin, Mail, UserRound } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  const socialLinks = [
    { 
      icon: Github, 
      href: "https://github.com/sai460/", 
      label: "GitHub",
      color: "text-foreground hover:text-classicBlue"
    },
    { 
      icon: Linkedin, 
      href: "https://www.linkedin.com/in/venkata-sai-mohan-yedla/", 
      label: "LinkedIn",
      color: "text-classicBlue hover:text-turquoise" 
    },
    { 
      icon: Mail, 
      href: "mailto:saimohan.yedla@outlook.com", 
      label: "Email",
      color: "text-turquoise hover:text-classicBlue"
    },
  ];

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
        type: "spring",
        stiffness: 100
      }
    })
  };

  return (
    <section className="min-h-[90vh] flex flex-col justify-center pt-10 pb-20 hero-gradient relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-slate-900/50 to-blue-900/20"></div>
    
      <div className="container max-w-5xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Text content taking 7 columns */}
          <div className="md:col-span-7 space-y-6">
            <motion.h1 
              className="text-xl md:text-3xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent highlight-text shadow-text"
              initial="hidden"
              animate="visible"
              custom={0}
              variants={textVariants}
            >
              Venkata Sai Mohan Yedla
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-turquoise shadow-text highlight-text"
              initial="hidden"
              animate="visible"
              custom={1}
              variants={textVariants}
            >
              Software Engineer & DevOps Engineer
            </motion.p>
            
            <motion.p 
              className="max-w-2xl text-white text-lg highlight-text"
              initial="hidden"
              animate="visible"
              custom={2}
              variants={textVariants}
            >
              Experienced in full-stack development and DevOps practices, building scalable applications and streamlining deployment processes.
            </motion.p>
            
            <motion.div 
              className="flex items-center gap-4 pt-4"
              initial="hidden"
              animate="visible"
              custom={3}
              variants={textVariants}
            >
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className={`${link.color}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <link.icon className="h-6 w-6" />
                </motion.a>
              ))}
            </motion.div>

            <motion.div 
              className="pt-6 flex flex-wrap gap-4"
              initial="hidden"
              animate="visible"
              custom={4}
              variants={textVariants}
            >
              <a href="#contact">
                <Button variant="default" className="group bg-classicBlue hover:bg-turquoise text-white font-medium px-6 py-6 h-12 rounded-full flex items-center">
                  <UserRound className="mr-2 h-5 w-5" />
                  CONTACT ME
                </Button>
              </a>
              
              <a href="https://raw.githubusercontent.com/sai460/resume/main/resume.pdf" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="group border-2 border-turquoise text-turquoise hover:bg-turquoise hover:text-white font-medium px-6 py-6 h-12 rounded-full flex items-center">
                  <Download className="mr-2 h-5 w-5" />
                  GET RESUME
                </Button>
              </a>
            </motion.div>
          </div>

          {/* DevOps Automation Animation - Centered in 5 columns */}
          <motion.div 
            className="md:col-span-5 flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <div className="relative w-72 h-72">
              {/* Main circular container */}
              <motion.div 
                className="absolute inset-0 rounded-full bg-gradient-to-br from-slate-800/90 to-blue-900/70 backdrop-blur-md flex items-center justify-center border border-turquoise/30"
                animate={{ 
                  boxShadow: ['0 0 15px rgba(51, 195, 240, 0.2)', '0 0 30px rgba(51, 195, 240, 0.4)', '0 0 15px rgba(51, 195, 240, 0.2)'], 
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 3,
                  ease: "easeInOut"  
                }}
              >
                {/* Central DevOps Logo */}
                <motion.div 
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-turquoise to-classicBlue rounded-full flex items-center justify-center"
                  animate={{ 
                    scale: [1, 1.05, 1],
                    boxShadow: ['0 0 10px rgba(51, 195, 240, 0.5)', '0 0 20px rgba(51, 195, 240, 0.7)', '0 0 10px rgba(51, 195, 240, 0.5)'],
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 3,
                    ease: "easeInOut"  
                  }}
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white mb-1">DevOps</div>
                    <div className="text-xs text-white/80">Automation</div>
                  </div>
                </motion.div>
                
                {/* Orbital elements */}
                <motion.div 
                  className="absolute inset-0 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                >
                  {/* Small orbitals - 4 dots */}
                  <motion.div className="absolute top-5 left-1/2 transform -translate-x-1/2 w-5 h-5 bg-black rounded-full flex items-center justify-center">
                    <span className="text-white text-[8px] font-bold opacity-80">CI</span>
                  </motion.div>
                  
                  <motion.div className="absolute right-5 top-1/2 transform -translate-y-1/2 w-5 h-5 bg-black rounded-full flex items-center justify-center">
                    <span className="text-white text-[8px] font-bold opacity-80">CD</span>
                  </motion.div>
                  
                  <motion.div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 w-5 h-5 bg-black rounded-full flex items-center justify-center">
                    <span className="text-white text-[8px] font-bold opacity-80">Test</span>
                  </motion.div>
                  
                  <motion.div className="absolute left-5 top-1/2 transform -translate-y-1/2 w-5 h-5 bg-black rounded-full flex items-center justify-center">
                    <span className="text-white text-[8px] font-bold opacity-80">Build</span>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Helper components for the enhanced DevOps animation
const FlowingParticles = () => {
  const particles = Array.from({ length: 6 }, (_, i) => i);
  
  return (
    <>
      {particles.map((p) => (
        <motion.div
          key={p}
          className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full bg-turquoise/80"
          initial={{ 
            x: 0, 
            y: 0, 
            opacity: 0,
            scale: 0 
          }}
          animate={{ 
            x: [0, Math.cos(p * 60 * Math.PI / 180) * 100],
            y: [0, Math.sin(p * 60 * Math.PI / 180) * 100],
            opacity: [0, 1, 0],
            scale: [0, 1, 0]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 4,
            delay: p * 0.5, 
            ease: "easeInOut" 
          }}
        />
      ))}
    </>
  );
};
