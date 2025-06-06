import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="background-dots"></div>
      <div className="hero-content">
        <h1 className="hero-heading">
          <span className="cream">Hey, it's </span>
          <span className="yellow">Prataya Silla 👋🏻</span>
        </h1>
        <h1 className="hero-heading">
          <span className="cream">I Make Fascination in </span>
          <span className="orange">Design 🎨</span>
          <span className="cream"> and </span>
          <span className="teal">Tech</span>
          <span className="cream"> ! 💻</span>
        </h1>
      </div>
    </div>
  );
};

export default HeroSection;
