import { useState } from "react";
import "./About.css";

const services = [
  {
    title: "Web Development",
    video: "/Web developer.mp4",
    description:
      "We create stunning and responsive websites using the latest technologies like React, Next.js, and Tailwind CSS.",
  },
  {
    title: "UI/UX Design",
    video: "/Figma.mp4", // Ensure the video is placed inside the 'public' folder
    description:
      "Our UI/UX team designs user-friendly and visually appealing interfaces for websites and applications.",
  },
  {
    title: "Full Stack Development",
    video:"/Full.mp4",
    description:
      "We provide complete end-to-end development solutions, from frontend to backend, ensuring seamless functionality.",
  },
  {
    title: "Software Engineering",
    video:"/soft.mp4",
    description:
      "Our software engineers develop scalable and robust applications tailored to business needs.",
  },
];

export default function About() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section className="about-section">
      {/* Company Intro */}
      <div className="company-info">
        <h2>About Our Company</h2>
        <p>
          We are a leading tech company providing innovative solutions in web
          development, UI/UX design, full-stack development, and software
          engineering. Our mission is to build high-quality digital products
          that drive success.
        </p>
      </div>

      {/* Services Grid */}
      <div className="services-grid">
        {services.map((service, index) => (
          <div
            key={index}
            className="service-card"
            onClick={() => setSelectedService(service)}
          >
            <h3>{service.title}</h3>
            {/* Show Small Video as an Icon for UI/UX Design */}
            {service.video && service.title === "UI/UX Design" && (
              <video className="service-video-icon" autoPlay loop muted>
                <source src={service.video} type="video/mp4" />
              </video>
            )}
                {/* Show Small Video as an Icon for UI/UX Design */}
            {service.video && service.title === "Web Development" && (
              <video className="service-video-icon" autoPlay loop muted>
                <source src={service.video} type="video/mp4" />
              </video>
            )}
             {/* Show Small Video as an Icon for UI/UX Design */}
            {service.video && service.title === "Full Stack Development" && (
              <video className="service-video-icon" autoPlay loop muted>
                <source src={service.video} type="video/mp4" />
              </video>
            )}
             {/* Show Small Video as an Icon for UI/UX Design */}
            {service.video && service.title === "Software Engineering" && (
              <video className="service-video-icon" autoPlay loop muted>
                <source src={service.video} type="video/mp4" />
              </video>
            )}
          </div>
        ))}
      </div>

      {/* Service Description */}
      {selectedService && (
        <div className="service-details">
          <h3>{selectedService.title}</h3>
          <p>{selectedService.description}</p>
          <button onClick={() => setSelectedService(null)}>Close</button>
        </div>
      )}
    </section>
  );
}

       
       
