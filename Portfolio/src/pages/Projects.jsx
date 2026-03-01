import React from 'react';
import ProjectCard from '../components/ProjectCard';
import './Projects.css';

const Projects = () => {
  const projectsData = [
    {
      id: 'bloodconnect',
      title: 'BloodConnect',
      subtitle: 'Centralized Blood Bank Mediation Platform',
      summary: 'A role-based full-stack web application connecting users, hospitals, and blood banks. Implements JWT-based authentication, MySQL database management via Supabase, and structured data handling for secure blood inventory coordination.',
      techStack: ['React', 'JavaScript', 'MySQL', 'JWT'],
      github: 'https://github.com/saikiran-221',
      demo: 'https://blood-bank1-sandy.vercel.app/'
    },
    {
      id: 'smart-crop',
      title: 'Smart Crop Advisory',
      subtitle: 'Data-Driven Crop Recommendation System',
      summary: 'A crop advisory platform that provides structured crop recommendations based on user-input environmental parameters, using conditional logic and data-based filtering to assist agricultural decision-making.',
      techStack: ['React', 'JavaScript', 'Supabase', 'Algorithms'],
      github: 'https://github.com/saikiran-221',
      demo: 'https://team-explorers-upd.vercel.app/'
    }
  ];

  return (
    <div className="page-container projects-page">
      <h1>Projects</h1>
      <div className="projects-list">
        {projectsData.map(project => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
