
import { GraduationCap } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="py-20 bg-gradient-to-br from-white to-secondary/5">
      <div className="container max-w-5xl">
        <h2 className="text-3xl font-bold mb-8 text-classicBlue">Education</h2>
        <div className="flex flex-col gap-8">
          <div className="education-card bg-white/50 p-6 rounded-lg border border-secondary/20 hover:border-classicBlue transition-all duration-300 shadow-sm hover:shadow">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="flex-shrink-0">
                <img 
                  src="/lovable-uploads/d5aab48c-1b81-497f-bb74-4d1d750d8c74.png" 
                  alt="University of New Haven logo" 
                  className="w-24 h-24 object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-classicBlue">University Of New Haven</h3>
                <p className="text-turquoise font-medium">Masters in Computer Engineering</p>
                <p className="text-muted-foreground mt-1">Aug 2023 - Dec 2024</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Once a Charger, Always a Charger
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
