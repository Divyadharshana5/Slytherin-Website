import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <div className="hero-content">
        <h1>Welcome to Slytherin</h1>
        <h1>Empowering Your Digital Future</h1>
        <h2>" ⚡Code Like a Slytherin: Cunning, Powerful, Unstoppable."</h2>
        
        <p>
        we turn bold ideas into reality.<br/>
         Whether you're a coder,or a dreamer, <br/>
         there’s a place for you here. Join us,<br/> and let’s craft the 
          future together—one line of code at a time!</p>

          <div className="hero-buttons">
            
            <a href="/contact" className="cta-button secondary">Get in Touch</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

