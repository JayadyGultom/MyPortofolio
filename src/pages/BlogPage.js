import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Blog from '../components/Blog';
import BlogDetail from '../components/BlogDetail';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AnimatedShapes from '../components/AnimatedShapes';

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
    </div>
  );
};

export default BlogPage;
