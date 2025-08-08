import { useRef, useState,useEffect} from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

export default function Contact() {
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
  
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await emailjs.sendForm(
        "service_i5kynaq",
        "template_kysco2c",
        form.current,
        "c0-KpmztQtU1RuDlw"
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
    <section id="contact" className="contact-section">
      <div className="floating purple"></div>
      <div className="floating blue delay"></div>

      <div className="contact-wrapper centered">
        <div className="contact-header">
          <h2 className="gradient-text">Let's Talk</h2>
          <p className="contact-subtext">
            Have a project in mind or want to collaborate? I'm just a message away!
          </p>
        </div>

        <div className="contact-form-container">
          <h3 className="section-title">Send me a message</h3>
          {!submitted ? (
            <form ref={form} onSubmit={sendEmail} className="contact-form">
              <div className="form-grid">
                <div>
                  <label className="form-label">Your Name</label>
                  <input type="text" name="user_name" required className="contact-input" placeholder="John Doe" />
                </div>
                <div>
                  <label className="form-label">Email Address</label>
                  <input type="email" name="user_email" required className="contact-input" placeholder="john@example.com" />
                </div>
              </div>

              <div>
                <label className="form-label">Phone Number</label>
                <input type="tel" name="user_phone" required className="contact-input" placeholder="+1234567890" />
              </div>

              <div>
                <label className="form-label">Select a Service</label>
                <select name="user_service" className="contact-select" required>
                  <option value="">Choose one</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Full Stack Development">Full Stack Development</option>
                  <option value="UI/UX Design">UI/UX Design</option>
                  <option value="Software Engineering">Software Engineering</option>
                </select>
              </div>

              <div>
                <label className="form-label">Your Message</label>
                <textarea name="message" rows="5" className="contact-textarea" placeholder="Type your message here..." required></textarea>
              </div>

              <button type="submit" className="contact-button" disabled={loading}>
                {loading ? "Sending..." : "Submit"} <span>🚀</span>
              </button>

              {responseMessage && <p className="response-message">{responseMessage}</p>}
            </form>
          ) : (
            <div className="success-message">
              <h2>{responseMessage}</h2>
              <button onClick={() => setSubmitted(false)}>Send Another</button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
