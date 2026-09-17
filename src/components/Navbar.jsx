import { useState } from "react";
import { ChevronDown, Menu, X, ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { programs } from "../data/programs";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);

  const navigate = useNavigate();

  const scrollToSection = (id) => {
    navigate("/");

    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
      });
    }, 50);

    setMenuOpen(false);
    setProgramsOpen(false);
  };

  const openProgram = (id) => {
    navigate(`/programs/${id}`);

    setMenuOpen(false);
    setProgramsOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <button
          className="logo"
          onClick={() => scrollToSection("home")}
        >
          <span className="logo-icon">✦</span>

          <span>
            KIDDO<span className="logo-accent">VERSE</span>
          </span>
        </button>

        {/* Desktop navigation */}
        <nav className="desktop-nav">

          <button onClick={() => scrollToSection("home")}>
            Home
          </button>

          <button onClick={() => scrollToSection("about")}>
            About
          </button>

          {/* Programs dropdown */}
          <div className="programs-nav-wrapper">

            <button
              className="programs-nav-button"
              onClick={() => {
                setProgramsOpen(!programsOpen);
              }}
            >
              Programs
              <ChevronDown
                size={14}
                className={programsOpen ? "rotate-chevron" : ""}
              />
            </button>

            {programsOpen && (
              <div className="programs-dropdown">

                <div className="dropdown-heading">
                  <span>Our little learners</span>
                  <small>Choose a journey</small>
                </div>

                {programs.map((program) => (
                  <button
                    key={program.id}
                    className="dropdown-program"
                    onClick={() => openProgram(program.id)}
                  >
                    <span className="dropdown-icon">
                      {program.icon}
                    </span>

                    <span className="dropdown-program-info">
                      <strong>{program.name}</strong>
                      <small>{program.age}</small>
                    </span>

                    <ArrowUpRight size={16} />
                  </button>
                ))}

                <button
                  className="dropdown-view-all"
                  onClick={() => scrollToSection("programs")}
                >
                  View all programs
                  <ArrowUpRight size={15} />
                </button>

              </div>
            )}

          </div>

          <button onClick={() => scrollToSection("facilities")}>
            Facilities
          </button>

          <button onClick={() => scrollToSection("teachers")}>
            Teachers
          </button>

          <button onClick={() => scrollToSection("activities")}>
            Activities
          </button>

          <button onClick={() => scrollToSection("gallery")}>
            Gallery
          </button>

        </nav>

        {/* CTA */}
        <button
          className="nav-cta"
          onClick={() => scrollToSection("contact")}
        >
          Let's Talk →
        </button>

        {/* Mobile menu */}
        <button
          className="mobile-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? (
            <X size={25} />
          ) : (
            <Menu size={25} />
          )}
        </button>

      </div>

      {/* Mobile navigation */}
      {menuOpen && (
        <nav className="mobile-nav">

          <button onClick={() => scrollToSection("home")}>
            Home
          </button>

          <button onClick={() => scrollToSection("about")}>
            About
          </button>

          <div className="mobile-programs">

            <button
              className="mobile-programs-title"
              onClick={() =>
                setProgramsOpen(!programsOpen)
              }
            >
              Programs
              <ChevronDown
                size={16}
                className={
                  programsOpen ? "rotate-chevron" : ""
                }
              />
            </button>

            {programsOpen && (
              <div className="mobile-program-list">

                {programs.map((program) => (
                  <button
                    key={program.id}
                    onClick={() => openProgram(program.id)}
                  >
                    <span>{program.icon}</span>
                    {program.name}
                  </button>
                ))}

                <button
                  onClick={() => scrollToSection("programs")}
                >
                  View all programs →
                </button>

              </div>
            )}

          </div>

          <button onClick={() => scrollToSection("facilities")}>
            Facilities
          </button>

          <button onClick={() => scrollToSection("teachers")}>
            Teachers
          </button>

          <button onClick={() => scrollToSection("activities")}>
            Activities
          </button>

          <button onClick={() => scrollToSection("gallery")}>
            Gallery
          </button>

          <button
            className="mobile-cta"
            onClick={() => scrollToSection("contact")}
          >
            Let's Talk →
          </button>

        </nav>
      )}
    </header>
  );
}

export default Navbar;