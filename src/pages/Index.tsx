
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { motion } from "framer-motion";

const Index = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <div id="about">
          <About />
        </div>
        <div id="education">
          <Education />
        </div>
        <div id="experience">
          <Experience />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="testimonials">
          <Testimonials />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </main>
      <footer className="py-8 text-center text-white relative overflow-hidden bg-gradient-to-br from-slate-900 to-blue-900">
        <div className="absolute inset-0 z-0">
          <div className="tech-bg-animation"></div>
          <motion.div 
            className="absolute top-0 left-1/4 w-32 h-32 rounded-full bg-white/10"
            animate={{
              y: [0, 30, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              repeat: Infinity,
              duration: 8,
              ease: "easeInOut",
            }}
          />
          <motion.div 
            className="absolute bottom-0 right-1/4 w-40 h-40 rounded-full bg-white/10"
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              repeat: Infinity,
              duration: 6,
              ease: "easeInOut",
            }}
          />
        </div>
        <div className="container relative z-10">
          <p>© {currentYear} Venkata Sai Mohan Yedla. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
