import './Footer.css';

export function Footer () {

  function resume(){
    return(
      <a href=""></a>
    );
  }
  return (
    <footer>
      <p>© 2026 Sai Kiran. All rights reserved.</p>
      <button onClick={resume}>
        Resume
      </button>
    </footer>
  );
}