import AudioPlayer from '../components/AudioPlayer';
import React from 'react';
import Hero from '../components/Hero';
import TechStack from '../components/TechStack';
import Projects from '../components/Projects';
import About from '../components/About';
import Contact from '../components/Contact';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AnimatedShapes from '../components/AnimatedShapes';

const HomePage = () => {
  return (
    <div className="App">
      <AudioPlayer />
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
};

export default HomePage;
