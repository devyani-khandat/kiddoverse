import { ArrowUpRight, Heart, Sparkles } from "lucide-react";

const teachers = [
  {
    id: 1,
    name: "Aanya Sharma",
    role: "Lead Teacher",
    description: "Turns everyday moments into little learning adventures.",
    initial: "A",
    color: "teacher-mint",
  },
  {
    id: 2,
    name: "Riya Mehta",
    role: "Creative Learning Guide",
    description: "Brings stories, art and imagination into every day.",
    initial: "R",
    color: "teacher-peach",
  },
  {
    id: 3,
    name: "Maya Kapoor",
    role: "Early Years Educator",
    description: "Creates a warm space where every little voice matters.",
    initial: "M",
    color: "teacher-lavender",
  },
  {
    id: 4,
    name: "Anika Joshi",
    role: "Activity & Movement Guide",
    description: "Makes learning active, joyful and full of curiosity.",
    initial: "A",
    color: "teacher-blue",
  },
];

function Teachers() {
  return (
    <section id="teachers" className="teachers-section">
      <div className="teachers-inner">

        {/* Heading */}
        <div className="teachers-heading">
          <div>
            <p className="section-label">MEET THE TEAM</p>

            <h2>
              Big hearts behind
              <span>little beginnings.</span>
            </h2>
          </div>

          <p className="teachers-intro">
            Our educators do more than teach. They listen, encourage,
            create and make every child feel seen, safe and ready to explore.
          </p>
        </div>

        {/* Teacher cards */}
        <div className="teachers-grid">
          {teachers.map((teacher, index) => (
            <article
              key={teacher.id}
              className={`teacher-card ${teacher.color}`}
            >
              {/* Decorative number */}
              <span className="teacher-number">
                0{index + 1}
              </span>

              {/* Portrait */}
              <div className="teacher-portrait-wrap">
                <div className="teacher-portrait">
                  <span className="teacher-initial">
                    {teacher.initial}
                  </span>

                  <span className="teacher-face-dot face-one" />
                  <span className="teacher-face-dot face-two" />
                  <span className="teacher-smile" />
                </div>

                <span className="teacher-sparkle">
                  ✦
                </span>
              </div>

              {/* Information */}
              <div className="teacher-info">
                <span className="teacher-role">
                  {teacher.role}
                </span>

                <h3>{teacher.name}</h3>

                <p>{teacher.description}</p>
              </div>

              {/* Bottom detail */}
              <div className="teacher-bottom">
                <span>
                  <Heart size={14} />
                  Little moments matter
                </span>

                <span className="teacher-arrow">
                  <ArrowUpRight size={17} />
                </span>
              </div>

              {/* Doodles */}
              <span className="teacher-doodle teacher-doodle-one">
                〰
              </span>

              <span className="teacher-doodle teacher-doodle-two">
                •
              </span>
            </article>
          ))}
        </div>

        {/* Bottom message */}
        <div className="teachers-note">
          <Sparkles size={18} />
          <p>
            Because the best classrooms are built on curiosity,
            kindness and a whole lot of heart.
          </p>
          <Sparkles size={18} />
        </div>

      </div>
    </section>
  );
}

export default Teachers;