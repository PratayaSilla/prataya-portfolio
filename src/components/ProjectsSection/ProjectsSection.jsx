import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ProjectsSection.css";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Learnio",
      description: "This project is under construction 🚧. Could be the best, So its here!",
      tags: ["Surprise", "Surprise", "Surprise"],
      accentColor: "#049EF4",
      link: "/",
      image: "./learnio.png"
    },
    {
      title: "Portfolio Template",
      description: "Your custom devfolio!",
      tags: ["HTML", "CSS", "React"],
      accentColor: "#A259FF",
      link: "https://portfolio-template-beta-olive.vercel.app/",
      image: "./ptemplate.png"
    },
    {
      title: "AI Image Generator",
      description: "Frontend landing page of an AI Image generator",
      tags: ["HTML", "CSS", "React"],
      accentColor: "#FF6347",
      link: "https://progenix-ai.vercel.app/",
      image: "./aihero.png"
    },
    {
      title: "More",
      description: "Click here to explore my work✨",
      tags: ["My GitHub Profile"],
      accentColor: "#ffd700",
      link: "https://github.com/PratayaSilla",
      image: "./more.svg"
    },
    {
      title: "You came for Designs?",
      description: "Click here to explore my designs🎨",
      tags: ["Adobe XD", "Figma"],
      accentColor: "#fff",
      link: "/figma-designs",
      image: "./Cover.png"
    }
  ];

  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll(".project-tile");
      elements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  const handleProjectClick = (link, isExternal) => {
    if (isExternal) {
      window.open(link, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section id="projects" className="projects-section" ref={sectionRef}>
      <div className="section-header">
        <h2 className="section-title">
          <span className="yellow">/</span>featured-projects
        </h2>
        <p className="section-subtitle">
          <span className="teal">Things I've built</span> with{" "}
          <span className="pink">passion</span> and
          <span className="orange"> cutting-edge tech</span>
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => {
          const isExternal = project.link.startsWith("http");
          
          return isExternal ? (
            <div
              key={index}
              className="project-tile"
              style={{ "--accent-color": project.accentColor }}
              onClick={() => handleProjectClick(project.link, true)}
              role="button"
              tabIndex={0}
            >
              <div className="project-image-container">
                <img src={project.image} alt={project.title} className="project-image" />
              </div>
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
          ) : (
            <Link 
              to={project.link}
              key={index}
              className="project-link-wrapper"
              style ={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
            >
              <div 
                className="project-tile"
                style={{ "--accent-color": project.accentColor }}
              >
                <div className="project-image-container">
                  <img src={project.image} alt={project.title} className="project-image" />
                </div>
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
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;