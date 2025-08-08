// Services.jsx
import React,{useEffect} from "react";
import "./Services.css";

const services = [
  {
    title: "Decentralized Identity & Credential Verification",
    icon: "🔗",
    description:
      "Blockchain-less system to issue, verify, and share digital credentials securely. Ideal for student, employee, or freelancer verification.",
  },
  {
    title: "Agro-Tech Smart Solutions",
    icon: "🧬",
    description:
      "AI-powered dashboards, IoT soil sensors, and crop health analytics to boost smart farming for the digital agriculture era.",
  },
  {
    title: "AI-Enhanced Video Editing Tools",
    icon: "🧠",
    description:
      "Use AI to auto-detect scenes, generate subtitles, mood-match music, and create brand-specific video templates at lightning speed.",
  },
  {
    title: "Intelligent Chat Systems for Businesses",
    icon: "💬",
    description:
      "Multilingual bots with emotion recognition, domain-specific NLP, and voice-to-text support for immersive user experiences.",
  },
  {
    title: "Skill Verification Platform for Recruiters",
    icon: "📚",
    description:
      "Smart resume validation using live assessments, AI-interview simulations, portfolio previews, and coding skill tracking.",
  },
  {
    title: "Virtual Campus / Organization Simulation Portals",
    icon: "🛰️",
    description:
      "Create 3D digital twins of organizations for tours, job fairs, and interactive recruitment powered by AI avatars.",
  },
  {
    title: "Automation as a Service (AaaS)",
    icon: "🔄",
    description:
      "Automate your workflows, emails, reports, and internal tools with zero-code dashboards and custom APIs.",
  },
  {
    title: "Augmented Reality for E-Commerce & Education",
    icon: "👓",
    description:
      "AR flashcards, product try-ons, museum guides, and real estate visualizers—right in your browser or mobile app.",
  },
  {
    title: "Neurodiversity-Inclusive Design Services",
    icon: "🧠",
    description:
      "Build calm, readable, and focused user experiences tailored for ADHD, dyslexia, and neurodivergent audiences.",
  },
  {
    title: "Digital Legacy Management Tools",
    icon: "🌀",
    description:
      "Manage digital assets across generations with secure vaults, future messaging, and smart transfer triggers.",
  },
];

export default function Services() {
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
    <section className="services-section">
        <div className="floating purple"></div>
      <div className="floating blue delay"></div>
      <h2 className="services-heading">🚀 Our Unique & Future-Forward Services</h2>
      <p className="services-subheading">
        Slytherin Pvt. Ltd. – We don't just follow trends, we create them.
      </p>
      <div className="masonry-grid">
        {services.map((service, index) => (
          <div className="masonry-card" key={index} style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
