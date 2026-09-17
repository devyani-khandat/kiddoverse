import {
  Palette,
  Music2,
  BookOpen,
  Leaf,
  Puzzle,
  Sparkles,
} from "lucide-react";

const activities = [
  {
    id: 1,
    title: "Creative Art",
    description: "Painting, drawing and making little ideas come alive.",
    icon: <Palette size={25} />,
    color: "activity-peach",
  },
  {
    id: 2,
    title: "Music & Movement",
    description: "Songs, rhythm and joyful movement for growing bodies.",
    icon: <Music2 size={25} />,
    color: "activity-lavender",
  },
  {
    id: 3,
    title: "Story Time",
    description: "Wonderful stories that spark imagination and curiosity.",
    icon: <BookOpen size={25} />,
    color: "activity-mint",
  },
  {
    id: 4,
    title: "Nature Explorers",
    description: "Little adventures that help children discover nature.",
    icon: <Leaf size={25} />,
    color: "activity-blue",
  },
  {
    id: 5,
    title: "Play & Puzzles",
    description: "Fun games that encourage thinking, teamwork and discovery.",
    icon: <Puzzle size={25} />,
    color: "activity-yellow",
  },
  {
    id: 6,
    title: "Little Discoveries",
    description: "Hands-on experiences designed around curious little minds.",
    icon: <Sparkles size={25} />,
    color: "activity-peach",
  },
];

function Activities() {
  return (
    <section id="activities" className="activities-section">
      <div className="activities-inner">

        {/* Heading */}
        <div className="activities-heading">
          <div>
            <p className="section-label">PLAY & DISCOVER</p>

            <h2>
              Little moments,
              <span>big discoveries.</span>
            </h2>
          </div>

          <p className="activities-intro">
            Every day brings something new to explore.
            Our activities help little minds learn through
            movement, creativity, curiosity and play.
          </p>
        </div>

        {/* Activities */}
        <div className="activities-grid">
          {activities.map((activity, index) => (
            <article
              key={activity.id}
              className={`activity-card ${activity.color}`}
            >
              <span className="activity-number">
                0{index + 1}
              </span>

              <div className="activity-icon">
                {activity.icon}
              </div>

              <div className="activity-content">
                <h3>{activity.title}</h3>

                <p>{activity.description}</p>
              </div>

              <span className="activity-arrow">
                ↗
              </span>

              <span className="activity-doodle">
                ✦
              </span>
            </article>
          ))}
        </div>

        {/* Bottom note */}
        <div className="activities-note">
          <Sparkles size={18} />

          <p>
            Play is how little minds make sense of their
            big, wonderful world.
          </p>

          <Sparkles size={18} />
        </div>

      </div>
    </section>
  );
}

export default Activities;