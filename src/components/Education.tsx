
import { GraduationCap } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="py-20 bg-gradient-to-br from-white to-secondary/5">
      <div className="container max-w-5xl">
        <h2 className="text-3xl font-bold mb-8 text-classicBlue">Education</h2>
        <div className="flex flex-col gap-8">
          <div className="education-card bg-white/50 p-6 rounded-lg border border-secondary/20 hover:border-classicBlue transition-all duration-300 shadow-sm hover:shadow">
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-classicBlue/10 flex items-center justify-center">
                  <GraduationCap className="h-8 w-8 text-classicBlue" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-classicBlue">University Of New Haven</h3>
                <p className="text-turquoise font-medium">Masters in Computer Engineering</p>
                <p className="text-muted-foreground mt-1">Aug 2023 - Dec 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
