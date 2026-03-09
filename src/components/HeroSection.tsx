import geometricCube from "@/assets/geometric-cube.png";
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
      className="section-container relative flex items-center min-h-screen overflow-hidden bg-pattern"
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

      <div className="max-w-7xl mx-auto w-full pr-24 lg:pr-32">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left content */}
          <div className="z-10 space-y-6">
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

          {/* Right - Geometric cube and avatar */}
          <div className="relative flex items-center justify-center">
            {/* Geometric cube */}
            <div className="relative w-64 md:w-80 lg:w-96 animate-float">
              <img
                src={geometricCube}
                alt="Geometric 3D cube"
                className="w-full h-auto drop-shadow-2xl"
              />
            </div>

            {/* Avatar positioned to the right of cube */}
            <div className="absolute right-0 lg:right-[-40px] bottom-1/4 w-32 md:w-40 lg:w-48 animate-float-delayed">
              <img
                src={avatar}
                alt="Pixel art avatar"
                className="w-full h-auto drop-shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
