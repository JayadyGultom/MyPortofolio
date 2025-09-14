import React from 'react';

const defaultImg = "https://ui-avatars.com/api/?name=Your+Name&background=4ecdc4&color=fff&size=256&rounded=true";
let profileImg;
try {
  profileImg = require('../asset/Profil.jpg');
} catch {
  profileImg = defaultImg;
}

const Hero = () => {
  return (
    <section id="profile" className="hero" style={{scrollMarginTop: '80px'}}>
      <div className="hero-container">
        <div className="profile-photo">
          <img src={profileImg} alt="Profile" />
        </div>
        <div className="hero-content">
          <h1>Jayady Managam Gultom</h1>
          <p className="subtitle">Mahasiswa Teknik Informatika</p>
          <p className="description">
          Ambitious web developer dedicated to delivering clean code, intuitive design, and scalable solutions — ready to tackle challenges and contribute to innovative projects across the globe.
          </p>
          <button className="cta-button">View My Work</button>
        </div>
      </div>
    </section>
  );
};

export default Hero; 