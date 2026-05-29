import avatar from "@/assets/avatar.png";
import geometricCube from "@/assets/geometric-cube.png";
import { Download, ArrowRight, Github } from "lucide-react";

const HeroSection = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="section-container relative flex items-center justify-center min-h-screen overflow-hidden bg-pattern"
    >
      {/* Geometric cube - subtle background element */}
      <div className="absolute inset-0 flex items-center justify-end pointer-events-none">
        <img
          src={geometricCube}
          alt=""
          aria-hidden="true"
          className="w-[320px] md:w-[420px] lg:w-[520px] h-auto opacity-20 animate-float mr-16 lg:mr-32"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto pr-28 lg:pr-36 flex items-center justify-between gap-8">
        <div className="flex flex-col gap-6 max-w-2xl">
          <span className="inline-flex items-center gap-2 self-start text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Open to full-time roles · May 2026
          </span>

          <h1 className="hero-title">
            Computer Science Graduate Building{" "}
            <span className="text-hero-accent">Data-Driven Applications</span>{" "}
            and ML Projects
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed">
            I'm a May 2026 Computer Science graduate focused on software
            engineering, machine learning, and data-driven products. I build
            practical projects in Python, data science, and full-stack
            development with an emphasis on clean implementation and real-world
            problem solving.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button onClick={scrollToProjects} className="btn-hero inline-flex items-center gap-2">
              View Projects <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="/Deepa_Kale_Resume.pdf"
              download
              className="btn-github inline-flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
            <a
              href="https://github.com/deepa-kale"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1.5 underline-offset-4 hover:underline"
            >
              <Github className="w-4 h-4" />
              github.com/deepa-kale
            </a>
          </div>
        </div>

        <div className="hidden lg:block w-32 xl:w-40 flex-shrink-0 animate-float-delayed">
          <img src={avatar} alt="Pixel art avatar of Deepa Kale" className="w-full h-auto drop-shadow-lg" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
