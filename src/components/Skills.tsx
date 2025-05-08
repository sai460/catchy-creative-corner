
import { 
  Terminal, 
  Server, 
  Database, 
  Cloud, 
  Code, 
  GitBranch,
  GitMerge,
  GitPullRequest,
  RefreshCcw,
  Cog
} from "lucide-react";
import { useEffect, useRef } from "react";

export function Skills() {
  const animationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const animationElement = animationRef.current;
      if (!animationElement) return;

      const position = animationElement.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (position.top < windowHeight * 0.75) {
        animationElement.classList.add("active-animation");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on initial load
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const skills = [
    {
      category: "DevOps Tools",
      items: [
        { name: "Docker", icon: <Terminal className="h-8 w-8" /> },
        { name: "Kubernetes", icon: <Cloud className="h-8 w-8" /> },
        { name: "Jenkins", icon: <Server className="h-8 w-8" /> },
        { name: "Terraform", icon: <Code className="h-8 w-8" /> },
        { name: "Ansible", icon: <Terminal className="h-8 w-8" /> },
        { name: "AWS", icon: <Cloud className="h-8 w-8" /> },
        { name: "Azure", icon: <Cloud className="h-8 w-8" /> }
      ]
    },
    {
      category: "Version Control & CI/CD",
      items: [
        { name: "Git", icon: <GitBranch className="h-8 w-8" /> },
        { name: "GitHub Actions", icon: <GitPullRequest className="h-8 w-8" /> },
        { name: "GitLab CI", icon: <GitMerge className="h-8 w-8" /> },
        { name: "CircleCI", icon: <Server className="h-8 w-8" /> }
      ]
    },
    {
      category: "Monitoring & Logging",
      items: [
        { name: "Prometheus", icon: <Database className="h-8 w-8" /> },
        { name: "Grafana", icon: <Database className="h-8 w-8" /> },
        { name: "ELK Stack", icon: <Server className="h-8 w-8" /> },
        { name: "Datadog", icon: <Database className="h-8 w-8" /> }
      ]
    },
    {
      category: "Programming & Scripting",
      items: [
        { name: "Python", icon: <Code className="h-8 w-8" /> },
        { name: "Bash", icon: <Terminal className="h-8 w-8" /> },
        { name: "JavaScript", icon: <Code className="h-8 w-8" /> },
        { name: "TypeScript", icon: <Code className="h-8 w-8" /> }
      ]
    }
  ];

  const timelineSkills = [
    {
      category: "Tools",
      items: [
        { name: "Docker", icon: <Terminal className="h-8 w-8" /> },
        { name: "Git", icon: <GitBranch className="h-8 w-8" /> },
        { name: "GitHub", icon: <GitPullRequest className="h-8 w-8" /> },
        { name: "Jenkins", icon: <Server className="h-8 w-8" /> },
        { name: "Terraform", icon: <Code className="h-8 w-8" /> },
        { name: "Netlify", icon: <Cloud className="h-8 w-8" /> },
      ]
    },
    {
      category: "Programming Languages",
      items: [
        { name: "BASH", icon: <Terminal className="h-8 w-8" /> },
        { name: "Python", icon: <Code className="h-8 w-8" /> },
        { name: "C++", icon: <Code className="h-8 w-8" /> },
      ]
    },
    {
      category: "Cloud Platforms",
      items: [
        { name: "AWS", icon: <Cloud className="h-8 w-8" /> },
        { name: "Azure", icon: <Cloud className="h-8 w-8" /> },
        { name: "GCP", icon: <Cloud className="h-8 w-8" /> },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 relative bg-gradient-to-br from-turquoise/30 to-classicBlue/60 overflow-hidden">
      {/* Floating particles background */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <div 
            key={i}
            className="absolute bg-white rounded-full opacity-60 z-0 particle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 5 + 2}px`,
              height: `${Math.random() * 5 + 2}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 10}s`
            }}
          ></div>
        ))}
      </div>
      
      <div className="container max-w-5xl relative z-10">
        <h2 className="text-3xl font-bold mb-12 text-center text-white drop-shadow-md">Skills & Technologies</h2>
        
        {/* DevOps automation animation section */}
        <div 
          ref={animationRef} 
          className="devops-animation mb-16 relative h-64 md:h-80 overflow-hidden"
        >
          <div className="flex justify-center items-center h-full">
            <div className="gear-container">
              <Cog className="gear gear-1 text-white/80 h-16 w-16 md:h-24 md:w-24" />
              <Cog className="gear gear-2 text-turquoise/80 h-24 w-24 md:h-32 md:w-32" />
              <Cog className="gear gear-3 text-gold/80 h-20 w-20 md:h-28 md:w-28" />
            </div>
            
            <div className="circular-arrow">
              <RefreshCcw className="refresh-icon text-white h-40 w-40 md:h-56 md:w-56" />
            </div>
            
            <div className="automation-arrow arrow-right"></div>
            <div className="automation-arrow arrow-left"></div>
            <div className="automation-arrow arrow-top"></div>
            <div className="automation-arrow arrow-bottom"></div>
          </div>
        </div>
        
        {/* Timeline Skills Section */}
        <div className="timeline-skills py-10">
          {timelineSkills.map((skillGroup, idx) => (
            <div key={idx} className="timeline-item" style={{ animationDelay: `${idx * 0.3}s` }}>
              <div className="timeline-marker"></div>
              <h3 className="text-2xl font-bold text-white mb-6">{skillGroup.category}</h3>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-8">
                {skillGroup.items.map((skill, skillIdx) => (
                  <div 
                    key={skillIdx}
                    className="timeline-skill-card"
                    style={{ animationDelay: `${idx * 0.3 + skillIdx * 0.15}s` }}
                  >
                    <div className="text-white hover:text-gold transition-colors">
                      {skill.icon}
                    </div>
                    <span className="text-sm font-medium text-white">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
