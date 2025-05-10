
import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";

export function Experience() {
  return (
    <section id="experience" className="py-20 relative overflow-hidden bg-gradient-to-br from-slate-900 to-blue-900">
      {/* Background animation elements */}
      <div className="absolute inset-0 z-0">
        <div className="tech-bg-animation"></div>
        <motion.div 
          className="absolute top-20 left-10 w-64 h-64 rounded-full bg-classicBlue/10"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 20, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            repeat: Infinity,
            duration: 8,
            ease: "easeInOut",
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-72 h-72 rounded-full bg-turquoise/10"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -20, 0],
            opacity: [0.2, 0.4, 0.2],
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
          <h2 className="text-3xl font-bold text-white drop-shadow-md">Experience</h2>
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
            className="bg-classicBlue/30 rounded-full p-2 shadow-lg backdrop-blur-sm"
          >
            <Briefcase className="h-8 w-8 text-white" />
          </motion.div>
        </div>
        
        <div className="flex flex-col gap-8">
          {/* Springer Capital Experience - New */}
          <motion.div 
            className="experience-card bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 hover:border-classicBlue transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-classicBlue/10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ 
              duration: 0.7,
              type: "spring",
              stiffness: 50 
            }}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
          >
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="flex-shrink-0 p-3 bg-white/20 rounded-lg shadow-sm backdrop-blur-sm">
                <motion.img 
                  src="/lovable-uploads/44c10a70-2d78-44f6-92b5-1c477e743f9d.png" 
                  alt="Springer Capital logo" 
                  className="w-24 h-24 object-contain"
                  whileHover={{ scale: 1.05, rotate: [0, 5, 0, -5, 0], transition: { duration: 0.5 } }}
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">Springer Capital</h3>
                <p className="text-turquoise font-medium">Data Workflow Automation Specialist</p>
                <p className="text-white/70 mt-1">Mar 2025 - Present</p>
                <motion.div 
                  className="mt-4 space-y-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <p className="text-white font-medium mb-2">Responsibilities:</p>
                  <p className="text-sm text-white/80">
                    • Designed and implemented automated data pipelines using Apache Airflow and AWS Step Functions
                  </p>
                  <p className="text-sm text-white/80">
                    • Developed CI/CD workflows with GitHub Actions for seamless integration of data processing microservices
                  </p>
                  <p className="text-sm text-white/80">
                    • Built and maintained containerized applications using Docker and orchestrated with Kubernetes for scalability
                  </p>
                  <p className="text-sm text-white/80">
                    • Implemented infrastructure as code using Terraform to provision and manage cloud resources
                  </p>
                  <p className="text-sm text-white/80">
                    • Created robust monitoring solutions with Prometheus and Grafana for real-time data pipeline observability
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Wipro Experience - Updated with header */}
          <motion.div 
            className="experience-card bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 hover:border-classicBlue transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-classicBlue/10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ 
              duration: 0.7,
              type: "spring",
              stiffness: 50 
            }}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
          >
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="flex-shrink-0 p-3 bg-white/20 rounded-lg shadow-sm backdrop-blur-sm">
                <motion.img 
                  src="/lovable-uploads/a3cc323c-079d-4570-a214-1d6df16e243d.png" 
                  alt="Wipro Limited logo" 
                  className="w-24 h-24 object-contain"
                  whileHover={{ scale: 1.05, rotate: [0, 5, 0, -5, 0], transition: { duration: 0.5 } }}
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">Wipro Limited</h3>
                <p className="text-turquoise font-medium">DevOps Engineer</p>
                <p className="text-white/70 mt-1">Aug 2020 - Dec 2024</p>
                <motion.div 
                  className="mt-4 space-y-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <p className="text-white font-medium mb-2">Responsibilities:</p>
                  <p className="text-sm text-white/80">
                    • Designed and implemented CI/CD pipelines using Jenkins and GitHub Actions
                  </p>
                  <p className="text-sm text-white/80">
                    • Automated infrastructure provisioning using Terraform and Ansible
                  </p>
                  <p className="text-sm text-white/80">
                    • Managed Kubernetes clusters and containerized applications with Docker
                  </p>
                  <p className="text-sm text-white/80">
                    • Implemented monitoring solutions using Prometheus and Grafana
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
