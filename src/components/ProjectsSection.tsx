import { ExternalLink } from "lucide-react";

type Project = {
  title: string;
  description: string;
  highlights?: string[];
  techStack: string[];
  date?: string;
  githubUrl: string;
};

const featuredProjects: Project[] = [
  {
    title: "F1 Points Predictor",
    description:
      "Streamlit machine learning app that predicts a driver's expected Formula 1 race points from race, team, driver, and qualifying position. Includes data preparation, baseline model training, saved-model inference, and an interactive dashboard.",
    highlights: ["End-to-end ML pipeline", "Interactive dashboard", "Saved-model inference"],
    techStack: ["Python", "Streamlit", "scikit-learn", "Pandas", "NumPy"],
    githubUrl: "https://github.com/deepa-kale/F1-points-predictor",
  },
  {
    title: "YapGPT — TCP Cyber-Threat Detection System",
    description:
      "Senior capstone detecting cyber threats in large-scale TCP traffic logs using a CNN for anomaly classification of the three-way handshake. Built preprocessing pipelines and a CLI that outputs analyst-friendly reports.",
    highlights: ["~94–96% training accuracy", "CNN anomaly classifier", "CLI report tool"],
    techStack: ["Python", "TensorFlow", "CNN", "Pandas", "NumPy"],
    date: "December 2025",
    githubUrl: "https://github.com/deepa-kale",
  },
  {
    title: "Hurricane Relief System — SQL Project",
    description:
      "Normalized SQL database for managing evacuees, shelters, rescue teams, and volunteers in a disaster-response scenario. Focused on schema design, ER modeling, and structured data management.",
    highlights: ["Normalized schema design", "ER diagrams", "Team-built"],
    techStack: ["SQL", "PostgreSQL", "Data Modeling"],
    date: "January 2025",
    githubUrl: "https://github.com/deepa-kale",
  },
];

const additionalProjects: Project[] = [
  {
    title: "Full-stack E-Commerce Web App",
    description:
      "Full-stack e-commerce app with product browsing, cart management, checkout flow, and a Node/Express backend with MongoDB. Focused on clean UI structure and end-to-end implementation.",
    techStack: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
    date: "January 2025",
    githubUrl: "https://github.com/deepa-kale",
  },
  {
    title: "TODO — Be Productive",
    description:
      "Lightweight productivity app for managing daily tasks with a clean interface and responsive interaction flow.",
    techStack: ["Next.js", "React", "JavaScript"],
    githubUrl: "https://github.com/deepa-kale",
  },
];

const GitHubIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const FeaturedCard = ({ project }: { project: Project }) => (
  <article className="project-card flex flex-col h-full">
    <div className="flex items-start justify-between gap-3 mb-2">
      <h3 className="font-display font-semibold text-lg text-foreground leading-snug">
        {project.title}
      </h3>
      {project.date && (
        <span className="text-xs text-muted-foreground whitespace-nowrap pt-1">{project.date}</span>
      )}
    </div>

    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.description}</p>

    {project.highlights && (
      <ul className="mb-4 space-y-1.5">
        {project.highlights.map((h) => (
          <li key={h} className="text-sm text-foreground/80 flex items-start gap-2">
            <span className="text-primary mt-1.5 w-1 h-1 rounded-full bg-primary flex-shrink-0" />
            {h}
          </li>
        ))}
      </ul>
    )}

    <div className="flex flex-wrap gap-1.5 mb-4 mt-auto">
      {project.techStack.map((tech) => (
        <span key={tech} className="tech-tag text-xs">{tech}</span>
      ))}
    </div>

    <a
      href={project.githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="btn-github w-fit"
      aria-label={`View ${project.title} on GitHub`}
    >
      <GitHubIcon />
      View on GitHub
      <ExternalLink className="w-3 h-3" />
    </a>
  </article>
);

const CompactCard = ({ project }: { project: Project }) => (
  <article className="bg-card rounded-xl p-5 border border-border hover:border-primary/40 transition-colors flex flex-col gap-3">
    <h3 className="font-display font-semibold text-base text-foreground">{project.title}</h3>
    <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
    <div className="flex flex-wrap gap-1.5">
      {project.techStack.map((tech) => (
        <span key={tech} className="tech-tag text-xs">{tech}</span>
      ))}
    </div>
    <a
      href={project.githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="text-sm text-primary hover:underline inline-flex items-center gap-1.5 w-fit"
    >
      <GitHubIcon /> GitHub <ExternalLink className="w-3 h-3" />
    </a>
  </article>
);

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-container bg-card/50">
      <div className="max-w-5xl mx-auto pr-24 lg:pr-32">
        <h2 className="section-title">Projects</h2>

        <div className="mb-6">
          <h3 className="font-display font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-4">
            Featured Work
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((p) => (
              <FeaturedCard key={p.title} project={p} />
            ))}
          </div>
        </div>

        <div className="mt-12">
          <h3 className="font-display font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-4">
            Additional Projects
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {additionalProjects.map((p) => (
              <CompactCard key={p.title} project={p} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
