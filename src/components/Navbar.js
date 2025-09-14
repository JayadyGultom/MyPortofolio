import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    
    // Jika berada di halaman blog, navigasi ke home dulu
    if (location.pathname.startsWith('/blog')) {
      navigate('/');
      // Tunggu lebih lama agar halaman home benar-benar dimuat
      setTimeout(() => {
        const element = document.querySelector(targetId);
        if (element) {
          const navbarHeight = 80; // Approximate navbar height
          const elementPosition = element.offsetTop - navbarHeight;
          window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
          });
        } else {
          // Jika elemen belum ditemukan, coba lagi setelah delay lebih lama
          setTimeout(() => {
            const element = document.querySelector(targetId);
            if (element) {
              const navbarHeight = 80; // Approximate navbar height
              const elementPosition = element.offsetTop - navbarHeight;
              window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
              });
            }
          }, 500);
        }
      }, 200);
    } else {
      // Jika di halaman home, langsung scroll
      const element = document.querySelector(targetId);
      if (element) {
        const navbarHeight = 80; // Approximate navbar height
        const elementPosition = element.offsetTop - navbarHeight;
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  const handleHomeClick = (e) => {
    e.preventDefault();
    
    // Jika berada di halaman blog, navigasi ke home dulu
    if (location.pathname.startsWith('/blog')) {
      navigate('/');
      // Scroll ke profile section setelah navigasi
      setTimeout(() => {
        const element = document.querySelector('#profile');
        if (element) {
          const navbarHeight = 80; // Approximate navbar height
          const elementPosition = element.offsetTop - navbarHeight;
          window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
          });
        } else {
          window.scrollTo({ 
            top: 0, 
            behavior: 'smooth' 
          });
        }
      }, 200);
    } else {
      // Jika di halaman home, scroll ke profile section
      const element = document.querySelector('#profile');
      if (element) {
        const navbarHeight = 80; // Approximate navbar height
        const elementPosition = element.offsetTop - navbarHeight;
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      } else {
        window.scrollTo({ 
          top: 0, 
          behavior: 'smooth' 
        });
      }
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="/" className="logo" onClick={handleHomeClick}>JayM.Gultom</a>
        <ul className="nav-links">
          <li><a href="/" onClick={handleHomeClick}>Home</a></li>
          <li><a href="#projects" onClick={(e) => handleNavClick(e, '#projects')}>Projects</a></li>
          <li><a href="#about" onClick={(e) => handleNavClick(e, '#about')}>About</a></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><a href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; 