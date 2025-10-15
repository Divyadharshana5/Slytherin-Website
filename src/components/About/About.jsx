import React, { useEffect } from "react";
import "./About.css";

const About = () => {
  useEffect(() => {
    const createTrail = (e) => {
      const ripple = document.createElement("div");
      ripple.className = "ripple-trail";
      ripple.style.left = `${e.clientX - 6}px`;
      ripple.style.top = `${e.clientY - 6}px`;
      ripple.style.background = `hsl(${Math.floor(Math.random() * 360)}, 100%, 70%)`;
      document.body.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    };

    window.addEventListener("mousemove", createTrail);
    return () => window.removeEventListener("mousemove", createTrail);
  }, []);

  return (
     <section className="about-section">
      <div className="about-container">
         <div className="floating purple"></div>
      <div className="floating blue delay"></div>

        <h1 className="about-title">Welcome to Slytherin Pvt Ltd</h1>
        <p className="about-tagline">
          Empowering innovation through technology and passion.
        </p>

        <div className="about-grid">
          <div className="about-box">
            <h2>Who We Are</h2>
            <p>
              Slytherin Pvt. Ltd. is a next-generation startup focusing on
              intelligent solutions that drive transformation across industries. 
              Our core values lie in innovation, transparency, and empowering change.
            </p>
          </div>

          <div className="about-box">
            <h2>Our Mission</h2>
            <p>
              To create a smarter digital ecosystem by delivering cutting-edge 
              technologies that solve real-world problems. We aim to become a 
              hub of innovation and a catalyst for sustainable progress.
            </p>
          </div>

          <div className="about-box">
            <h2>What We Do</h2>
            <p>
              From custom software development and AI-based platforms to 
              agritech and cybersecurity solutions, we provide full-stack 
              services that scale with your business. We’re here to shape the future.
            </p>
          </div>

          <div className="about-box">
            <h2>Why Choose Us?</h2>
            <ul>
              <li>✅ Tailor-made tech solutions</li>
              <li>✅ Young & talented team</li>
              <li>✅ Industry-level quality & security</li>
              <li>✅ End-to-end support</li>
            </ul>
          </div>
        </div>
  <div className="about-box">
            <h2>🧑‍🤝‍🧑 Meet the Team</h2>
            <p>
              Our dynamic team includes engineers, designers, strategists, and dreamers,
              all working together to turn ideas into impact.
            </p>
          </div>
        <div className="about-footer">
          <p>
            🚀 Join us in building a future where technology meets human 
            potential — the Slytherin way!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;