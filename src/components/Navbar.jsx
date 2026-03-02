import { Link } from 'react-router-dom'
import IMG from '../assets/IMG.jpg'
import './Navbar.css'

export function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo-section">
          <img src={IMG} alt="Logo" className="logo-img" />
          <span className="brand-name">M Sai Kiran</span>
        </Link>

        <div className="nav-elements">
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
          <a href="/SaiKiranResume.pdf" className="btn-resume" target="_blank" rel="noopener noreferrer">
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
