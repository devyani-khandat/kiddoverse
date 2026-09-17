import {
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

const galleryItems = [
  {
    id: 1,
    title: "Little Artists",
    label: "CREATIVE PLAY",
    emoji: "🎨",
    color: "gallery-peach",
    size: "gallery-large",
  },
  {
    id: 2,
    title: "Outdoor Adventures",
    label: "EXPLORE",
    emoji: "🌿",
    color: "gallery-mint",
    size: "gallery-small",
  },
  {
    id: 3,
    title: "Story Time",
    label: "LEARN & IMAGINE",
    emoji: "📚",
    color: "gallery-lavender",
    size: "gallery-small",
  },
  {
    id: 4,
    title: "Happy Little Moments",
    label: "EVERYDAY JOY",
    emoji: "🌈",
    color: "gallery-blue",
    size: "gallery-wide",
  },
  {
    id: 5,
    title: "Music & Movement",
    label: "PLAY",
    emoji: "🎵",
    color: "gallery-yellow",
    size: "gallery-small",
  },
];

function Gallery() {
  return (
    <section id="gallery" className="gallery-section">
      <div className="gallery-inner">

        {/* Heading */}
        <div className="gallery-heading">
          <div>
            <p className="section-label">LITTLE MOMENTS</p>

            <h2>
              Memories worth
              <span>keeping.</span>
            </h2>
          </div>

          <p className="gallery-intro">
            From messy masterpieces to joyful adventures,
            every little moment becomes part of their story.
          </p>
        </div>

        {/* Gallery */}
        <div className="gallery-grid">

          {galleryItems.map((item, index) => (
            <article
              key={item.id}
              className={`gallery-card ${item.color} ${item.size}`}
            >

              {/* Number */}
              <span className="gallery-number">
                0{index + 1}
              </span>

              {/* Decorative illustration */}
              <div className="gallery-art">
                <span className="gallery-emoji">
                  {item.emoji}
                </span>

                <span className="gallery-sparkle sparkle-one">
                  ✦
                </span>

                <span className="gallery-sparkle sparkle-two">
                  ✦
                </span>
              </div>

              {/* Information */}
              <div className="gallery-info">
                <span className="gallery-label">
                  {item.label}
                </span>

                <h3>{item.title}</h3>
              </div>

              {/* Arrow */}
              <span className="gallery-arrow">
                <ArrowUpRight size={18} />
              </span>

            </article>
          ))}

        </div>

        {/* Bottom message */}
        <div className="gallery-note">
          <Sparkles size={18} />

          <p>
            Small moments today become beautiful memories tomorrow.
          </p>

          <Sparkles size={18} />
        </div>

      </div>
    </section>
  );
}

export default Gallery;