import React , { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import teamMembers from "./teamData";
import "./Teams.css";

const Team = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.from(containerRef.current, {
      
      y: 30,
      duration: 1.2,
      ease: "power3.out",
    });
  }, []);

  return (
    <div className="teams-container">
      <div className="content" ref={containerRef}>
        <h2 className="title">Meet Our Team</h2>
        <div className="team-grid">
          {teamMembers.map((member) => (
            <Link to={`/member/${member.id}`} key={member.id}>
              <div className="team-card">
                <img src={member.image} alt={member.name} className="team-image" />
                <h3 className="team-name">{member.name}</h3>
                <p className="team-role">{member.domain}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
