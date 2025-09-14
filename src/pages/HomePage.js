import React from 'react';
import Hero from '../components/Hero';
import TechStack from '../components/TechStack';
import Projects from '../components/Projects';
import About from '../components/About';
import Contact from '../components/Contact';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AnimatedShapes from '../components/AnimatedShapes';
import AudioPlayer from '../components/AudioPlayer';

const HomePage = () => {
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
      <AudioPlayer />
    </div>
  );
};

export default HomePage;
