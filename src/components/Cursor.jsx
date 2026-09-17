import { useEffect, useState } from "react";

function Cursor() {
  const [position, setPosition] = useState({
    x: -100,
    y: -100,
  });

  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Disable custom cursor on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;

      setPosition({
        x: clientX,
        y: clientY,
      });

      const particle = {
        id: Date.now() + Math.random(),
        x: clientX + (Math.random() * 14 - 7),
        y: clientY + (Math.random() * 14 - 7),
        type: Math.random() > 0.78 ? "star" : "dot",
      };

      setParticles((current) => [
        ...current.slice(-11),
        particle,
      ]);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  if (
    typeof window !== "undefined" &&
    window.matchMedia("(pointer: coarse)").matches
  ) {
    return null;
  }

  return (
    <>
      {/* Pencil cursor */}
      <div
        className="custom-cursor"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      >
        <svg
          className="cursor-pencil"
          width="38"
          height="38"
          viewBox="0 0 38 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Pencil tip */}
          <path
            d="M2 2L7.5 12L12 7.5L2 2Z"
            fill="#F1C7A8"
            stroke="#26364A"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />

          {/* Pencil body */}
          <path
            d="M7.5 12L25.5 30L31 24.5L13 6.5L7.5 12Z"
            fill="#67B3A4"
            stroke="#26364A"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />

          {/* Pencil stripe */}
          <path
            d="M11 8L29 26"
            stroke="#F4D56A"
            strokeWidth="3"
          />

          {/* Eraser */}
          <path
            d="M25.5 30L29 33.5C30.1 34.6 31.9 34.6 33 33.5L35 31.5C36.1 30.4 36.1 28.6 35 27.5L31 24.5L25.5 30Z"
            fill="#D8C8EA"
            stroke="#26364A"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />

          {/* Tiny graphite tip */}
          <path
            d="M2 2L4.2 6.1"
            stroke="#26364A"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Doodle trail */}
      <div className="cursor-particles">
        {particles.map((particle) => (
          <span
            key={particle.id}
            className={`cursor-particle ${particle.type}`}
            style={{
              left: `${particle.x}px`,
              top: `${particle.y}px`,
            }}
          >
            {particle.type === "star" ? "✦" : ""}
          </span>
        ))}
      </div>
    </>
  );
}

export default Cursor;