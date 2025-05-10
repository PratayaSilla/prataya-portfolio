import { useRef, useEffect } from 'react';
import './ProjectsSection.css';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Learnio",
      description: "This project is under construction 🚧. Could be the best, So its here!",
      tags: ["Surprise", "Surprise", "Surprise"],
      accentColor: "#049EF4",
      link: "/" 
    },
    {
      title: "Portfolio Template",
      description: "Your custom devfolio !",
      tags: ["HTML", "CSS", "React"],
      accentColor: "#A259FF",
      link: "https://portfolio-template-beta-olive.vercel.app/" 
    },
    {
      title: "AI Image Generator",
      description: "Frontend landing page of an AI Image generator",
      tags: ["HTML", "CSS", "React"],
      accentColor: "#FF6347",
      link: "https://progenix-ai.vercel.app/" 
    },
    {
      title: "You came for Designs?",
      description: "Click here to explore my work✨",
      tags: ["Adobe XD", "Figma"],
      accentColor: "#ffd700",
      link: "https://github.com/PratayaSilla" 
    }
  ];

  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll('.project-tile');
      elements.forEach(el => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  const handleProjectClick = (link) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="projects" className="projects-section" ref={sectionRef}>
      <div className="section-header">
        <h2 className="section-title">
          <span className="yellow">/</span>featured-projects
        </h2>
        <p className="section-subtitle">
          <span className="teal">Things I've built</span> with <span className="pink">passion</span> and 
          <span className="orange"> cutting-edge tech</span>
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div 
            key={index}
            className="project-tile"
            style={{ '--accent-color': project.accentColor }}
            data-index={index}
            onClick={() => handleProjectClick(project.link)}
            role="button"
            tabIndex={0}
          >
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="tag">{tag}</span>
                ))}
              </div>
            </div>
            <div className="project-overlay"></div>
            <div className="project-border"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;