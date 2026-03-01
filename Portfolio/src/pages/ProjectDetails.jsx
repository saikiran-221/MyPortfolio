import React from 'react';
import { useParams } from 'react-router-dom';
import './ProjectDetails.css';

const ProjectDetails = () => {
  const { projectId } = useParams();

  const projectsContent = {
    bloodconnect: {
      title: 'BloodConnect',
      subtitle: 'Centralized Blood Bank Mediation Platform',
      description: 'BloodConnect is a centralized blood mediation system designed to streamline communication between donors, hospitals, and blood banks. The application supports multiple user roles with controlled access and secure authentication mechanisms.',
      problem: 'The system implements JWT-based authentication to enable stateless and secure session management. Role-based logic ensures that users, hospitals, and blood banks access only authorized features.',
      highlights: [
        'Implemented JWT-based authentication for secure user sessions',
        'Designed role-based access control (User, Hospital, Blood Bank)',
        'Managed relational data using MySQL (integrated via Supabase)',
        'Integrated Kaggle mock dataset to simulate external data sources',
        'Built dynamic protected routes in React',
        'Structured modular frontend architecture for scalability'
      ],
      architecture: 'MySQL (integrated via Supabase) is used for structured relational data management, including user profiles, blood inventory records, and blood request tracking. A Kaggle-based mock dataset is integrated to simulate external health data sources. The frontend is built using React with protected routes and dynamic rendering based on authentication state.',
      techStack: {
        Frontend: ['React', 'JavaScript', 'CSS'],
        Database: ['MySQL (Supabase)'],
        Concepts: ['JWT Authentication', 'Role-based Logic'],
        Tools: ['Git', 'GitHub', 'Vercel']
      },
      github: 'https://github.com/saikiran-221',
      demo: 'https://blood-bank1-sandy.vercel.app/'
    },
    'smart-crop': {
      title: 'Smart Crop Advisory',
      subtitle: 'Data-Driven Crop Recommendation System',
      description: 'Smart Crop Advisory is a web-based agricultural recommendation system designed to assist farmers in selecting suitable crops based on environmental and input conditions.',
      problem: 'The application processes user-provided parameters such as soil type, environmental factors, or predefined agricultural criteria and applies rule-based decision logic to generate relevant crop recommendations.',
      highlights: [
        'Developed rule-based crop recommendation logic',
        'Built dynamic input forms with state-driven rendering',
        'Managed crop dataset storage using MySQL (via Supabase)',
        'Implemented conditional filtering algorithms for data mapping',
        'Designed responsive and structured UI for usability'
      ],
      architecture: 'The frontend is developed using React for dynamic form handling and state management. Supabase is used for storing and retrieving crop datasets efficiently. The system architecture emphasizes structured input validation, logical condition mapping, and scalable data retrieval mechanisms.',
      techStack: {
        Frontend: ['React', 'JavaScript', 'CSS'],
        Database: ['MySQL (Supabase)'],
        Logic: ['Conditional filtering algorithms', 'Structured state management'],
        Tools: ['Git', 'GitHub']
      },
      github: 'https://github.com/saikiran-221',
      demo: 'https://team-explorers-upd.vercel.app/'
    }
  };

  const project = projectsContent[projectId];

  if (!project) {
    return <div className="page-container">Project not found.</div>;
  }

  return (
    <div className="page-container project-details-page">
      <div className="project-header">
        <div className="header-content">
          <h1>{project.title}</h1>
          <p className="project-subtitle">{project.subtitle}</p>
        </div>
        <div className="header-actions">
          <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn-primary">Live Demo</a>
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-secondary">GitHub</a>
        </div>
      </div>

      <div className="details-grid">
        <div className="details-main">
          <section className="detail-section">
            <h3>Overview</h3>
            <p>{project.description}</p>
          </section>

          <section className="detail-section">
            <h3>Key Highlights</h3>
            <ul className="highlights-list">
              {project.highlights.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="detail-section">
            <h3>Architecture & Logic</h3>
            <p>{project.architecture}</p>
          </section>
        </div>

        <aside className="details-sidebar">
          <div className="sidebar-card">
            <h3>Tech Stack</h3>
            {Object.entries(project.techStack).map(([category, skills]) => (
              <div key={category} className="stack-category">
                <h4>{category}</h4>
                <div className="tech-tags">
                  {skills.map(skill => <span key={skill} className="tech-tag">{skill}</span>)}
                </div>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
};

export default ProjectDetails;
