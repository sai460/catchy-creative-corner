
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Github, Linkedin, Mail, UserRound, Server, Code, GitBranch, CheckCircle, Upload, BarChart } from "lucide-react";
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

          {/* Enhanced DevOps Automation Animation */}
          <motion.div 
            className="hidden md:flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <div className="relative w-full h-[350px] flex items-center justify-center">
              {/* Main circular container */}
              <motion.div 
                className="absolute w-72 h-72 rounded-full border-2 border-turquoise/30 bg-gradient-to-br from-slate-900/80 to-blue-900/50 backdrop-blur-md"
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
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-gradient-to-br from-classicBlue to-turquoise rounded-full flex items-center justify-center"
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
                
                {/* Orbital rings with icons */}
                <motion.div 
                  className="absolute top-0 left-0 w-full h-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                >
                  {/* Icons positioned around the circle */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <IconBubble icon={<Code className="h-5 w-5" />} label="Code" />
                  </div>
                  <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                    <IconBubble icon={<GitBranch className="h-5 w-5" />} label="Build" />
                  </div>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                    <IconBubble icon={<CheckCircle className="h-5 w-5" />} label="Test" />
                  </div>
                  <div className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2">
                    <IconBubble icon={<Upload className="h-5 w-5" />} label="Deploy" />
                  </div>
                </motion.div>
                
                {/* Inner orbit with smaller icons */}
                <motion.div
                  className="absolute top-1/2 left-1/2 w-40 h-40 rounded-full border border-dashed border-turquoise/20"
                  style={{ transform: 'translate(-50%, -50%)' }}
                  animate={{ rotate: -360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  {/* Small orbitals */}
                  <motion.div 
                    className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    whileHover={{ scale: 1.2 }}
                  >
                    <div className="h-6 w-6 bg-turquoise/30 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <Server className="h-3 w-3 text-white" />
                    </div>
                  </motion.div>
                  <motion.div 
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2"
                    whileHover={{ scale: 1.2 }}
                  >
                    <div className="h-6 w-6 bg-classicBlue/30 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <BarChart className="h-3 w-3 text-white" />
                    </div>
                  </motion.div>
                </motion.div>
                
                {/* Flowing particles */}
                <FlowingParticles />
              </motion.div>
              
              {/* Process labels positioned around */}
              <div className="absolute w-full h-full">
                <ProcessLabel text="CI/CD Pipeline" top="5%" left="50%" />
                <ProcessLabel text="Infrastructure as Code" top="50%" left="85%" />
                <ProcessLabel text="Monitoring & Logging" top="95%" left="50%" />
                <ProcessLabel text="Containerization" top="50%" left="15%" />
              </div>
              
              {/* Connection lines */}
              <svg className="absolute w-full h-full z-0" viewBox="0 0 400 400">
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgba(51, 195, 240, 0.1)" />
                    <stop offset="50%" stopColor="rgba(51, 195, 240, 0.5)" />
                    <stop offset="100%" stopColor="rgba(51, 195, 240, 0.1)" />
                  </linearGradient>
                </defs>
                <circle cx="200" cy="200" r="120" fill="none" stroke="url(#lineGradient)" strokeWidth="1" strokeDasharray="5,5" />
                <circle cx="200" cy="200" r="150" fill="none" stroke="url(#lineGradient)" strokeWidth="1" strokeDasharray="3,3" />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Helper components for the enhanced DevOps animation
const IconBubble = ({ icon, label }: { icon: React.ReactNode, label: string }) => (
  <motion.div 
    className="flex flex-col items-center"
    whileHover={{ scale: 1.1, y: -5 }}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}
  >
    <div className="bg-gradient-to-br from-classicBlue to-turquoise p-[2px] rounded-full">
      <div className="h-12 w-12 bg-slate-900 backdrop-blur-md rounded-full flex items-center justify-center">
        {icon}
      </div>
    </div>
    <span className="mt-1 text-xs text-white/80 bg-black/30 backdrop-blur-sm px-2 py-0.5 rounded-full">{label}</span>
  </motion.div>
);

const ProcessLabel = ({ text, top, left }: { text: string, top: string, left: string }) => (
  <motion.div
    className="absolute bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-white border border-turquoise/20 shadow-lg whitespace-nowrap"
    style={{ top, left, transform: 'translate(-50%, -50%)' }}
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: Math.random() }}
    whileHover={{ 
      scale: 1.05, 
      backgroundColor: 'rgba(51, 195, 240, 0.2)',
      transition: { duration: 0.2 } 
    }}
  >
    {text}
  </motion.div>
);

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
