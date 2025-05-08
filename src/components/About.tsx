
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white to-secondary/10">
      <div className="container max-w-5xl">
        <h2 className="text-3xl font-bold mb-8 text-classicBlue">About Me</h2>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-shrink-0">
            <div className="relative">
              <Avatar className="h-48 w-48 border-4 border-classicBlue shadow-lg overflow-hidden">
                <AvatarImage 
                  src="/lovable-uploads/5c08b9d2-5006-4ea4-b994-3dd994281d77.png" 
                  alt="Venkata Sai Mohan Yedla"
                  className="object-cover scale-125 object-center"
                />
                <AvatarFallback className="text-2xl bg-turquoise text-white">VSM</AvatarFallback>
              </Avatar>
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-classicBlue/30 to-transparent opacity-60"></div>
              <div className="absolute -inset-1 bg-gradient-to-tr from-classicBlue to-turquoise rounded-full blur-md opacity-30"></div>
            </div>
          </div>
          <div className="space-y-6 text-lg">
            <p className="text-foreground">
              I am a versatile professional with experience as both a Software Engineer and DevOps Engineer. My expertise spans across full-stack development and infrastructure management, allowing me to bridge the gap between development and operations effectively.
            </p>
            <p className="text-foreground">
              Throughout my career, I've focused on building scalable applications while implementing efficient CI/CD pipelines and infrastructure automation. I'm passionate about leveraging technology to solve complex problems and improve development workflows.
            </p>
            <p className="text-foreground">
              I enjoy working with modern technologies and frameworks to create robust and efficient solutions that meet business requirements while maintaining high quality standards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
