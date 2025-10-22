import React, { useEffect } from "react";
import "./Hero.css";

const Hero = () => {
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
    <section className="hero">
      <div className="hero-overlay">
        <div className="floating purple"></div>
        <div className="floating blue delay"></div>
        <div className="hero-container glass">
          <div className="hero-text">
            <h1 className="main-title fade-in delay-1">
              Slytherin Private Solution Limited
            </h1>
            <h2 className="subtitle fade-in delay-2">
              Innovating Digital Excellence
            </h2>
            <h3 className="motto fade-in delay-3">
              ⚡ Code Smart. Scale Fast. Lead Boldly.
            </h3>
            <p className="description fade-in delay-4">
              At <span className="highlight">Slytherin Pvt. Ltd.</span>, we
              empower businesses and individuals
              <br />
              with <span className="highlight">
                cutting-edge technology
              </span>{" "}
              solutions tailored for tomorrow.
              <br />
              Whether you're a startup, enterprise, or creator,
              <br />
              we help you{" "}
              <span className="highlight">transform ideas into impact</span>
              —seamlessly.
            </p>
            <div className="hero-buttons fade-in delay-5">
              <a href="/projects" className="cta-button project-button">
                Explore Projects
              </a>
              <a href="/contact" className="cta-button">
                Get in Touch
              </a>
            </div>
          </div>
          <div className="hero-image fade-in delay-5">
            <div className="logo-frame">
              <img
                src="/Slytherin.jpg"
                alt="Slytherin Logo"
                className="logo-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
