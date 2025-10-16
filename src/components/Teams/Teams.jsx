import React, { useEffect, useState } from "react";
import "./Teams.css";
import {
  FaGithub,
  FaLinkedin,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { FaBehance } from "react-icons/fa";

const teamMembers = [
  {
    name: "Divyadharshana",
    position: "Chief Executive Officer (CEO)",
    image: "/dharsha.jpg",
    github: "https://github.com/Divyadharshana5/",
    linkedin: "https://www.linkedin.com/in/divyadharshana5",
    portfolio: "https://divyadharshana.vercel.app/",
    description:
      "The CEO of Slytherin Company sets the overall vision and strategic direction, leading the organization toward its mission and goals. They oversee all departments, ensuring cohesive operations and long-term success.",
  },
  {
    name: "Ramya",
    position: "Chief Technical Officer (CTO)",
    image: "/ramya.jpg",
    github: "https://github.com/Ramya3106",
    linkedin: "https://www.linkedin.com/in/v-ramya-20971b2a0",
    portfolio: "https://ramyav.vercel.app/",
    description:
      "The CTO of Slytherin Company oversees financial operations, ensuring strong fiscal management and long-term profitability. They lead budgeting, investment strategies, and drive sustainable business growth.",
  },
  {
    name: "Bakyashree",
    position: "Chief Operating Officer (COO)",
    image: "/baks.jpg",
    github: "https://github.com/bakya-shree",
    linkedin: "https://bakyashree-portfolio.netlify.app/",
    portfolio: "https://meenas.com",
    description:
      "The COO oversees daily business operations and ensures smooth execution across all departments. They optimize internal processes and ensure efficient delivery of services and products.",
  },
  {
    name: "Anitha",
    position: "Chief Financial Officer (CFO)",
    image: "/anitha.jpg",
    github: "https://github.com/Anithanu1",
    linkedin: "https://www.linkedin.com/in/anitha-anu-5aa3a3257",
    portfolio: "https://anitha-devportfolio.netlify.app/",
    description:
      "The CFO of Slytherin Company governs data strategy, ensuring data quality, privacy, and insightful analytics. They turn data into a strategic asset to guide business decisions.",
  },
  {
    name: "Jayasri",
    position: "Chief Product Officer (CPO)",
    image: "/jai.jpg",
    github: "https://github.com/Jayasri9786",
    linkedin: "https://www.linkedin.com/in/jayasri-p-ba242a257",
    portfolio: "https://jayasri-dev-portfolio.netlify.app/",
    description:
      "The CPO manages the IT infrastructure and systems, ensuring technology supports business goals. They drive digital efficiency, cybersecurity, and innovation within the organization.",
  },
  {
    name: "Janufa Karona",
    position: "Chief Marketing Officer (CMO)",
    image: "/janufa.jpg",
    behance: "https://www.behance.net/janufakarona",
    linkedin: "https://www.linkedin.com/in/janufa-karona-83b9362a1",

    description:
      "The CMO manages branding, communications, and marketing campaigns to expand Slytherin’s market presence. They focus on customer engagement, sales growth, and building a strong brand identity.",
  },
  {
    name: "Jathika",
    position: "Chief Information Officer (CFO)",
    image: "/jathima.jpg",
    github: "https://github.com/Jathika",
    linkedin: "https://www.linkedin.com/in/jathika-kannan-38a296323",
    portfolio: "https://jathikaportfolio.netlify.app/",
    description:
      "The CIO leads the product vision, strategy, and development lifecycle at Slytherin Company. They focus on delivering user-centric, innovative solutions aligned with market needs.",
  },
];

const members = [
  {
    name: "Jai Ganesh",
    position: "Technical Head",
    image: "/ganesh.jpg",
    github: "https://github.com/jaiganesh2108",
    linkedin: "https://www.linkedin.com/in/jai-ganesh-h-588a48321",
    portfolio: "https://jaiganeshh-luca.vercel.app/",
  },
  {
    name: "M.Mohammed Aashiq",
    position: "Marketing Manager",
    image: "/aashiq.jpg",
    github: "https://github.com/MOHAMMED-AASHIQ-124",
    linkedin: "https://www.linkedin.com/in/mohammed-aashiq-6b339b2a6/",
    portfolio: "https://mohammed-aashiq-0727.netlify.app/ ",
  },
  {
    name: "Allwyn",
    position: "Backend Developer",
    image: "/.jpg",
    github: "https://github.com/allwyn-v",
    linkedin: "",
    portfolio: "",
  },
  {
    name: "Dilli Basker",
    position: "Backend Developer",
    image: "/.jpg",
    github: "",
    linkedin: "",
    portfolio: "",
  },
  {
    name: "Premavathy",
    position: "Frontend Developer",
    image: "/prema.jpg",
    github: "https://github.com/PremavathyV",
    linkedin:
      "https://www.linkedin.com/in/premavathy-vijayan-921a39252?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    portfolio: "premavathy-portfolio.vercel.app",
  },
  {
    name: "",
    position: "Frontend Developer",
    image: "/.jpg",
    github: "",
    linkedin: "",
    portfolio: "",
  },
  {
    name: "Udaya Bhanu",
    position: "Mobile Developer",
    image: "/bhanu.jpg",
    github: "https://github.com/bhanu-3333",
    linkedin: "https://www.linkedin.com/in/udaya-bhanu-s-3003972a6/",
    portfolio: "https://portfolio-hw8i.vercel.app/ ",
  },
  {
    name: "Thejashwini",
    position: "UI/UX Designer",
    image: "/thej.jpg",
    github: "https://github.com/thej1812 ",
    linkedin: "https://www.linkedin.com/in/thejashwini-d/ ",
    behance: "https://www.behance.net/thejashwini-d/ ",
  },
  {
    name: "Silambarasan",
    position: "UI/UX Designer",
    image: "/.jpg",
    github: "",
    linkedin: "",
    portfolio: "",
  },
  {
    name: "Shadrach Benzamin",
    position: "Content Writer",
    image: "/.jpg",
    github: "",
    linkedin: "",
    portfolio: "",
  },
];

const chunkArray = (arr, size) => {
  const res = [];
  for (let i = 0; i < arr.length; i += size) {
    res.push(arr.slice(i, i + size));
  }
  return res;
};

const Teams = () => {
  useEffect(() => {
    const createTrail = (e) => {
      const ripple = document.createElement("div");
      ripple.className = "ripple-trail";
      ripple.style.left = `${e.clientX - 6}px`;
      ripple.style.top = `${e.clientY - 6}px`;
      ripple.style.background = `hsl(${Math.floor(
        Math.random() * 360
      )}, 100%, 70%)`;
      document.body.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    };

    window.addEventListener("mousemove", createTrail);
    return () => window.removeEventListener("mousemove", createTrail);
  }, []);

  const [groupSize, setGroupSize] = useState(window.innerWidth <= 768 ? 2 : 4);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const size = window.innerWidth <= 768 ? 2 : 4;
      setGroupSize(size);
      setCurrentIndex(0);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const chunks = chunkArray(teamMembers, groupSize);

  const scrollLeft = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const scrollRight = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, chunks.length - 1));
  };

  return (
    <section className="teams-section">
      <h1 className="teams-heading">Meet Our Team</h1>
      <div className="floating purple"></div>
      <div className="floating blue delay"></div>
      <div className="teams-wrapper">
        <div className="arrow-controls">
          <button className="arrow-button" onClick={scrollLeft}>
            <FaArrowLeft />
          </button>
          <button className="arrow-button" onClick={scrollRight}>
            <FaArrowRight />
          </button>
        </div>

        <div
          className="teams-container"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {chunks.map((group, i) => (
            <div className="teams-slide" key={i}>
              <div className="teams-grid">
                {group.map((member, j) => (
                  <div
                    key={j}
                    className="team-card"
                    data-aos="fade-up"
                    onClick={(e) => {
                      const ripple = document.createElement("span");
                      ripple.className = "ripple";
                      ripple.style.left = `${
                        e.clientX - e.target.offsetLeft
                      }px`;
                      ripple.style.top = `${e.clientY - e.target.offsetTop}px`;
                      e.currentTarget.appendChild(ripple);
                      setTimeout(() => ripple.remove(), 600);
                    }}
                  >
                    <div
                      className="team-image"
                      style={{ backgroundImage: `url(${member.image})` }}
                      onClick={() => window.open(member.portfolio, "_blank")}
                    ></div>
                    <h3 className="team-name">{member.name}</h3>
                    <p className="team-position">{member.position}</p>
                    <p className="team-description">{member.description}</p>
                    <div className="team-socials">
                      {member.name === "Janufa Karona" ? (
                        <a
                          href={member.behance}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaBehance className="social-icon" />
                        </a>
                      ) : (
                        <a
                          href={member.github}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FaGithub className="social-icon" />
                        </a>
                      )}
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaLinkedin className="social-icon" />
                      </a>
                    </div>
                    <button
                      className="portfolio-button"
                      onClick={() => window.open(member.portfolio, "_blank")}
                    >
                      View Portfolio
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Members Section */}
      <div className="members-section">
        <h2 className="members-heading">Members</h2>
        <div className="members-grid">
          {members.map((member, index) => (
            <div
              key={index}
              className="member-card"
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              <div
                className="member-image"
                style={{ backgroundImage: `url(${member.image})` }}
              ></div>
              <div className="member-info">
                <h3 className="member-name">{member.name}</h3>
                <p className="member-position">{member.position}</p>
                <div className="member-socials">
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="GitHub"
                  >
                    <FaGithub className="member-social-icon" />
                  </a>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="LinkedIn"
                  >
                    <FaLinkedin className="member-social-icon" />
                  </a>
                  <a
                    href={member.portfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Portfolio"
                  >
                    <i className="fas fa-globe member-social-icon"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teams;
