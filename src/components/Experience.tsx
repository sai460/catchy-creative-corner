
import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-white to-secondary/10">
      <div className="container max-w-5xl">
        <div className="flex items-center gap-3 mb-8">
          <h2 className="text-3xl font-bold text-classicBlue">Experience</h2>
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ 
              rotate: [0, 10, -10, 0],
              y: [0, -3, 0]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 3,
              repeatType: "loop",
              ease: "easeInOut"
            }}
            className="bg-classicBlue/10 rounded-full p-2"
          >
            <Briefcase className="h-8 w-8 text-classicBlue" />
          </motion.div>
        </div>
        
        <div className="flex flex-col gap-8">
          <motion.div 
            className="experience-card bg-white/50 p-6 rounded-lg border border-secondary/20 hover:border-classicBlue transition-all duration-300 shadow-sm hover:shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="flex-shrink-0">
                <img 
                  src="/lovable-uploads/a3cc323c-079d-4570-a214-1d6df16e243d.png" 
                  alt="Wipro Limited logo" 
                  className="w-24 h-24 object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-classicBlue">Wipro Limited</h3>
                <p className="text-turquoise font-medium">DevOps Engineer</p>
                <p className="text-muted-foreground mt-1">Jan 2022 - Present</p>
                <div className="mt-4 space-y-2">
                  <p className="text-sm text-muted-foreground">
                    • Designed and implemented CI/CD pipelines using Jenkins and GitHub Actions
                  </p>
                  <p className="text-sm text-muted-foreground">
                    • Automated infrastructure provisioning using Terraform and Ansible
                  </p>
                  <p className="text-sm text-muted-foreground">
                    • Managed Kubernetes clusters and containerized applications with Docker
                  </p>
                  <p className="text-sm text-muted-foreground">
                    • Implemented monitoring solutions using Prometheus and Grafana
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
