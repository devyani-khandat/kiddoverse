import { ArrowRight, Sparkles, Heart, Star } from "lucide-react";

function Hero() {
  const scrollToPrograms = () => {
    document.getElementById("programs")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section id="home" className="hero">
      {/* Decorative doodles */}
      <span className="doodle doodle-star">✦</span>
      <span className="doodle doodle-scribble">〰</span>
      <span className="doodle doodle-dot">•</span>

      <div className="hero-inner">

        {/* LEFT CONTENT */}
        <div className="hero-content">

          <div className="hero-kicker">
            <Sparkles size={16} />
            A happy place to learn, play & grow
          </div>

          <h1>
            Where little minds
            <span> begin to bloom.</span>
          </h1>

          <p className="hero-description">
            A joyful learning space where curiosity is encouraged,
            confidence grows, and every little discovery matters.
          </p>

          <div className="hero-actions">
            <button
              className="hero-primary"
              onClick={scrollToPrograms}
            >
              Explore Programs
              <ArrowRight size={18} />
            </button>

            <button
              className="hero-secondary"
              onClick={scrollToContact}
            >
              Get in Touch
            </button>
          </div>

          <div className="hero-note">
            <Heart size={17} fill="currentColor" />
            <span>Growing curious minds, one little step at a time.</span>
          </div>

        </div>

        {/* RIGHT VISUAL */}
        <div className="hero-visual">

          <div className="hero-sun"></div>

          <div className="hero-cloud cloud-one"></div>
          <div className="hero-cloud cloud-two"></div>

          {/* Main organic illustration area */}
          <div className="hero-blob">

            <div className="blob-inner">

              <div className="rainbow">
                <div className="rainbow-arc arc-one"></div>
                <div className="rainbow-arc arc-two"></div>
                <div className="rainbow-arc arc-three"></div>
              </div>

              <div className="little-house">
                <div className="house-roof"></div>
                <div className="house-body">
                  <div className="house-window"></div>
                  <div className="house-door"></div>
                </div>
              </div>

              <div className="flower flower-one">
                <span></span>
              </div>

              <div className="flower flower-two">
                <span></span>
              </div>

              <div className="ground-line"></div>

              <div className="hero-character">
                <div className="character-hair"></div>
                <div className="character-face">
                  <span className="eye eye-left"></span>
                  <span className="eye eye-right"></span>
                  <span className="smile"></span>
                </div>
                <div className="character-body"></div>
              </div>

            </div>
          </div>

          {/* Floating labels */}
          <div className="floating-card card-creative">
            <Star size={16} fill="currentColor" />
            <span>Creative</span>
          </div>

          <div className="floating-card card-growing">
            <span className="mini-leaf">⌁</span>
            <span>Growing</span>
          </div>

          <div className="floating-card card-happy">
            <span>☀</span>
            <span>Happy little learners</span>
          </div>

        </div>
      </div>

      {/* Bottom strip */}
      <div className="hero-bottom">
        <span>PLAY</span>
        <span className="bottom-dot">•</span>
        <span>DISCOVER</span>
        <span className="bottom-dot">•</span>
        <span>CREATE</span>
        <span className="bottom-dot">•</span>
        <span>GROW</span>
      </div>
    </section>
  );
}

export default Hero;