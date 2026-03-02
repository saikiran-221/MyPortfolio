import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectCard.css';

const ProjectCard = ({ id, title, subtitle, summary, techStack, github, demo }) => {
  return (
    <div className="project-card">
      <h3 className="project-title">{title}</h3>
      {subtitle && <p className="project-subtitle-card">{subtitle}</p>}
      <p className="project-summary">{summary}</p>

      <div className="tech-stack">
        {techStack.map((tech, index) => (
          <span key={index} className="tech-tag">{tech}</span>
        ))}
      </div>

      <div className="project-links">
        <Link to={`/projects/${id}`} className="btn-details">View Details</Link>
        <a href={github} target="_blank" rel="noopener noreferrer" className="btn-github">GitHub</a>
        <a href={demo} target="_blank" rel="noopener noreferrer" className="btn-demo">Live Demo</a>
      </div>
    </div>
  );
};

export default ProjectCard;
