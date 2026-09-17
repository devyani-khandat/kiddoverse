import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { programs } from "../data/programs";

function Programs() {
  const navigate = useNavigate();

  return (
    <section id="programs" className="programs-section">
      <div className="programs-inner">

        {/* Section heading */}
        <div className="programs-heading">
          <div>
            <p className="section-label">OUR PROGRAMS</p>

            <h2>
              Little learners,
              <span>big adventures.</span>
            </h2>
          </div>

          <p className="programs-intro">
            Every age has its own way of discovering the world.
            Our programs grow with your little one.
          </p>
        </div>

        {/* Program cards */}
        <div className="programs-grid">
          {programs.map((program, index) => (
            <article
              key={program.id}
              className={`program-card program-${program.color}`}
              onClick={() => navigate(`/programs/${program.id}`)}
            >
              {/* Decorative number */}
              <span className="program-number">
                0{index + 1}
              </span>

              {/* Icon */}
              <div className="program-icon">
                {program.icon}
              </div>

              {/* Content */}
              <div className="program-content">
                <span className="program-age">
                  {program.age}
                </span>

                <h3>{program.name}</h3>

                <p className="program-tagline">
                  {program.tagline}
                </p>

                <p className="program-description">
                  {program.description}
                </p>
              </div>

              {/* Bottom action */}
              <div className="program-action">
                <span>Explore program</span>

                <span className="program-arrow">
                  <ArrowUpRight size={19} />
                </span>
              </div>

              {/* Doodles */}
              <span className="program-doodle doodle-one">
                ✦
              </span>

              <span className="program-doodle doodle-two">
                〰
              </span>

              <span className="program-doodle doodle-three">
                •
              </span>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Programs;