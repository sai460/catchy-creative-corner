
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
      <div className="absolute inset-0 z-0 devops-animation-bg">
        {/* Background animation removed as requested */}
      </div>
    
      <div className="container max-w-5xl relative z-10">
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
      </div>
    </section>
  );
}
