
import { GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

export function Education() {
  return (
    <section id="education" className="py-20 relative overflow-hidden bg-gradient-to-br from-slate-900 to-blue-900">
      {/* Background animation elements */}
      <div className="absolute inset-0 z-0">
        <div className="tech-bg-animation"></div>
        <motion.div 
          className="absolute top-40 right-10 w-80 h-80 rounded-full bg-classicBlue/10"
          animate={{
            scale: [1, 1.2, 1],
            y: [0, -20, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            repeat: Infinity,
            duration: 12,
            ease: "easeInOut",
          }}
        />
        <motion.div 
          className="absolute bottom-20 left-10 w-60 h-60 rounded-full bg-turquoise/10"
          animate={{
            scale: [1.1, 1, 1.1],
            y: [0, 30, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: "easeInOut",
          }}
        />
      </div>
      
      <div className="container max-w-5xl relative z-10">
        <div className="flex items-center gap-3 mb-8">
          <h2 className="text-3xl font-bold text-white drop-shadow-md">Education</h2>
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ 
              rotate: [0, 15, 0, -15, 0],
              y: [0, -5, 0]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 4,
              repeatType: "loop",
              ease: "easeInOut"
            }}
            className="relative"
          >
            <div className="bg-classicBlue/30 rounded-full p-2 backdrop-blur-sm">
              <GraduationCap className="h-8 w-8 text-white" />
            </div>
            <motion.div 
              className="absolute -top-2 -right-1 w-4 h-4 bg-gold rounded-full"
              animate={{
                y: [-2, -8, -2],
                opacity: [0.7, 1, 0.7],
                scale: [1, 1.2, 1]
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
                repeatType: "loop",
                ease: "easeInOut"
              }}
            />
            <motion.div 
              className="absolute -bottom-1 -left-1 w-3 h-3 bg-turquoise rounded-full"
              animate={{
                y: [0, 4, 0],
                x: [0, -4, 0],
                opacity: [0.5, 1, 0.5],
                scale: [1, 1.3, 1]
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
                repeatType: "loop",
                ease: "easeInOut",
                delay: 0.5
              }}
            />
          </motion.div>
        </div>
        
        <div className="flex flex-col gap-8">
          <motion.div 
            className="education-card bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 hover:border-classicBlue transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-classicBlue/10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="flex-shrink-0">
                <motion.img 
                  src="/lovable-uploads/d5aab48c-1b81-497f-bb74-4d1d750d8c74.png" 
                  alt="University of New Haven logo" 
                  className="w-24 h-24 object-contain"
                  whileHover={{ scale: 1.05, rotate: [0, 5, 0, -5, 0], transition: { duration: 0.5 } }}
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">University Of New Haven</h3>
                <p className="text-turquoise font-medium">Masters in Computer Engineering</p>
                <p className="text-white/70 mt-1">Aug 2023 - Dec 2024</p>
                <p className="mt-2 text-sm text-white/60">
                  Once a Charger, Always a Charger
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
