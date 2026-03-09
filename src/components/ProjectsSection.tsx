import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Full-stack E-Commerce Web Application",
    description:
      "A complete e-commerce app with product listings, collections, checkout, cart management with Context API, and secure authentication.",
    techStack: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
    date: "January 2025",
    githubUrl: "https://github.com/deepa-kale",
  },
  {
    title: "YapGPT – TCP Cyber-Threat Detection System",
    description:
      "Senior capstone project detecting cyber threats by analyzing large-scale TCP traffic logs using CNN for anomaly classification, achieving ~94–96% training accuracy.",
    techStack: ["Python", "CNN", "TensorFlow", "NumPy", "Pandas"],
    date: "December 2025",
    githubUrl: "https://github.com/deepa-kale",
  },
  {
    title: "Hurricane Relief System – SQL Project",
    description:
      "Designed normalized SQL schemas to model evacuees, shelters, rescue teams, and volunteers for simulating real-world disaster response scenarios.",
    techStack: ["SQL", "Data Modeling", "ER Diagrams"],
    date: "January 2025",
    githubUrl: "https://github.com/deepa-kale",
  },
  {
    title: "TODO - Be Productive",
    description:
      "A simple yet effective task management system with a clean, intuitive interface to add, track, edit, and delete daily tasks. Features a welcoming front page greeting users before they dive in.",
    techStack: ["Next.js", "React", "CSS", "JavaScript", "Google Fonts"],
    date: "",
    githubUrl: "https://github.com/deepa-kale",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-container bg-card/50">
      <div className="max-w-5xl mx-auto pr-24 lg:pr-32">
        <h2 className="section-title">Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card flex flex-col"
            >
              <div className="mb-2">
                <span className="text-xs text-muted-foreground">{project.date}</span>
              </div>
              
              <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground text-sm mb-4 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.techStack.map((tech) => (
                  <span key={tech} className="tech-tag text-xs">
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-github w-fit"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                View on GitHub
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
