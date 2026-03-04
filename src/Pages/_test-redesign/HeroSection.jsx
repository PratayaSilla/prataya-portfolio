import React, { useState, useEffect, useRef } from 'react';
import './HeroSection.css';
import heroImage from './assets/aesthetic.jpg';
import showreelThumb from './assets/hero-motion-blur.png';

const LogoSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="95" height="61" viewBox="0 0 95 61" fill="none">
    <path d="M64.4922 0C58.0859 0 52.1484 2.01172 47.2656 5.44922C42.207 1.89453 36.25 0 30.0195 0C13.4766 0 0 13.4766 0 30.0391C0 46.6016 13.4766 60.0781 30.0391 60.0781C36.25 60.0781 42.207 58.2031 47.2852 54.6289C52.168 58.0469 58.1055 60.0781 64.5117 60.0781C81.0742 60.0781 94.5508 46.6016 94.5508 30.0391C94.5508 13.4766 81.0547 0 64.4922 0ZM85 9.19922L43.6719 50.5664C42.6953 49.5898 41.7969 48.5352 40.9766 47.4219L81.8555 6.50391C82.9688 7.32422 84.0234 8.22266 85 9.19922ZM81.2305 6.05469L40.5078 46.7578C39.6875 45.5859 38.9648 44.375 38.3203 43.0859L77.5586 3.86719C78.8281 4.51172 80.0586 5.23438 81.2305 6.05469ZM76.8164 3.51562L37.9688 42.3438C37.3242 40.9766 36.7969 39.5508 36.3672 38.0859L72.5586 1.91406C74.0234 2.34375 75.4492 2.87109 76.8164 3.51562ZM71.6797 1.67969L36.1328 37.2266C35.7227 35.5859 35.4492 33.9062 35.3125 32.1875L66.6406 0.859375C68.3594 0.976563 70.0391 1.26953 71.6797 1.67969ZM64.5117 0.78125C64.8633 0.78125 65.2344 0.800782 65.5859 0.800782L35.2734 31.1328C35.2539 30.7617 35.2539 30.4102 35.2539 30.0391C35.2539 28.2617 35.4102 26.5234 35.7227 24.8438L59.3164 1.25C60.9961 0.9375 62.7344 0.78125 64.5117 0.78125ZM57.9102 1.54297L35.9961 23.457C38.4961 12.5977 47.0703 4.04297 57.9102 1.54297ZM44.2188 51.1133L85.5664 9.76562C86.5234 10.7617 87.4219 11.8359 88.2227 12.9492L47.4023 53.7695C46.2891 52.9687 45.2148 52.0703 44.2188 51.1133ZM48.0664 54.2383L88.6914 13.6133C89.4922 14.7852 90.2148 16.0352 90.8398 17.3242L51.7773 56.3867C50.4883 55.7617 49.2578 55.0391 48.0664 54.2383ZM52.5195 56.7188L91.1914 18.0664C91.8164 19.4531 92.3242 20.8789 92.7344 22.3828L56.8359 58.2617C55.3516 57.8516 53.9062 57.3438 52.5195 56.7188ZM57.7148 58.4961L92.9492 23.2422C93.3398 24.9023 93.5938 26.6016 93.6914 28.3398L62.8125 59.2383C61.0742 59.1406 59.3555 58.8867 57.7148 58.4961ZM71.7383 58.3789L92.8516 37.2656C90.2148 47.5977 82.0508 55.7422 71.7383 58.3789ZM93.1641 35.8398L70.293 58.7109C68.418 59.082 66.4844 59.2969 64.4922 59.2969C64.2969 59.2969 64.082 59.2969 63.8672 59.2773L93.75 29.4141V30.0391C93.75 32.0312 93.5547 33.9648 93.1641 35.8398Z" fill="white"/>
  </svg>
);

/* Globe icon for local time */
const GlobeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <path d="M2 12h20"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
);

/* Figma icon */
const FigmaIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
    <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.354-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.098-7.509a3.023 3.023 0 0 0-3.019 3.019 3.023 3.023 0 0 0 3.019 3.019h.098a3.023 3.023 0 0 0 3.019-3.019 3.023 3.023 0 0 0-3.019-3.019h-.098z"/>
  </svg>
);

/* Framer icon */
const FramerIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
    <path d="M4 0h16v8H12l8 8H4V8h8L4 0zm0 16h8v8l-8-8z"/>
  </svg>
);

export default function HeroSection() {
  const [currentTime, setCurrentTime] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        }).toLowerCase()
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Trigger entrance animations after mount
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={`hero ${isVisible ? 'hero--visible' : ''}`} ref={heroRef}>
      {/* ─── Left Panel: Image ─── */}
      <div className="hero__left">
        <div className="hero__image-wrapper">
          <img
            src={heroImage}
            alt="Motion blur silhouette"
            className="hero__image"
          />
        </div>

        {/* Brand name */}
        <div className="hero__brand anim-fade anim-delay-1">
          <span className="hero__brand-text">prataya</span>
        </div>

        {/* Floating SVG icon on image */}
        <div className="hero__floating-icon anim-fade anim-delay-3">
          <LogoSVG />
        </div>
      </div>

      {/* ─── Right Panel: Content ─── */}
      <div className="hero__right">
        {/* Top bar */}
        <div className="hero__topbar">
          <div className="hero__topbar-left anim-slide-up anim-delay-2">
            <span className="hero__asterisk">✦</span>
            <span className="hero__tagline-text">TRANSFORMING IDEAS<br />INTO ICONIC BRANDS</span>
          </div>

          <div className="hero__topbar-center anim-slide-up anim-delay-2">
            <div className="hero__stars">★★★★★</div>
            <div className="hero__social-icons">
              <span className="hero__social-icon"><FigmaIcon /></span>
              <span className="hero__social-icon"><FramerIcon /></span>
            </div>
            <span className="hero__social-text">Designing stories that<br />matter</span>
          </div>

          <div className="hero__topbar-right anim-fade anim-delay-1">
            <div className="hero__time">
              <GlobeIcon />
              <span className="hero__time-label">Local time</span>
              <span className="hero__time-value">{currentTime}</span>
            </div>
            <button className="hero__menu-btn">MENU</button>
          </div>
        </div>

        {/* Main headline */}
        <div className="hero__headline-area">
          <h1 className="hero__headline">
            <span className="hero__headline-line anim-clip-up anim-delay-3">NARRATIVE</span>
            <span className="hero__headline-row anim-clip-up anim-delay-4">
              <div className="hero__showreel">
                <div className="hero__showreel-media">
                  <img
                    src={showreelThumb}
                    alt="Showreel preview"
                    className="hero__showreel-img"
                  />
                </div>
                <div className="hero__showreel-bar">
                  <div className="hero__showreel-play">
                    <span className="hero__play-icon">▶</span>
                    <span>PLAY SHOWREEL</span>
                  </div>
                  <span className="hero__showreel-time">02.58</span>
                </div>
              </div>
              <span className="hero__headline-text">MEETS</span>
            </span>
            <span className="hero__headline-line anim-clip-up anim-delay-5">DESIGN</span>
          </h1>
        </div>
      </div>
    </section>
  );
}
