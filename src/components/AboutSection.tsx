const skills = {
  languages: ["Java", "Python", "C/C++", "SQL (Postgres)", "JavaScript", "HTML", "CSS"],
  frameworks: ["React", "Node.js", "Express.js", "Tailwind CSS", "REST APIs", "pandas", "NumPy", "Matplotlib"],
  tools: ["Git", "MongoDB", "Google Cloud Platform", "VS Code", "Visual Studio", "JupyterLab", "Postman", "MATLAB"],
};

const AboutSection = () => {
  return (
    <section id="about" className="section-container bg-card/50">
      <div className="max-w-5xl mx-auto pr-24 lg:pr-32">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Bio */}
          <div className="space-y-4">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm Deepa Kale, a senior Computer Science student at Texas Tech University, 
              graduating in May 2026. With a 3.5 GPA, I've built a strong foundation in 
              software development and love creating solutions that make a difference.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Beyond coding, I'm deeply involved in mentorship and leadership roles—from 
              guiding first-year engineering students to coordinating K–12 robotics outreach. 
              I believe in giving back to the community that has supported my growth.
            </p>
            <div className="pt-4">
              <p className="text-foreground font-medium">
                📍 Lubbock, TX
              </p>
              <p className="text-foreground font-medium">
                📧 dekale@ttu.edu
              </p>
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-6">
            <div>
              <h3 className="font-display font-semibold text-lg mb-3 text-foreground">
                Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((skill) => (
                  <span key={skill} className="tech-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-display font-semibold text-lg mb-3 text-foreground">
                Frameworks & Libraries
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.frameworks.map((skill) => (
                  <span key={skill} className="tech-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-display font-semibold text-lg mb-3 text-foreground">
                Developer Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill) => (
                  <span key={skill} className="tech-tag">
                    {skill}
                  </span>
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
