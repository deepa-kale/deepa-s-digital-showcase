const skills = {
  languages: ["Python", "Java", "C/C++", "SQL (Postgres)", "JavaScript", "HTML", "CSS"],
  frameworks: ["React", "Node.js", "Express.js", "Tailwind CSS", "REST APIs", "pandas", "NumPy", "scikit-learn", "TensorFlow", "Streamlit", "Matplotlib"],
  tools: ["Git", "MongoDB", "Google Cloud Platform", "JupyterLab", "Postman", "VS Code", "MATLAB"],
};

const AboutSection = () => {
  return (
    <section id="about" className="section-container bg-card/50">
      <div className="max-w-5xl mx-auto pr-24 lg:pr-32">
        <h2 className="section-title">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm Deepa Kale, a senior Computer Science student at Texas Tech
              University graduating in May 2026. My interests sit at the
              intersection of <span className="text-foreground font-medium">software engineering, machine learning, and data analysis</span>—building
              tools that turn data into something useful.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I enjoy taking projects from idea to working product: cleaning
              the data, training the model, and shipping a clean interface
              around it. I work well on collaborative teams and care about
              clear code, good documentation, and shipping real outcomes.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm actively seeking full-time opportunities in software
              engineering, ML, or data-focused roles.
            </p>
            <div className="pt-4 space-y-1">
              <p className="text-foreground font-medium">📍 Lubbock, TX</p>
              <p className="text-foreground font-medium">📧 dekale@ttu.edu</p>
              <p className="text-foreground font-medium">🎓 B.S. Computer Science · GPA 3.5</p>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="font-display font-semibold text-lg mb-3 text-foreground">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((s) => (
                  <span key={s} className="tech-tag">{s}</span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-display font-semibold text-lg mb-3 text-foreground">Frameworks & Libraries</h3>
              <div className="flex flex-wrap gap-2">
                {skills.frameworks.map((s) => (
                  <span key={s} className="tech-tag">{s}</span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-display font-semibold text-lg mb-3 text-foreground">Developer Tools</h3>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((s) => (
                  <span key={s} className="tech-tag">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
