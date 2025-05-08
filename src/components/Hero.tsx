
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { useEffect } from "react";

export function Hero() {
  const socialLinks = [
    { 
      icon: Github, 
      href: "https://github.com/Mohan-Sai-Yeadla", 
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
      href: "mailto:mohansaiy123@gmail.com", 
      label: "Email",
      color: "text-turquoise hover:text-classicBlue"
    },
  ];

  useEffect(() => {
    // Add animation for elements with devops-connect class
    const animateDevOpsConnectors = () => {
      const connectors = document.querySelectorAll('.devops-connect');
      connectors.forEach((connector, index) => {
        setTimeout(() => {
          connector.classList.add('active');
          setTimeout(() => {
            connector.classList.remove('active');
          }, 1500);
        }, index * 2000);
      });
    };

    // Start animation loop
    const interval = setInterval(animateDevOpsConnectors, 6000);
    animateDevOpsConnectors(); // Run animation immediately

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-[90vh] flex flex-col justify-center pt-10 pb-20 hero-gradient relative overflow-hidden">
      <div className="absolute inset-0 z-0 devops-animation-bg">
        <div className="hidden md:block">
          {/* DevOps Icons and Connection Lines */}
          <div className="devops-icon code-icon">
            <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none">
              <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#33C3F0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9.6 8.97L7.11 11.46L9.6 13.95" stroke="#33C3F0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M14.4 8.97L16.89 11.46L14.4 13.95" stroke="#33C3F0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Code</span>
          </div>
          
          <div className="devops-connect code-to-build"></div>
          
          <div className="devops-icon build-icon">
            <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none">
              <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="#1EAEDB" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M5.8 5.8L18.2 18.2" stroke="#1EAEDB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 2C14.4 2 16.5 6.5 16.5 12C16.5 17.5 14.4 22 12 22C9.6 22 7.5 17.5 7.5 12C7.5 6.5 9.6 2 12 2Z" stroke="#1EAEDB" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12H22" stroke="#1EAEDB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Build</span>
          </div>
          
          <div className="devops-connect build-to-test"></div>
          
          <div className="devops-icon test-icon">
            <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none">
              <path d="M20.01 18.51L15.06 13.56" stroke="#FFD700" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M15.06 13.56L11.52 17.1C10.74 17.88 9.47 17.88 8.69 17.1L4.45 12.86C3.67 12.08 3.67 10.81 4.45 10.03L11.52 2.96C12.3 2.18 13.57 2.18 14.35 2.96L18.59 7.2C19.37 7.98 19.37 9.25 18.59 10.03L15.06 13.56Z" stroke="#FFD700" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 22.0001H8" stroke="#FFD700" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6.56 7.92L13.63 14.99" stroke="#FFD700" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Test</span>
          </div>
          
          <div className="devops-connect test-to-deploy"></div>
          
          <div className="devops-icon deploy-icon">
            <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none">
              <path d="M12 5V19" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M5 12H19" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Deploy</span>
          </div>
          
          <div className="devops-connect deploy-to-monitor"></div>
          
          <div className="devops-icon monitor-icon">
            <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none">
              <path d="M8.5 19H8C4 19 2 18 2 13V8C2 4 4 2 8 2H16C20 2 22 4 22 8V13C22 17 20 19 16 19H15.5C15.19 19 14.89 19.15 14.7 19.4L13.2 21.4C12.54 22.28 11.46 22.28 10.8 21.4L9.3 19.4C9.14 19.18 8.77 19 8.5 19Z" stroke="#33C3F0" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M7 8H17" stroke="#33C3F0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M7 13H13" stroke="#33C3F0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Monitor</span>
          </div>
          
          <div className="devops-connect monitor-to-code"></div>
        </div>
      </div>
    
      <div className="container max-w-5xl relative z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-7xl font-bold animate-fade-in text-classicBlue">
            Venkata Sai Mohan Yedla
          </h1>
          <p className="text-xl md:text-3xl text-turquoise animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Software Engineer & DevOps Engineer
          </p>
          <p className="max-w-2xl text-muted-foreground text-lg animate-fade-in" style={{ animationDelay: "0.4s" }}>
            Experienced in full-stack development and DevOps practices, building scalable applications and streamlining deployment processes.
          </p>
          
          <div className="flex items-center gap-4 pt-4 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`hover:scale-110 transition-transform ${link.color}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
              >
                <link.icon className="h-6 w-6" />
              </a>
            ))}
          </div>

          <div className="pt-6 animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <a href="#projects">
              <Button className="group bg-classicBlue hover:bg-turquoise">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
