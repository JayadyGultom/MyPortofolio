import React, { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AnimatedShapes from './components/AnimatedShapes';
import AOS from 'aos';

function App() {
  useEffect(() => {
    AOS.init({ once: false, duration: 1200, mirror: true });
  }, []);

  return (
    <div className="App">
      <AnimatedShapes />
      <Navbar />
      <Hero />
      <TechStack />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
