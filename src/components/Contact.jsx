import { ArrowUpRight, Mail, MapPin, Phone, Sparkles } from "lucide-react";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-inner">

        {/* Heading */}
        <div className="contact-heading">
          <div>
            <p className="section-label">SAY HELLO</p>

            <h2>
              Let's grow
              <span>together.</span>
            </h2>
          </div>

          <p className="contact-intro">
            Have a question, want to visit us, or simply want to know
            more about our little world? We'd love to hear from you.
          </p>
        </div>

        {/* Contact content */}
        <div className="contact-content">

          {/* Left visual */}
          <div className="contact-visual">
            <div className="contact-paper">

              <div className="contact-sun">☀</div>

              <div className="contact-cloud">
                ☁
              </div>

              <div className="contact-sparkle">
                ✦
              </div>

              <div className="contact-message">
                <span>little</span>
                <strong>steps.</strong>
                <span>big dreams.</span>
              </div>

              <div className="contact-rainbow">
                <div></div>
                <div></div>
                <div></div>
              </div>

              <div className="contact-doodle">
                〰
              </div>

            </div>

            <div className="contact-tag contact-tag-one">
              <Sparkles size={14} />
              Happy
            </div>

            <div className="contact-tag contact-tag-two">
              <span>♡</span>
              Caring
            </div>
          </div>

          {/* Right information */}
          <div className="contact-info">

            <div className="contact-item">
              <div className="contact-icon">
                <Mail size={20} />
              </div>

              <div>
                <span>Email</span>
                <strong>hello@kiddoverse.com</strong>
              </div>

              <ArrowUpRight size={18} />
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <Phone size={20} />
              </div>

              <div>
                <span>Phone</span>
                <strong>+91 98765 43210</strong>
              </div>

              <ArrowUpRight size={18} />
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <MapPin size={20} />
              </div>

              <div>
                <span>Visit us</span>
                <strong>Our little learning world</strong>
              </div>

              <ArrowUpRight size={18} />
            </div>

            <button className="contact-button">
              Let's Talk
              <ArrowUpRight size={18} />
            </button>

          </div>

        </div>

        {/* Bottom note */}
        <div className="contact-note">
          <Sparkles size={18} />

          <p>
            Little conversations can lead to big beginnings.
          </p>

          <Sparkles size={18} />
        </div>

      </div>
    </section>
  );
}

export default Contact;