import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Blog from '../components/Blog';
import BlogDetail from '../components/BlogDetail';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AnimatedShapes from '../components/AnimatedShapes';
import AudioPlayer from '../components/AudioPlayer';

const BlogPage = () => {
  return (
    <div className="App">
      <AnimatedShapes />
      <Navbar />
      <Routes>
        <Route path="/" element={<Blog />} />
        <Route path="/:id" element={<BlogDetail />} />
      </Routes>
      <Footer />
      <AudioPlayer />
    </div>
  );
};

export default BlogPage;
