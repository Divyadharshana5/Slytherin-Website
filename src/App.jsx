import React from "react";
import Contact from "./components/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from"./components/About/About"
import "./App.css";

const App = () => {
  return (
    <div>
      <Navbar />
      
      
      <section id="hero" style={{  }}>
      </section>
      <Hero/>
        

        
      <section id="about" style={{  }}>
        </section>
      <About/>
      <section id="teams" style={{ }}>
        
      </section>
      <section id="achievements" style={{  }}>
      
      </section>
      <section id="projects" style={{  }}>
       
      </section>
      <section id="contact" style={{  }}>
       
        <Contact/>
      </section>
    </div>
  );
};

export default App;


