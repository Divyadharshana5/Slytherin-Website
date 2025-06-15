import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

export default function Contact() {
  const form = useRef();

  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await emailjs.sendForm(
        "service_soxu6bp",     // Replace with your EmailJS Service ID
        "template_8iaeu7j",    // Replace with your EmailJS Template ID
        form.current,
        "b3nu03U-nAYu5woPx"      // Replace with your EmailJS Public Key
      );

      console.log(result.text);
      setResponseMessage("✅ Message sent successfully!");
      setSubmitted(true);
    } catch (error) {
      console.error(error.text);
      setResponseMessage("❌ Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-container">
      {!submitted ? (
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <h2 className="contact-title">Contact Us</h2>

          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            className="contact-input"
            required
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            className="contact-input"
            required
          />

          <input
            type="tel"
            name="user_phone"
            placeholder="Phone Number"
            className="contact-input"
            required
          />

          <select name="user_service" className="contact-select" required>
            <option value="">Select a Service</option>
            <option value="Web Development">Web Development</option>
            <option value="Full Stack Development">Full Stack Development</option>
            <option value="UI/UX Design">UI/UX Design</option>
            <option value="Software Engineering">Software Engineering</option>
          </select>

          <textarea
            name="message"
            placeholder="Your Message"
            className="contact-textarea"
            required
          ></textarea>

          <button type="submit" className="contact-button" disabled={loading}>
            {loading ? "Sending..." : "Submit"}
          </button>

          {responseMessage && <p>{responseMessage}</p>}
        </form>
      ) : (
        <div className="success-message">
          <h2>{responseMessage}</h2>
          <button onClick={() => setSubmitted(false)}>Send Another</button>
        </div>
      )}
    </div>
  );
} 
