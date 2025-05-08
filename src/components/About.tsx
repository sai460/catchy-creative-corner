
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white to-secondary/10">
      <div className="container max-w-5xl">
        <h2 className="text-3xl font-bold mb-8 text-classicBlue">About Me</h2>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-shrink-0 flex justify-center w-full md:w-auto">
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Avatar className="h-48 w-48 border-4 border-classicBlue shadow-lg overflow-hidden mx-auto">
                  <AvatarImage 
                    src="/lovable-uploads/5c08b9d2-5006-4ea4-b994-3dd994281d77.png" 
                    alt="Venkata Sai Mohan Yedla"
                    className="object-cover object-center"
                  />
                  <AvatarFallback className="text-2xl bg-turquoise text-white">VSM</AvatarFallback>
                </Avatar>
              </motion.div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-classicBlue/30 to-transparent opacity-60"></div>
              <motion.div 
                className="absolute -inset-1 bg-gradient-to-tr from-classicBlue to-turquoise rounded-full blur-md opacity-30"
                animate={{
                  opacity: [0.2, 0.4, 0.2],
                  scale: [1, 1.05, 1]
                }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut"
                }}
              />
            </div>
          </div>
          <motion.div 
            className="space-y-6 text-lg"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-foreground">
              I am a versatile professional with experience as both a Software Engineer and DevOps Engineer. My expertise spans across full-stack development and infrastructure management, allowing me to bridge the gap between development and operations effectively.
            </p>
            <p className="text-foreground">
              Throughout my career, I've focused on building scalable applications while implementing efficient CI/CD pipelines and infrastructure automation. I'm passionate about leveraging technology to solve complex problems and improve development workflows.
            </p>
            <p className="text-foreground">
              I enjoy working with modern technologies and frameworks to create robust and efficient solutions that meet business requirements while maintaining high quality standards.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
