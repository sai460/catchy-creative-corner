
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      scrolled ? "bg-background/90 backdrop-blur-lg shadow-sm" : "bg-transparent"
    )}>
      <div className="container max-w-5xl flex items-center justify-between h-16">
        <a href="#" className={cn(
          "text-xl font-bold transition-colors",
          scrolled ? "text-classicBlue" : "text-classicBlue"
        )}>
          VSM
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={cn(
                "hover:text-classicBlue transition-colors",
                scrolled ? "text-foreground" : "text-foreground"
              )}
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
