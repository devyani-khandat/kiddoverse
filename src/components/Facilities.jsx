import { motion } from "framer-motion";
import {
  Trees,
  BookOpen,
  Palette,
  ShieldCheck,
  Music2,
  Monitor,
  ArrowUpRight,
} from "lucide-react";

const facilities = [
  {
    icon: Trees,
    title: "Outdoor Play",
    text: "Room to run, explore, climb and discover.",
    className: "facility-green",
  },
  {
    icon: BookOpen,
    title: "Learning Spaces",
    text: "Bright spaces designed for curious little minds.",
    className: "facility-yellow",
  },
  {
    icon: Palette,
    title: "Creative Studio",
    text: "Art, colours and imagination come together.",
    className: "facility-peach",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Caring",
    text: "A warm environment where every child feels secure.",
    className: "facility-blue",
  },
  {
    icon: Music2,
    title: "Music & Movement",
    text: "Songs, rhythm and movement make learning joyful.",
    className: "facility-purple",
  },
  {
    icon: Monitor,
    title: "Smart Learning",
    text: "Thoughtful technology that supports playful learning.",
    className: "facility-teal",
  },
];

function Facilities() {
  return (
    <section id="facilities" className="facilities-section">
      <div className="facilities-inner">

        {/* Heading */}
        <div className="facilities-heading">
          <div>
            <p className="section-label">OUR LITTLE WORLD</p>

            <h2>
              Spaces made for
              <span>little explorers.</span>
            </h2>
          </div>

          <p className="facilities-intro">
            From messy art corners to open play spaces,
            every little detail is designed to help children
            feel happy, curious and ready to discover.
          </p>
        </div>

        {/* Main visual + facilities */}
        <div className="facilities-layout">

          {/* Central visual */}
          <motion.div
            className="facilities-visual"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="visual-sun">☀</div>

            <div className="visual-cloud cloud-one">
              ☁
            </div>

            <div className="visual-cloud cloud-two">
              ☁
            </div>

            <div className="visual-house">
              <div className="house-roof"></div>

              <div className="house-body">
                <div className="house-window"></div>
                <div className="house-door"></div>
              </div>
            </div>

            <div className="visual-rainbow">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <span className="visual-doodle doodle-star">
              ✦
            </span>

            <span className="visual-doodle doodle-scribble">
              〰
            </span>

            <span className="visual-doodle doodle-dot">
              •
            </span>

            <div className="visual-message">
              <strong>Little things</strong>
              <span>make a big difference.</span>
            </div>
          </motion.div>

          {/* Facility list */}
          <div className="facilities-list">
            {facilities.map((facility, index) => {
              const Icon = facility.icon;

              return (
                <motion.article
                  key={facility.title}
                  className={`facility-item ${facility.className}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.07,
                  }}
                >
                  <div className="facility-icon">
                    <Icon size={22} strokeWidth={2} />
                  </div>

                  <div className="facility-content">
                    <h3>{facility.title}</h3>

                    <p>{facility.text}</p>
                  </div>

                  <span className="facility-arrow">
                    <ArrowUpRight size={17} />
                  </span>
                </motion.article>
              );
            })}
          </div>

        </div>

        {/* Bottom line */}
        <div className="facilities-bottom-note">
          <span>✦</span>
          <p>
            Designed around how little minds learn best —
            through play, movement, curiosity and connection.
          </p>
          <span>✦</span>
        </div>

      </div>
    </section>
  );
}

export default Facilities;