
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
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
            className="text-3xl md:text-5xl font-bold text-classicBlue"
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
            {socialLinks.map((link, index) => (
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
            className="pt-6"
            initial="hidden"
            animate="visible"
            custom={4}
            variants={textVariants}
          >
            <a href="#projects">
              <Button className="group bg-classicBlue hover:bg-turquoise">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
