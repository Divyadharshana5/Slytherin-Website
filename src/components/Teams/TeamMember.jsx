import { useParams, Link } from "react-router-dom";
import teamMembers from "./teamData";
import "./Teams.css";

const TeamMember = () => {
  const { id } = useParams();
  const member = teamMembers.find((m) => m.id === parseInt(id));

  if (!member) return <h2>Member not found</h2>;

  return (
    <div className="teams-container">
      <h2 className="team-title">Personal Info</h2>
      <div className="details-container">
        <img
          src={member.image}
          alt={member.name}
          className="details-image"
          style={{
            width: "50vh",
            height: "60vh",
            objectFit: "cover",
            borderRadius: "12px",
            border: "5px solid green",
          }}
        />
        <div className="details-text">
          <h2 className="details-name">{member.name}</h2>
          <p className="details-domain">{member.domain}</p>
          <p className="details-info">{member.details}</p>
          <p className="details-email">📧: {member.Email}</p>
          <p className="details-interests">🌍: {member.Languages}</p>

          <Link to="/Teams" className="back">
            ← Back to Team
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
