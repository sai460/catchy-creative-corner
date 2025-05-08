
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="py-8 text-center text-muted-foreground bg-background border-t">
        <div className="container">
          <p>© {new Date().getFullYear()} Venkata Sai Mohan Yedla. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
