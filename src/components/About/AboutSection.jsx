import { useRef, useEffect } from 'react';
import './AboutSection.css';

const AboutSection = () => {
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
      const elements = sectionRef.current.querySelectorAll('.animate-on-scroll');
      elements.forEach(el => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  const techStack = [
    { name: "React", color: "#61DAFB" },
    { name: "Node.js", color: "#68A063" },
    { name: "Three.js", color: "#049EF4" },
    { name: "Figma", color: "#A259FF" },
    { name: "GSAP", color: "#88CE02" },
    { name: "Firebase", color: "#FFCA28" },
  ];

  return (
    <section id="about" className="about-section" ref={sectionRef}>
      <div className="about-container">
        <div className="about-content animate-on-scroll">
          <h2 className="section-title">
            <span className="yellow">/</span>about-me
          </h2>
          <p className="about-text">
            I'm a <span className="teal">creative developer</span> who builds 
            digital experiences that <span className="orange">blend design</span> 
            and <span className="pink">technology</span>. With a background in 
            both <span className="yellow">UI/UX</span> and 
            <span className="teal"> full-stack development</span>, I bridge the gap 
            between aesthetics and functionality.
          </p>
        </div>

        <div className="skills-container">
          <h3 className="skills-title animate-on-scroll">
            <span className="orange">#</span>tech-stack
          </h3>

          <div className="skills-grid">
            {techStack.map((tech, index) => (
              <div 
                key={tech.name}
                className="skill-item animate-on-scroll"
                style={{ 
                  '--skill-color': tech.color,
                  '--delay': `${index * 0.1}s`
                }}
              >
                <div className="skill-icon">
                  <div className="skill-dot"></div>
                </div>
                <span className="skill-name">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="fun-fact animate-on-scroll">
          <div className="fact-bubble">
            <span className="fact-icon">💡</span>
            <p>
              Fun fact: I once built a <span className="yellow">3D portfolio</span> that 
              accidentally <span className="pink">crashed</span> browsers on 
              <span className="teal"> mobile devices</span>! Learned about 
              <span className="orange"> performance optimization</span> the hard way.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;