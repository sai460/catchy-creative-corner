
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-20 relative overflow-hidden bg-gradient-to-br from-turquoise/5 to-classicBlue/10">
      {/* Background animation elements */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          className="absolute top-40 right-20 w-80 h-80 rounded-full bg-turquoise/10"
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
          className="absolute bottom-20 left-10 w-60 h-60 rounded-full bg-classicBlue/10"
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
        <motion.h2 
          className="text-3xl font-bold mb-8 text-classicBlue"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-shrink-0 flex justify-center w-full md:w-auto relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8,
                type: "spring",
                stiffness: 50
              }}
              className="relative"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative z-10"
              >
                <Avatar className="h-48 w-48 border-4 border-classicBlue shadow-xl overflow-hidden mx-auto">
                  <AvatarImage 
                    src="/lovable-uploads/5c08b9d2-5006-4ea4-b994-3dd994281d77.png" 
                    alt="Venkata Sai Mohan Yedla"
                    className="object-cover object-center"
                  />
                  <AvatarFallback className="text-2xl bg-turquoise text-white">VSM</AvatarFallback>
                </Avatar>
              </motion.div>
              <motion.div 
                className="absolute -inset-1 bg-gradient-to-tr from-classicBlue to-turquoise rounded-full blur-md opacity-30"
                animate={{
                  opacity: [0.2, 0.5, 0.2],
                  scale: [1, 1.05, 1]
                }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute -inset-4 bg-gradient-to-br from-turquoise/20 to-classicBlue/20 rounded-full blur-lg"
                animate={{
                  opacity: [0.3, 0.7, 0.3],
                  rotate: [0, 360],
                  scale: [0.95, 1.05, 0.95]
                }}
                transition={{
                  repeat: Infinity,
                  duration: 15,
                  ease: "linear"
                }}
              />
            </motion.div>
          </div>
          <motion.div 
            className="space-y-6 text-lg"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.p 
              className="text-foreground"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              I am a versatile professional with experience as both a Software Engineer and DevOps Engineer. My expertise spans across full-stack development and infrastructure management, allowing me to bridge the gap between development and operations effectively.
            </motion.p>
            <motion.p 
              className="text-foreground"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              Throughout my career, I've focused on building scalable applications while implementing efficient CI/CD pipelines and infrastructure automation. I'm passionate about leveraging technology to solve complex problems and improve development workflows.
            </motion.p>
            <motion.p 
              className="text-foreground"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.7 }}
            >
              I enjoy working with modern technologies and frameworks to create robust and efficient solutions that meet business requirements while maintaining high quality standards.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
