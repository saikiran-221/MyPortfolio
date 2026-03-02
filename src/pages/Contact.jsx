import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="page-container contact-page">
      <div className="contact-header">
        <h1>Get In Touch</h1>
        <p className="contact-intro">
          I'm always open to discussing new projects, internship opportunities, or collaborations.
          Feel free to reach out through any of the channels below.
        </p>
      </div>

      <div className="contact-info-grid">
        <div className="contact-card">
          <div className="contact-icon">📧</div>
          <h3>Email</h3>
          <p>Direct communication for professional inquiries.</p>
          <a href="mailto:ramakrishnamiriyala@gmail.com" className="contact-link-btn">
            ramakrishnamiriyala@gmail.com
          </a>
        </div>

        <div className="contact-card">
          <div className="contact-icon">🔗</div>
          <h3>LinkedIn</h3>
          <p>Professional networking and career updates.</p>
          <a href="https://www.linkedin.com/in/miriyalasaikiran" target="_blank" rel="noopener noreferrer" className="contact-link-btn">
            View LinkedIn Profile
          </a>
        </div>

        <div className="contact-card">
          <div className="contact-icon">💻</div>
          <h3>GitHub</h3>
          <p>Source code for my latest projects and contributions.</p>
          <a href="https://github.com/saikiran-221" target="_blank" rel="noopener noreferrer" className="contact-link-btn">
            View GitHub Repositories
          </a>
        </div>
      </div>

      <section className="collab-section">
        <h3>Let's Collaborate</h3>
        <p>
          Currently focusing on Frontend development and transitioning into a Full Stack role.
          If you're looking for a dedicated developer to join your team or work on a project,
          I'd love to hear from you.
        </p>
      </section>
    </div>
  );
};

export default Contact;
