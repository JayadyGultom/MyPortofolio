import React from 'react';

const projects = [
  {
    id: 1,
    title: "Coming Soon",
    description: "Project baru yang sedang dikembangkan. Nantikan sesuatu yang inovatif, canggih, dan penuh kejutan dari saya! Stay tuned for the next big thing.",
    image: <img src="https://cdn-icons-png.flaticon.com/512/4712/4712035.png" alt="Android Robot Error" style={{width:'100%',height:'100%',objectFit:'contain'}} />,
    tags: ["In Progress", "AI", "Web", "Future"]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card" data-aos="fade-up">
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
    </section>
  );
};

export default Projects; 