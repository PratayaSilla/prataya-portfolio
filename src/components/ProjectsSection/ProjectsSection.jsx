import { useRef, useEffect } from 'react';
import './ProjectsSection.css';

const ProjectsSection = () => {
  const projects = [
    {
      title: "3D Portfolio Experience",
      description: "Immersive WebGL portfolio with custom shaders",
      tags: ["Three.js", "GSAP", "GLSL"],
      accentColor: "#049EF4"
    },
    {
      title: "AI Music Generator",
      description: "Machine learning app that creates original compositions",
      tags: ["TensorFlow.js", "React", "Node"],
      accentColor: "#A259FF"
    },
    {
      title: "AR Shopping Assistant",
      description: "Mobile AR app for virtual product try-ons",
      tags: ["ARKit", "Swift", "Firebase"],
      accentColor: "#FF6347"
    },
    {
      title: "Blockchain Dashboard",
      description: "Real-time crypto analytics visualization",
      tags: ["Web3.js", "D3.js", "Ethereum"],
      accentColor: "#68A063"
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