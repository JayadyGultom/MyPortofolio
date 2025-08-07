import React, { useState } from 'react';

const projects = [
  {
    id: 1,
    title: "Coming Soon",
    description: "Project baru yang sedang dikembangkan. Nantikan sesuatu yang inovatif, canggih, dan penuh kejutan dari saya! Stay tuned for the next big thing.",
    image: <img src="https://cdn-icons-png.flaticon.com/512/4712/4712035.png" alt="Android Robot Error" />,
    tags: ["In Progress", "AI", "Web", "Future"],
    video: process.env.PUBLIC_URL + "/asset/meme-beruang.mp4"
  },
  {
    id: 2,
    title: "Sistem Perpustakaan",
    description: "Aplikasi desktop sistem perpustakaan yang dibangun menggunakan VB.NET sebagai antarmuka utama, terintegrasi dengan RESTful API berbasis Golang untuk mengelola proses backend seperti autentikasi, pengolahan data, dan komunikasi server. Fitur utama: kelola anggota, kelola buku, peminjaman, pengembalian, dan log aktivitas.",
    image: <img src="https://i.imgur.com/MZ3XxT6.png" alt="Sistem Perpustakaan App" />,
    tags: ["VB.NET", "Golang", "Desktop Application", "Windows Forms", "Database"],
    github: "https://github.com/JayadyGultom/VB.Net---Perpustakaan.git"
  }
];

const Projects = () => {
  const [showVideoPopup, setShowVideoPopup] = useState(false);
  const [currentVideo, setCurrentVideo] = useState('');

  const handleCardClick = (project) => {
    if (project.video) {
      // Tampilkan popup video
      setCurrentVideo(project.video);
      setShowVideoPopup(true);
    } else if (project.github) {
      // Buka GitHub
      window.open(project.github, '_blank');
    }
  };

  const closeVideoPopup = () => {
    setShowVideoPopup(false);
    setCurrentVideo('');
  };

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="project-card" 
              data-aos="fade-up"
              onClick={() => handleCardClick(project)}
              style={{ cursor: 'pointer' }}
            >
              <div className="project-image">
                {project.image}
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, index) => (
                  <span key={index} className="project-tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Popup */}
      {showVideoPopup && (
        <div className="video-popup-overlay" onClick={closeVideoPopup}>
          <div className="video-popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="video-popup-close" onClick={closeVideoPopup}>
              ×
            </button>
            <video 
              autoPlay 
              loop
              className="video-popup-video"
              src={currentVideo}
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects; 