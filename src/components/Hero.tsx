
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Github, Linkedin, Mail, UserRound, Code, GitBranch, Database, Cloud, Lock, BarChart } from "lucide-react";
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

  // Tech stack for the animation
  const techStack = [
    { name: "React", color: "#61DAFB" },
    { name: "Node.js", color: "#339933" },
    { name: "Python", color: "#3776AB" },
    { name: "Docker", color: "#2496ED" },
    { name: "AWS", color: "#FF9900" },
    { name: "Kubernetes", color: "#326CE5" }
  ];

  return (
    <section className="min-h-[90vh] flex flex-col justify-center pt-10 pb-20 hero-gradient relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-slate-900/50 to-blue-900/20"></div>
    
      <div className="container max-w-5xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <motion.h1 
              className="text-xl md:text-3xl font-bold text-blue-900 shadow-text"
              initial="hidden"
              animate="visible"
              custom={0}
              variants={textVariants}
            >
              Venkata Sai Mohan Yedla
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-turquoise shadow-text"
              initial="hidden"
              animate="visible"
              custom={1}
              variants={textVariants}
            >
              Software Engineer & DevOps Engineer
            </motion.p>
            
            <motion.p 
              className="max-w-2xl text-white text-lg bg-black/20 backdrop-blur-sm p-3 rounded-lg border border-white/10"
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

          {/* New Tech Stack 3D Animation */}
          <motion.div 
            className="hidden md:block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="relative w-full h-80">
              {/* Background glow */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-turquoise/20 rounded-full blur-2xl"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.3, 0.4, 0.3],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 5,
                  ease: "easeInOut",
                }}
              />

              {/* Central hub with connections */}
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-br from-blue-600 to-blue-900 rounded-full flex items-center justify-center shadow-lg border border-blue-400/30"
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(59, 130, 246, 0.5)",
                    "0 0 40px rgba(59, 130, 246, 0.7)",
                    "0 0 20px rgba(59, 130, 246, 0.5)",
                  ],
                }}
                transition={{ repeat: Infinity, duration: 3 }}
              >
                <div className="text-white font-bold text-sm">Tech Stack</div>
              </motion.div>

              {/* Orbiting tech elements */}
              {techStack.map((tech, index) => (
                <TechOrbit 
                  key={tech.name} 
                  name={tech.name} 
                  color={tech.color} 
                  index={index} 
                  total={techStack.length} 
                />
              ))}

              {/* Floating code snippets */}
              <CodeSnippets />
              
              {/* Connecting lines animation */}
              <ConnectingLines />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Tech orbiting component
const TechOrbit = ({ name, color, index, total }: { name: string; color: string; index: number; total: number }) => {
  const angle = (index / total) * 2 * Math.PI;
  const radius = 120;
  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * radius;
  
  return (
    <motion.div
      className="absolute top-1/2 left-1/2 w-16 h-16 flex items-center justify-center"
      style={{
        x: x,
        y: y,
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: 1, 
        scale: 1,
        x: x,
        y: y,
        rotate: [0, 360],
      }}
      transition={{
        delay: index * 0.2,
        duration: 20,
        rotate: {
          repeat: Infinity,
          duration: 15,
          ease: "linear",
        },
        opacity: { duration: 1 }
      }}
    >
      <motion.div
        className="bg-slate-800 backdrop-blur-md w-full h-full rounded-lg flex items-center justify-center shadow-lg"
        style={{ borderColor: color }}
        whileHover={{ scale: 1.2, boxShadow: `0 0 20px ${color}` }}
        initial={{ borderWidth: 1, borderColor: `${color}40` }}
        animate={{
          borderWidth: [1, 2, 1],
          borderColor: [`${color}40`, `${color}90`, `${color}40`]
        }}
        transition={{ repeat: Infinity, duration: 3 }}
      >
        <div className="text-white text-sm font-medium">{name}</div>
      </motion.div>
    </motion.div>
  );
};

// Animated code snippets
const CodeSnippets = () => {
  const snippets = [
    { text: "</>" },
    { text: "{code}" },
    { text: "[ ]" }
  ];
  
  return (
    <>
      {snippets.map((snippet, index) => (
        <motion.div
          key={index}
          className="absolute text-xs text-blue-300 bg-slate-900/60 px-2 py-1 rounded-md backdrop-blur-sm"
          initial={{ 
            x: Math.random() * 200 - 100 + 150, 
            y: Math.random() * 200 - 100 + 150,
            opacity: 0
          }}
          animate={{
            x: [
              Math.random() * 200 - 100 + 150,
              Math.random() * 200 - 100 + 150
            ],
            y: [
              Math.random() * 200 - 100 + 150,
              Math.random() * 200 - 100 + 150
            ],
            opacity: [0, 0.8, 0],
            scale: [0.8, 1.2, 0.8]
          }}
          transition={{
            repeat: Infinity,
            duration: Math.random() * 5 + 10,
            delay: index * 3
          }}
        >
          {snippet.text}
        </motion.div>
      ))}
    </>
  );
};

// Connecting lines animation
const ConnectingLines = () => {
  const lines = [1, 2, 3, 4];
  
  return (
    <>
      {lines.map((line) => (
        <motion.div
          key={line}
          className="absolute top-1/2 left-1/2 h-0.5 bg-gradient-to-r from-blue-500/50 to-transparent origin-left"
          style={{
            width: 120,
            rotate: line * 90,
          }}
          animate={{
            scaleX: [0, 1, 0],
            opacity: [0, 0.7, 0]
          }}
          transition={{
            repeat: Infinity,
            duration: 3,
            delay: line * 0.75
          }}
        />
      ))}
    </>
  );
};
