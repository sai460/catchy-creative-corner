
import { Quote } from "lucide-react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Testimonial {
  id: number;
  name: string;
  position: string;
  message: string;
  date: string;
  image: string;
}

export function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Ali Shahid",
      position: "Team Lead",
      message: "Working with Mohan has been an absolute pleasure. His problem-solving abilities and attention to detail consistently brought clarity and structure to our complex DevOps pipelines. He takes ownership, communicates effectively, and delivers with precision. I would gladly work with him on any future project.",
      date: "April 15, 2025",
      image: '/lovable-uploads/0106b6f9-427b-40a0-991d-c8cadfadc871.png'
    },
    {
      id: 2,
      name: "Robiul Islam",
      position: "DevOps Lead",
      message: "Mohan impressed me with his proactive mindset and mastery of DevOps practices. He consistently delivered automation scripts and CI/CD enhancements that improved our deployment cycles. His commitment to learning and adapting to challenges sets him apart as a dependable engineer.",
      date: "April 22, 2025",
      image: '/lovable-uploads/5d03a807-b66b-43e7-b917-57f09c34b05f.png'
    },
    {
      id: 3,
      name: "Divya Harshita Pasapula",
      position: "Team Member",
      message: "Mohan is not only technically skilled but also incredibly supportive as a teammate. Whether it was debugging tricky deployment issues or optimizing infrastructure, he always ensured the team moved forward smoothly. His positive energy and dedication made working together a great experience.",
      date: "April 20, 2025", 
      image: '/lovable-uploads/344c0732-4581-4a7e-b13f-bc5cc7fbccca.png'
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-secondary/5 to-white">
      <div className="container max-w-5xl">
        <div className="flex items-center gap-3 mb-12">
          <h2 className="text-3xl font-bold text-classicBlue">Testimonials</h2>
          <motion.div
            initial={{ scale: 1 }}
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, 0, -5, 0]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 4,
              repeatType: "loop",
              ease: "easeInOut"
            }}
            className="bg-classicBlue/10 rounded-full p-2"
          >
            <Quote className="h-8 w-8 text-classicBlue" />
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: testimonial.id * 0.1 }}
            >
              <Card className="h-full bg-white/70 backdrop-blur-sm border-secondary/20 hover:border-classicBlue transition-all duration-300">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12 border-2 border-classicBlue/30">
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg text-classicBlue">{testimonial.name}</CardTitle>
                      <CardDescription className="text-turquoise">{testimonial.position}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    <Quote className="absolute top-0 left-0 h-5 w-5 text-classicBlue/20 -translate-x-2 -translate-y-2" />
                    <p className="text-muted-foreground text-sm pt-2 italic leading-relaxed">
                      "{testimonial.message}"
                    </p>
                    <p className="text-xs text-muted-foreground/70 mt-4 text-right">{testimonial.date}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
