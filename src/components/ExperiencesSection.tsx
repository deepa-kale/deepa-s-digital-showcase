const experiences = [
  {
    title: "LYFE Mentor Program",
    organization: "Whitacre College of Engineering (WCOE)",
    role: "Peer Mentor — Sponsored by ConocoPhillips",
    period: "August 2024 – Present",
    description: [
      "Providing academic support and guidance to first-year engineering students transitioning into the discipline",
      "Helping mentees navigate challenges and connect with engineering resources and organizations",
    ],
  },
  {
    title: "Tech Robotics Association",
    organization: "Lubbock, TX",
    role: "Public Relations Officer",
    period: "June 2023 – Present",
    description: [
      "Coordinating outreach and volunteering for local robotics events",
      "Collaborating with student organizations to provide robotics opportunities for K–12 students",
    ],
  },
  {
    title: "Society of Women Engineers (SWE)",
    organization: "Lubbock, TX",
    role: "Outreach Committee",
    period: "August 2023 – Present",
    description: [
      "Planning outreach and service events to strengthen SWE's engagement with the campus community",
    ],
  },
  {
    title: "Student Development and Engagement",
    organization: "Lubbock, TX",
    role: "Peer Mentor, Raider Ready Program & Tech Leadership Institute",
    period: "January 2023 – June 2024",
    description: [
      "Mentored 40 first-year and transfer students across two semesters in the Raider Ready Program",
      "Led growth-focused activities to build academic and leadership skills",
      "Served as Office Assistant, organizing data and handling administrative tasks",
    ],
  },
];

const ExperiencesSection = () => {
  return (
    <section id="experiences" className="section-container">
      <div className="max-w-5xl mx-auto pr-24 lg:pr-32">
        <h2 className="section-title">Experiences</h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="experience-card ml-0 md:ml-8 relative"
              >
                {/* Timeline dot */}
                <div className="absolute -left-[41px] top-6 w-4 h-4 bg-primary rounded-full hidden md:block" />
                
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="font-display font-semibold text-xl text-foreground">
                      {exp.title}
                    </h3>
                    <p className="text-primary font-medium">{exp.role}</p>
                    <p className="text-muted-foreground text-sm">{exp.organization}</p>
                  </div>
                  <span className="text-sm text-muted-foreground whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>
                
                <ul className="list-disc list-inside space-y-1">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-muted-foreground">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperiencesSection;
