import { Mail, Linkedin, Github, Download } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-6 lg:px-16">
      <div className="max-w-3xl mx-auto pr-24 lg:pr-32 text-center">
        <h2 className="section-title">Get In Touch</h2>

        <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto leading-relaxed">
          Seeking full-time <span className="text-foreground font-medium">software engineering, machine learning, or data-focused</span> roles starting summer 2026. Open to connecting about opportunities, projects, and collaboration.
        </p>

        <div className="flex flex-wrap gap-3 justify-center items-center">
          <a href="mailto:dekale@ttu.edu" className="btn-hero inline-flex items-center gap-2">
            <Mail className="w-5 h-5" />
            Email Me
          </a>
          <a
            href="https://linkedin.com/in/deepa-kale"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-github inline-flex items-center gap-2"
          >
            <Linkedin className="w-5 h-5" />
            LinkedIn
          </a>
          <a
            href="https://github.com/deepa-kale"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-github inline-flex items-center gap-2"
          >
            <Github className="w-5 h-5" />
            GitHub
          </a>
          <a
            href="/Deepa_Kale_Resume.pdf"
            download
            className="btn-github inline-flex items-center gap-2"
          >
            <Download className="w-5 h-5" />
            Resume
          </a>
        </div>

        <div className="mt-16 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Deepa Kale · Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
