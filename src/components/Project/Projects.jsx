import React, { useState, useEffect } from "react";
import "./Projects.css";

const Projects = () => {
  const [showProjects, setShowProjects] = useState(false);
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
  return (
    <section className="projects-section">
      <div className="intro">
        <h2>Projects Initiated by Slytherin</h2>
        <p>
          Since our inception, Slytherin has spearheaded various projects
          ranging from innovative freelancing ventures to immersive internship
          experiences and forward-looking future projects. Our work reflects
          precision, collaboration, and impactful results.
        </p>
        <button
          className="showcase-btn"
          onClick={() => setShowProjects(!showProjects)}
        >
          {showProjects ? "Hide Showcase" : "Project Showcase"}
        </button>
      </div>

      {showProjects && (
        <div className="projects-grid">
          {/* Freelancing */}
          <div className="project-card freelancing-card">
            <h3>Freelancing</h3>
            <div className="sub-projects-grid">
              {/* Card 1 */}
              <div className="sub-project-card">
                <h4>Coffee Shop Design Prototype</h4>
                <img src="coffee.jpg" alt="" className="project-image" />
                <p>
                  Designed and deployed a responsive e-commerce site for a local
                  coffee brand with order and delivery integration.
                </p>
                <a
                  href="coffee.mp4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="visit-btn"
                >
                  Visit Site
                </a>
              </div>

              {/* Card 2 */}
              <div className="sub-project-card">
                <h4>Travel Website</h4>
                <img
                  src="travel.jpg"
                  alt="Travel Website"
                  className="project-video"
                />
                <p>
                  Developed a custom Travelling website ,which is enclosed with
                  animative, styling and with interactive actions
                </p>
                <a
                  href="https://travelwebsite-divya.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="visit-btn"
                >
                  View
                </a>
              </div>

              {/* Card 3 */}
              <div className="sub-project-card">
                <h4>Icecream -shop</h4>
                <img
                  src="icecream.jpg"
                  alt="AI Chatbot"
                  className="project-image"
                />
                <p>
                  Created an website which is mostly liked by childrens from
                  adults , you can visit my project and have glance of how it
                  interacts with you
                </p>
                <a
                  href="https://travel-and-tour-website-2t1z.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="visit-btn"
                >
                  Try a Visit
                </a>
              </div>
            </div>
          </div>

          {/* Intern 2025 */}
          <div className="project-card intern-card">
            <h3>Intern 2025</h3>
            <div className="sub-projects-grid">
              {/* Intern Project 1 */}
              <div className="sub-project-card">
                <h4>React Dashboard</h4>
                <img
                  src="react-dashboard.jpg"
                  alt="React Dashboard"
                  className="project-image"
                />
                <p>
                  Interns built an dashboard with React, contacts ,admins and
                  authenticity
                </p>
                <a
                  href="https://basicreact-landingpage.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="visit-btn"
                >
                  View Project
                </a>
              </div>

              {/* Intern Project 2 */}
              <div className="sub-project-card">
                <h4>Data Science</h4>
                <img src="datascience.jpg" controls className="project-video" />
                <p>
                  Data science analystic were made with intern choice of project
                  decision
                </p>
                <a
                  href="data.mp4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="visit-btn"
                >
                  View
                </a>
              </div>

              {/* Intern Project 3 */}
              <div className="sub-project-card">
                <h4>Resume Generator</h4>
                <img
                  src="resume.jpg"
                  alt="AI Resume Scanner"
                  className="project-image"
                />
                <p>
                  Developed an Resume generator tool using frontend frameworks
                  and languages ,which undergoes authenticity and intergrity of
                  multiple registerations
                </p>
                <a
                  href="https://registration-a8xak8x75-jananis-projects-d939603d.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="visit-btn"
                >
                  Try Tool
                </a>
              </div>
            </div>
          </div>

          {/* Upgoing Project */}
          <div className="project-card upgoing-card">
            <span className="badge-new">NEW</span>
            <h3>Upgoing Project: AgriConnect</h3>
            <p>
              <strong>AgriConnect</strong> is our latest R&D initiative designed
              to bridge the gap between <strong>farmers and customers</strong>.
              The platform ensures direct delivery of fresh produce. A third
              party "Hub" steps in to assist when farmers can't fulfill customer
              orders.
            </p>

            <div className="sub-projects-grid">
              {/* Image Preview */}
              <div className="sub-project-card">
                <h4>Website Prototype</h4>
                <img
                  src="ag.cult.jpg"
                  alt="Website Prototype"
                  className="project-image"
                />
                <p>
                  High-fidelity design for the AgriConnect website showcasing
                  product listings, farmer dashboards, and real-time
                  availability.
                </p>
              </div>

              {/* PPT Link */}
              <div className="sub-project-card">
                <h4>Project Overview (PPT)</h4>
                <img
                  src="ppt.jpg.png"
                  alt="PPT Preview"
                  className="project-image"
                />
                <p>
                  Detailed PPT explaining objectives, user roles, workflow, and
                  future roadmap of the AgriConnect system.
                </p>
                <a
                  href="/https://drive.google.com/file/d/1AJzd1s_Qhxww33wJCYg0ujZxFAXAv2Y7/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="visit-btn"
                >
                  View Presentation
                </a>
              </div>

              {/* Launch Announcement */}
              <div className="sub-project-card">
                <h4>Launching Soon 🚀</h4>
                <img
                  src="app.jpeg"
                  alt="App Coming Soon"
                  className="project-image"
                />
                <p>
                  The app version of AgriConnect is under final testing and will
                  be available soon on Android & iOS platforms.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
