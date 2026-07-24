const experiences = [
  {
    title: "LYFE Mentor Program — Whitacre College of Engineering",
    role: "Peer Mentor · Sponsored by ConocoPhillips",
    period: "Aug 2024 – May 2026",
    description: [
      "Mentor first-year engineering students through their transition into the discipline, providing academic guidance and accountability.",
      "Connect mentees with engineering resources, student organizations, and study strategies that improve retention.",
    ],
  },
  {
    title: "Tech Robotics Association",
    role: "Public Relations Officer",
    period: "Jun 2023 – May 2026",
    description: [
      "Coordinate outreach and volunteer logistics for local robotics events serving K–12 students.",
      "Manage cross-organization communication and partnerships to expand program reach.",
    ],
  },
  {
    title: "Society of Women Engineers (SWE)",
    role: "Outreach Committee",
    period: "Aug 2023 – Present",
    description: [
      "Plan and execute outreach and service events that strengthen SWE's engagement across campus.",
    ],
  },
  {
    title: "Student Development and Engagement",
    role: "Peer Mentor · Raider Ready Program & Tech Leadership Institute",
    period: "Jan 2023 – Jun 2024",
    description: [
      "Mentored 40 first-year and transfer students across two semesters, coordinating check-ins and follow-up actions.",
      "Led growth-focused activities building academic, leadership, and time-management skills.",
      "Served as Office Assistant, organizing data and administrative workflows to keep operations on schedule.",
    ],
  },
];

const ExperiencesSection = () => {
  return (
    <section id="experiences" className="section-container">
      <div className="max-w-5xl mx-auto pr-24 lg:pr-32">
        <h2 className="section-title">Experience</h2>

        <div className="relative">
          <div className="absolute left-0 top-2 bottom-2 w-0.5 bg-border hidden md:block" />

          <div className="space-y-5">
            {experiences.map((exp, index) => (
              <article key={index} className="experience-card ml-0 md:ml-8 relative mb-0">
                <div className="absolute -left-[41px] top-7 w-3 h-3 bg-primary rounded-full ring-4 ring-background hidden md:block" />

                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1 md:gap-4 mb-3">
                  <div>
                    <h3 className="font-display font-semibold text-lg text-foreground leading-snug">
                      {exp.title}
                    </h3>
                    <p className="text-primary text-sm font-medium mt-0.5">{exp.role}</p>
                  </div>
                  <span className="text-sm text-muted-foreground whitespace-nowrap md:pt-1">
                    {exp.period}
                  </span>
                </div>

                <ul className="space-y-1.5">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-muted-foreground text-sm leading-relaxed flex gap-2">
                      <span className="text-primary mt-2 w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperiencesSection;
