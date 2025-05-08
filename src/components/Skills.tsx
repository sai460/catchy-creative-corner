
import { 
  Terminal, 
  Server, 
  Database, 
  Cloud, 
  Code, 
  GitBranch,
  GitMerge,
  GitPullRequest 
} from "lucide-react";

export function Skills() {
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

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container max-w-5xl">
        <h2 className="text-3xl font-bold mb-12 text-center text-classicBlue">Skills & Technologies</h2>
        
        <div className="space-y-12">
          {skills.map((skillGroup, idx) => (
            <div key={idx} className="animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
              <h3 className="text-xl font-semibold mb-6 text-turquoise">{skillGroup.category}</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {skillGroup.items.map((skill, skillIdx) => (
                  <div 
                    key={skillIdx}
                    className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-secondary/20 hover:border-classicBlue"
                  >
                    <div className="mb-3 text-turquoise hover:text-classicBlue transition-colors">
                      {skill.icon}
                    </div>
                    <span className="text-sm font-medium">{skill.name}</span>
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
