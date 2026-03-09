import avatar from "@/assets/avatar.png";

const HeroSection = () => {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="section-container relative flex items-center justify-center min-h-screen overflow-hidden bg-pattern"
    >
      {/* Background dots decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="connection-dot animate-pulse"
            style={{
              left: `${Math.random() * 80}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-3xl mx-auto w-full pr-24 lg:pr-32 text-center flex flex-col items-center gap-6">
        {/* Avatar */}
        <div className="w-40 md:w-48 lg:w-56 animate-float">
          <img
            src={avatar}
            alt="Pixel art avatar"
            className="w-full h-auto drop-shadow-lg"
          />
        </div>

        <h1 className="hero-title">
          Hello, I'm{" "}
          <span className="text-hero-accent">Deepa Kale</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
          I'm a final-year Computer Science student at Texas Tech University
          passionate about building full-stack applications and solving
          real-world problems with technology. I love working on high-impact
          projects and collaborating with amazing teams.
        </p>
        <button onClick={scrollToProjects} className="btn-hero">
          View Projects
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
