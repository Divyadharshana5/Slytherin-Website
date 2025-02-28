import { useState } from "react";
import "./Contact.css"; // Import the CSS file

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Web Development",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="success-message">
        <h2>Submitted Successfully! ✅</h2>
      </div>
    );
  }

  return (
    <div className="contact-container">
      <form onSubmit={handleSubmit} className="contact-form">
        <h2 className="contact-title">Contact Us </h2>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          value={formData.name}
          onChange={handleChange}
          className="contact-input"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          value={formData.email}
          onChange={handleChange}
          className="contact-input"
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          required
          value={formData.phone}
          onChange={handleChange}
          className="contact-input"
        />

        <select
          name="service"
          placeholder="service"
          required
         
          onChange={handleChange}
          className="contact-select"
        >
          <option value="Web Development">Web Development</option>
          <option value="Full Stack Development">Full Stack Development</option>
          <option value="UI/UX Design">UI/UX Design</option>
          <option value="Software Engineering">Software Engineering</option>
        </select>

        <button type="submit" className="contact-button">
          Submit
        </button>
      </form>
    </div>
  );
}
