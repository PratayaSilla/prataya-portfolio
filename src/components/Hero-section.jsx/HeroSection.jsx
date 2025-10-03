import "./HeroSection.css";
import SplitText from "./SplitText";

const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="background-dots"></div>
      <div className="hero-content">
        <h1 className="hero-heading">
          <SplitText
            text="Hey, I'm"
            className="cream"
            delay={70}
            duration={0.7}
            splitType="words"
            from={{ opacity: 0, y: 50 }}
            to={{ opacity: 1, y: 0 }}
            tag="span"
          />
          {" "}
          <SplitText
            text="Prataya Silla 👋🏻"
            className="yellow"
            delay={70}
            duration={0.7}
            splitType="words"
            from={{ opacity: 0, y: 50 }}
            to={{ opacity: 1, y: 0 }}
            tag="span"
          />
        </h1>
        
        <h1 className="hero-heading">
          <SplitText
            text="I Make Fascination in"
            className="cream"
            delay={70}
            duration={0.7}
            splitType="words"
            from={{ opacity: 0, y: 50 }}
            to={{ opacity: 1, y: 0 }}
            tag="span"
          />
          {" "}
          <SplitText
            text="Design 🎨"
            className="orange"
            delay={70}
            duration={0.7}
            splitType="words"
            from={{ opacity: 0, y: 50 }}
            to={{ opacity: 1, y: 0 }}
            tag="span"
          />
          {" "}
          <SplitText
            text="and"
            className="cream"
            delay={70}
            duration={0.7}
            splitType="words"
            from={{ opacity: 0, y: 50 }}
            to={{ opacity: 1, y: 0 }}
            tag="span"
          />
          {" "}
          <SplitText
            text="Tech"
            className="teal"
            delay={70}
            duration={0.7}
            splitType="words"
            from={{ opacity: 0, y: 50 }}
            to={{ opacity: 1, y: 0 }}
            tag="span"
          />
          {" "}
          <SplitText
            text="! 💻"
            className="cream"
            delay={70}
            duration={0.7}
            splitType="words"
            from={{ opacity: 0, y: 50 }}
            to={{ opacity: 1, y: 0 }}
            tag="span"
          />
        </h1>
      </div>
    </div>
  );
};

export default HeroSection;