import React, { useEffect, useRef, useState } from 'react';
import './AboutSection.css';
import aboutPortrait from './assets/about-portrait.png';
import teamPortraits from './assets/team-portraits.png';

/* ── Scroll-triggered animation hook ── */
function useScrollReveal(options = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: options.threshold ?? 0.15, rootMargin: options.rootMargin ?? '0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, isVisible];
}

export default function AboutSection() {
  const [headerRef, headerVisible] = useScrollReveal({ threshold: 0.3 });
  const [headlineRef, headlineVisible] = useScrollReveal({ threshold: 0.2 });
  const [descRef, descVisible] = useScrollReveal({ threshold: 0.3 });
  const [socialsRef, socialsVisible] = useScrollReveal({ threshold: 0.5 });
  const [teamRef, teamVisible] = useScrollReveal({ threshold: 0.3 });

  return (
    <section className="about">
      {/* ─── Section Header Line ─── */}
      <div
        className={`about__header ${headerVisible ? 'about__header--visible' : ''}`}
        ref={headerRef}
      >
        <span className="about__section-num">[01]</span>
        <div className="about__header-line" />
        <span className="about__section-label">BUILT ON VISION</span>
      </div>

      {/* ─── Headline Row: "ABOUT" — image — "PRATAYA" ─── */}
      <div
        className={`about__headline-row ${headlineVisible ? 'about__headline-row--visible' : ''}`}
        ref={headlineRef}
      >
        <h2 className="about__title about__title--left">ABOUT</h2>

        <div className="about__portrait">
          <img
            src={aboutPortrait}
            alt="Creative team portrait"
            className="about__portrait-img"
          />
        </div>

        <h2 className="about__title about__title--right">PRATAYA</h2>
      </div>

      {/* ─── Description ─── */}
      <div
        className={`about__desc-wrapper ${descVisible ? 'about__desc-wrapper--visible' : ''}`}
        ref={descRef}
      >
        <p className="about__desc">
          Prataya is a creative mind built at the intersection of brand,
          design, and culture. I partner with visionary teams to build
          identities, systems, and stories that move people and markets.
          My mission is to shape meaningful experiences that are rooted
          in strategy and refined through design.
        </p>
      </div>

      {/* ─── Social Links ─── */}
      <div
        className={`about__socials ${socialsVisible ? 'about__socials--visible' : ''}`}
        ref={socialsRef}
      >
        <span className="about__social-bracket">[</span>
        <a href="#" className="about__social-link">INSTAGRAM.</a>
        <a href="#" className="about__social-link">CONTRA.</a>
        <a href="#" className="about__social-link">TWITTER/X</a>
        <span className="about__social-bracket">]</span>
      </div>

      {/* ─── Our Team ─── */}
      <div
        className={`about__team ${teamVisible ? 'about__team--visible' : ''}`}
        ref={teamRef}
      >
        <span className="about__team-label">OUR TEAM</span>

        <div className="about__team-grid">
          {[
            { name: 'Oliver Reed', role: 'Founder' },
            { name: 'Lucas Bennett', role: 'Web Developer' },
            { name: 'Mia Thompson', role: 'Product Designer' },
            { name: 'Emma Hayes', role: 'Content Designer' },
          ].map((member, i) => (
            <div
              className="about__team-member"
              key={member.name}
              style={{ transitionDelay: `${0.1 + i * 0.1}s` }}
            >
              <div className="about__team-img-wrapper">
                {/* Use a cropped portion of the team strip */}
                <div
                  className="about__team-img"
                  style={{
                    backgroundImage: `url(${teamPortraits})`,
                    backgroundPosition: `${i * 33.33}% center`,
                    backgroundSize: '400% 100%',
                  }}
                />
                <div className="about__team-overlay">
                  <span className="about__team-view">VIEW TEAM</span>
                </div>
              </div>
              <div className="about__team-info">
                <span className="about__team-name">{member.name}</span>
                <span className="about__team-role">{member.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
