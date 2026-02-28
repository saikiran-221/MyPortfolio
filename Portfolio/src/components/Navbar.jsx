import { Link } from 'react-router-dom'

export function Navbar () {
  return (
    <>
      <div>
        <img src="IMG.me.jpg" alt="user image" />
        <h1>Sai kiran</h1>
        <ul>
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