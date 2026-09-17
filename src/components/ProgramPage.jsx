import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { programs } from "../data/programs";

function ProgramPage() {
  const { programId } = useParams();
  const navigate = useNavigate();

  const program = programs.find(
    (item) => item.id === programId
  );

  if (!program) {
    return (
      <main className="program-page-not-found">
        <h1>Program not found</h1>

        <button onClick={() => navigate("/")}>
          Back to KIDDO­VERSE
        </button>
      </main>
    );
  }

  return (
    <main className={`program-page program-page-${program.color}`}>
      
      <button
        className="program-back"
        onClick={() => navigate("/")}
      >
        <ArrowLeft size={18} />
        Back to KIDDO­VERSE
      </button>

      <div className="program-page-inner">

        <div className="program-page-icon">
          {program.icon}
        </div>

        <p className="program-page-age">
          {program.age}
        </p>

        <h1>{program.name}</h1>

        <p className="program-page-tagline">
          {program.tagline}
        </p>

        <p className="program-page-description">
          {program.description}
        </p>

        <div className="program-highlights">
          {program.highlights.map((highlight) => (
            <div
              className="program-highlight"
              key={highlight}
            >
              ✦ {highlight}
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}

export default ProgramPage;