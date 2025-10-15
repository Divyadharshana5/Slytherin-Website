import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Teams from "./components/Teams/Teams";
import Services from "./components/ Services/Services";
import Contact from "./components/Contact/Contact";
import Projects from "./components/Projects/Projects";

import './App.css'

const App=()=>{
  return (
    <>
      <Router>
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            
          </Routes>
        </div>
       
      </Router>
    </>
  );
};

export default App;
