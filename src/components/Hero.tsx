
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

  // DevOps pipeline animation stages
  const pipelineStages = [
    { label: "Plan", delay: 0 },
    { label: "Code", delay: 0.5 },
    { label: "Build", delay: 1 },
    { label: "Test", delay: 1.5 },
    { label: "Deploy", delay: 2 },
    { label: "Monitor", delay: 2.5 },
  ];

  return (
    <section className="min-h-[90vh] flex flex-col justify-center pt-10 pb-20 hero-gradient relative overflow-hidden">
      <div className="absolute inset-0 z-0 devops-animation-bg">
        {/* Background animation removed as requested */}
      </div>
    
      <div className="container max-w-5xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <motion.h1 
              className="text-xl md:text-3xl font-bold text-classicBlue"
              initial="hidden"
              animate="visible"
              custom={0}
              variants={textVariants}
            >
              Venkata Sai Mohan Yedla
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-turquoise"
              initial="hidden"
              animate="visible"
              custom={1}
              variants={textVariants}
            >
              Software Engineer & DevOps Engineer
            </motion.p>
            
            <motion.p 
              className="max-w-2xl text-muted-foreground text-lg"
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

          {/* DevOps Automation Animation */}
          <motion.div 
            className="hidden md:flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <div className="relative">
              {/* Circular automation flow */}
              <motion.div 
                className="w-64 h-64 rounded-full border-2 border-dashed border-turquoise/50 relative"
                animate={{ rotate: 360 }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 20, 
                  ease: "linear" 
                }}
              >
                {/* Moving gear around the circle */}
                <motion.div 
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2"
                  animate={{ 
                    rotate: 360,
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 8,
                  }}
                >
                  <div className="bg-turquoise/20 backdrop-blur-sm p-2 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-turquoise animate-spin-slow">
                      <circle cx="12" cy="12" r="3"></circle>
                      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                    </svg>
                  </div>
                </motion.div>
              </motion.div>

              {/* Central DevOps animation */}
              <motion.div 
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center bg-classicBlue/20 backdrop-blur-md rounded-full w-40 h-40 border border-turquoise"
                animate={{ 
                  boxShadow: ['0 0 10px rgba(51, 195, 240, 0.3)', '0 0 20px rgba(51, 195, 240, 0.5)', '0 0 10px rgba(51, 195, 240, 0.3)'], 
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 2,
                  ease: "easeInOut"  
                }}
              >
                <motion.div 
                  className="text-center"
                  animate={{ 
                    scale: [1, 1.05, 1],
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 3,
                    ease: "easeInOut"  
                  }}
                >
                  <div className="text-2xl font-bold text-turquoise mb-1">DevOps</div>
                  <div className="text-xs text-white/80">Automation</div>
                  
                  {/* Animated arrow in circle */}
                  <motion.svg 
                    width="60" 
                    height="30" 
                    viewBox="0 0 60 30" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    className="mt-2"
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 8,
                      ease: "linear"  
                    }}
                  >
                    <path d="M5 15 H45 M45 15 L35 5 M45 15 L35 25" stroke="rgba(51, 195, 240, 0.8)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </motion.svg>
                </motion.div>
              </motion.div>

              {/* Pipeline stages around the circle */}
              {pipelineStages.map((stage, index) => {
                const angle = (index * 60) * (Math.PI / 180);
                const x = Math.sin(angle) * 150;
                const y = -Math.cos(angle) * 150;
                
                return (
                  <motion.div
                    key={stage.label}
                    className="absolute top-1/2 left-1/2 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full text-sm text-white border border-turquoise/30"
                    style={{ transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))` }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: stage.delay, duration: 0.5 }}
                  >
                    {stage.label}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
