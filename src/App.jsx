import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cursor from "./components/Cursor";
import Programs from "./components/Programs";
import Facilities from "./components/Facilities";
import Teachers from "./components/Teachers";
import Activities from "./components/Activities";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import WhatsAppButton from "./components/WhatsAppButton";
import ProgramPage from "./components/ProgramPage";

function SiteLayout({ children }) {
  return (
    <>
      <Cursor />
      <Navbar />
      <WhatsAppButton />
      {children}
    </>
  );
}

function HomePage() {
  return (
  <SiteLayout>
    <main>
        <Hero />

        <section id="about" className="about-section">
          <div className="about-inner">

            <div className="about-content">
              <p className="section-label">
                OUR LITTLE WORLD
              </p>

              <h2>
                A little space
                <span>for big little dreams.</span>
              </h2>

              <p className="about-description">
                At KIDDO­VERSE, learning begins with curiosity.
                We create a warm, playful environment where children
                feel safe to ask questions, explore new ideas and
                discover the world around them.
              </p>

              <p className="about-description">
                Because childhood isn't about rushing to the next
                milestone. It's about enjoying the little moments
                along the way.
              </p>

              <div className="about-values">

                <div className="about-value">
                  <span className="value-number">01</span>
                  <div>
                    <h3>Curious</h3>
                    <p>We encourage little questions.</p>
                  </div>
                </div>

                <div className="about-value">
                  <span className="value-number">02</span>
                  <div>
                    <h3>Creative</h3>
                    <p>We give imagination room to grow.</p>
                  </div>
                </div>

                <div className="about-value">
                  <span className="value-number">03</span>
                  <div>
                    <h3>Caring</h3>
                    <p>We make every child feel seen.</p>
                  </div>
                </div>

              </div>
            </div>

            <div className="about-visual">
              <div className="about-paper">

                <div className="paper-scribble">〰</div>
                <div className="paper-star">✦</div>
                <div className="about-sun">☀</div>
                <div className="about-cloud">☁</div>

                <div className="about-message">
                  <span>little</span>
                  <strong>things</strong>
                  <span>matter.</span>
                </div>

                <div className="about-rainbow">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>

                <div className="about-flower flower-a">
                  ✿
                </div>

                <div className="about-flower flower-b">
                  ✿
                </div>

              </div>

              <div className="about-tag tag-one">
                <span>♡</span>
                Safe
              </div>

              <div className="about-tag tag-two">
                <span>✦</span>
                Happy
              </div>
            </div>

          </div>
        </section>

        <Programs />

        <Facilities />

        <Teachers />

        <Activities />

        <Gallery />

        <Contact />

          </main>
  </SiteLayout>
);
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route
  path="/programs/:programId"
  element={
    <SiteLayout>
      <ProgramPage />
    </SiteLayout>
  }
/>
    </Routes>
  );
}

export default App;