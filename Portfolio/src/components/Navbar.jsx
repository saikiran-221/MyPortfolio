import { Link } from 'react-router-dom'
import IMG from '../assets/IMG.jpg'
import './Navbar.css'

export function Navbar() {
  return (
    <>
      <div className="navbar-container">
        <div className="logo-section">
          <img src={IMG} alt="user image" />
          <h1>Sai kiran</h1>
        </div>
        <ul className="nav-links">
          <button>
            <Link to='/'>HOME</Link>
          </button>
          <button>
            <Link to='/About'>ABOUT</Link>
          </button>
          <button>
            <Link to='/Projects'>PROJECTS</Link>
          </button>
          <button>
            <Link to='/Contact'>CONTACT</Link>
          </button>
        </ul>
      </div>
    </>
  );
}