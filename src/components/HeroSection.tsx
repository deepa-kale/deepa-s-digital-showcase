import avatar from "@/assets/avatar.png";
import geometricCube from "@/assets/geometric-cube.png";

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
      {/* Geometric cube - centered background element */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <img
          src={geometricCube}
          alt=""
          className="w-[500px] md:w-[650px] lg:w-[800px] h-auto opacity-70 animate-float"
        />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 w-full max-w-6xl mx-auto pr-28 lg:pr-36 flex items-center justify-between">
        {/* Text content - left/center */}
        <div className="flex flex-col gap-6 max-w-xl">
          <h1 className="hero-title">
            Hello, I'm{" "}
            <span className="text-hero-accent">Deepa Kale</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            I'm a final-year Computer Science student at Texas Tech University
            passionate about building full-stack applications and solving
            real-world problems with technology. I love working on high-impact
            projects and collaborating with amazing teams.
          </p>
          <div>
            <button onClick={scrollToProjects} className="btn-hero">
              View Projects
            </button>
          </div>
        </div>

        {/* Avatar - right side, in front of cube */}
        <div className="hidden md:block w-36 lg:w-48 flex-shrink-0 animate-float-delayed">
          <img
            src={avatar}
            alt="Pixel art avatar"
            className="w-full h-auto drop-shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
