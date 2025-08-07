import React from 'react';

const techs = [
  {
    name: 'Golang',
    desc: 'Programming Language',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg',
  },
  {
    name: 'Javascript',
    desc: 'Programming Language',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  },
  {
    name: 'VB.NET',
    desc: 'Programming Language',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg',
  },
  {
    name: 'Cursor',
    desc: 'AI Code Editor',
    icon: 'https://avatars.githubusercontent.com/u/139895814?s=200&v=4',
  },
  {
    name: 'Microsoft Visual Studio',
    desc: 'IDE',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg',
  },
  {
    name: 'React JS',
    desc: 'Framework',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  },
  {
    name: 'XAMPP',
    desc: 'Web Development Stack',
    icon: 'data:image/webp;base64,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',
  },
];

const TechStack = () => (
  <section className="techstack">
    <h2 className="section-title">Tech Stack</h2>
    <div className="techstack-grid">
      {techs.map((tech, i) => (
        <div className="techstack-card" key={i} data-aos="fade-up">
          <div className="techstack-icon" style={{background: '#222'}}>
            <img src={tech.icon} alt={tech.name} />
          </div>
          <div>
            <div className="techstack-title">{tech.name}</div>
            <div className="techstack-desc">{tech.desc}</div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default TechStack;