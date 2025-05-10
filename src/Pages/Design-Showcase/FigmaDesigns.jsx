import { useRef, useEffect } from 'react';
import './FigmaDesigns.css';

const FigmaDesigns = () => {
  const designs = [
    {
      title: "Portfolio UI Kit",
      description: "Complete design system for developer portfolios",
      image: "/figma-1.jpg",
      link: "#"
    },
    {
      title: "3D App Concept",
      description: "Futuristic interface with spatial interactions",
      image: "/figma-2.jpg",
      link: "#"
    },
    {
      title: "Neon Dashboard",
      description: "Dark mode analytics dashboard with glow effects",
      image: "/figma-3.jpg",
      link: "#"
    },
    {
      title: "Wireframe Pack",
      description: "100+ customizable mobile wireframes",
      image: "/figma-4.jpg",
      link: "#"
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
      const cards = sectionRef.current.querySelectorAll('.design-card');
      cards.forEach((card, index) => {
        card.style.setProperty('--delay', `${index * 0.1}s`);
        observer.observe(card);
      });
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="figma-designs" className="figma-section" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">
          <span className="yellow">/</span>Love to see you here❤️
        </h2>
        <p className="section-subtitle">
          My <span className="teal">Figma creations</span> that blend <span className="orange">aesthetics</span> and <span className="pink">functionality</span>
        </p>

        <div className="designs-grid">
          {designs.map((design, index) => (
            <a 
              key={index}
              href={design.link}
              target="_blank"
              rel="noopener noreferrer"
              className="design-card"
              style={{ '--accent-color': ['#ffd700', '#4ecdc4', '#ff6347', '#f8a5c2'][index % 4] }}
            >
              <div className="card-image">
                <img src={design.image} alt={design.title} />
                <div className="image-overlay"></div>
              </div>
              <div className="card-content">
                <h3>{design.title}</h3>
                <p>{design.description}</p>
                <div className="view-link">
                  View in Figma <span className="arrow">→</span>
                </div>
              </div>
              <div className="card-border"></div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FigmaDesigns;