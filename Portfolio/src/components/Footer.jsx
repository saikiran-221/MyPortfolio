import './Footer.css';

export function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <p className="copyright-text">© 2026 Sai Kiran. All rights reserved.</p>
        <a href="resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-button">
          Resume
        </a>
      </div>
    </footer>
  );
}