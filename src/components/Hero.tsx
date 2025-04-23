
export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16">
      <div className="container text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
          Hi, I'm Your Name
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Full Stack Developer
        </p>
        <p className="max-w-2xl mx-auto text-muted-foreground animate-fade-in" style={{ animationDelay: "0.4s" }}>
          I build exceptional and accessible digital experiences for the web.
        </p>
      </div>
    </section>
  );
}
