import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Teams from "./components/Teams/Teams";
import Contact from "./components/Contact/Contact";

import TeamMember from "./components/Teams/TeamMember";
import bgVideo from "./assets/bgvideo.mp4";
import "./App.css";

const App = () => {
  return (
    <>
      <Router>
        {/* ✅ Background Video */}
        <video
          className="video-background"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={bgVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <Navbar />

        <div className="main-content">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/member/:id" element={<TeamMember />} />
            
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;

