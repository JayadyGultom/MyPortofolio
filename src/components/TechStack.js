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